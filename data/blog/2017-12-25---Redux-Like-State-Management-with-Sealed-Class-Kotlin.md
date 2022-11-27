---
title: 'Redux-Like State Management with Sealed Class in Kotlin'
date: '2017-12-25T15:56:46.0Z'
draft: false
category: 'Tech'
tags:
  - 'Kotlin'
  - 'Redux'
  - 'Front End'
summary: 'On the previous post, we already discussed how your view should have its own model. We also have discussed how you can make a simple redux-like state machine in Kotlin.'
---

On the previous post, we already discussed how your view should have its own model. We also have discussed how you can make a simple redux-like state machine in Kotlin.

In this post, we're gonna talk about a more complex state and how can `sealed class` in Kotlin can make help you.

#### Why sealed class?

[Sealed class](https://kotlinlang.org/docs/reference/sealed-classes.html) in Kotlin is used for representing restricted class hierarchies, when a value can have one of the types from a limited set, but cannot have any other type.

Since our UI state is **finite**, `sealed class` would be a pretty good choice for this kind of thing. Aside from that, we also have the compiler and IDE error/warning if our \"_discriminate_\" logic is not exhaustive.

#### State & Goal

Let's define our state & goal here. We have a simple **login form** that:

1. Have three UI components

   - **Username** text field
   - **Password** text field
   - Login button

2. Showing a loading indicator when we request to the API
3. Dismiss the loading indicator when the request is finished, including unsuccessful request
4. Showing an error message for unsuccessful request
5. Showing errors in our text fields if the input rules not met (ex: username empty)

#### Our Code

In our project we're gonna need:

1. Controller / View
2. State
3. Actions
4. Presenter for tie it all together

> We are using RxJava for the sake of my sanity.
> On this post we're not gonna highlight the `Controller/View`. You can find the full example on my [Github](https://github.com/esafirm/talks-codes/tree/master/ReduxLikeState)

##### State

Let's start with something simple, our view model, our view state.

```kotlin
data class LoginState(
        val isLoading: Boolean = false,
        val error: Throwable? = null,
        val formError: FormError? = null,
        val isLoginSuccess: Boolean = false
)

class FormError(
        val usernameErrorMessage: String? = null,
        val passwordErrorMessage: String? = null
) : Throwable()
```

Here we have everything we need for our view. `isLoginSuccess` should only indicate the signal to navigate or some final action.

##### Actions

Now we have our state definition let's define our actions!

```kotlin
sealed class LoginAction

object ShowLoading : LoginAction()
object ShowLoginSuccess : LoginAction()
data class ShowError(val error: Throwable) : LoginAction()
data class ShowFormError(val formError: FormError) : LoginAction()
```

Here we use a `sealed class` called `LoginAction` and all our actions is a child of it.

##### Presenter

Now let's move to the interesting part, the presenter! In our presenter, we have our `reduce` functions, our `state` wrapper in RxJava's `BehaviorSubject`, and of course our `login` function.

> You can separate this into multiple class, but for the simplicity, we're just gonna put it all here in the presenter.

So let's start with how our state is declared in our presenter and wrapper in a `BehaviorSubject` for our view consumption

```kotlin
// inside our presenter
private val subject = BehaviorSubject.create<LoginState>()

fun getObservable() = subject.observeOn(AndroidSchedulers.mainThread())!!
```

It's pretty straight-forward. When we have a new state that we want to push to the view, we're just gonna push it to the `BehaviorSubject` through `subject.onNext(loginState)`. And our view will listen to our state via `getObservable()` like this:

```kotlin
/* inside our controller */
presenter.getObservable().subscribe { state->
    renderError(state)
    renderLoading(state)
    // ... render our success state
}
```

Moving on, let's take a look at our state reducer.

```kotlin
private fun reduce(action: LoginAction): LoginState{
    val prevState = subject.value ?: LoginState()
    return when (action) {
        ShowLoading -> prevState.copy(isLoading = true, error = null, formError = null)
        ShowLoginSuccess -> prevState.copy(isLoading = false, isLoginSuccess = true)
        is ShowError -> prevState.copy(isLoading = false, error = action.error)
        is ShowFormError -> prevState.copy(isLoading = false, formError = action.formError)
    }
}
```

This is where a `sealed class` is showing its power. It forces us to declare every possible variant of `LoginAction`. The logic itself is pretty simple. It takes our previous state or our **initial state** and then we mutate it with our **action**. It's explained before in [here](https://nolambda.stream/simple-state-machine/)

And for the last, when we tie it all together, the `login` function.

```kotlin
fun login(username: String, password: String) {
    verifyForm(username, password)
            .switchMap { requestLoginApi(username, password) }
            .onErrorReturn {
                when (it) {
                    is FormError -> ShowFormError(it)
                    else -> ShowError(it)
                }
            }
            .map(this::reduce)
            .subscribe { subject.onNext(it) }
}
```

Every action is about creating our **action**, our `LoginAction`. And after we have the action we want, we just `reduce` it and push it to `BehaviorSubject`.

> You can access the full sample project on my [Github](https://github.com/esafirm/talks-codes/tree/master/ReduxLikeState).

That's all for me, also this is the final part of our state management series. Hope it helps! Cao 👋

---

This article is part of the state management series. Check it out! \ud83d\udc40

- [Part 1 - A Model for Your View](https://nolambda.stream/posts/a-model-for-your-view/)
- [Part 2 - Simple State Machine](https://nolambda.stream/posts/a-model-for-your-view/)
- [Part 3 - Redux-Like State Management with Sealed Class in Kotlin](https://nolambda.stream/posts/redux-like-state-management-with-sealed-class/)
