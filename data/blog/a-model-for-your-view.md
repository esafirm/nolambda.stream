---
title: 'A Model for Your View'
date: '2017-12-12T16:04:35.0Z'
draft: false
category: 'Tech'
tags:
  - 'Android'
  - 'Front End'
  - 'Kotlin'
summary: "Not so long ago, on my Android's MVP architecture, my view layer does not have a model. The view only renders what the presenter tell them to do which is good because then, we have a passive view. But, there's no representation of the view itself."
---

Not so long ago, on my Android's MVP architecture, my **view** layer does not have a model. The view only renders what the presenter tell them to do which is good because then, we have a passive view. But, there's no representation of the view itself.

The only way we know the state our view layer is by extracting it one by one. And what about **async** call? How we know there is no race condition or something messed?
How about saving our current state when the process death or screen orientation changes come?

After my experience with React Native and reading [Hannes's blog post about it](http://hannesdorfmann.com/android/mosby3-mvi-1) I believe what is shown in our view layer must be a reflection of our data. What it means is that we must have a _model_ for our view layer.

> If you want to know what a view model can solve, please read Hannes's [post](http://hannesdorfmann.com/android/mosby3-mvi-1). I won't write it again here.

### What we should change

It's not a big change from the traditional Android's MVP architecture. Basically, we're getting closer to MVVM without using a data binding library.

##### 1. Create the view model

So the first thing to do is obviously create your view model. We only want data that change over time a.k.a **state**.

So if you have a view like this:

```kotlin
interface FeedsView {
    fun showProgress(show: Boolean)
    fun showFeeds(feeds: List<Feed>)
    fun showError(error: Throwable)
}
```

Your view model would be more or less like this:

```kotlin
data class FeedsViewState(
    val showProgress: Boolean = false,
    val feeds: List<Feed>? = null,
    val error: Throwable?= null
)
```

##### 2. Change your view `interface`

As we already have all the info we need in our view model/state, we don't need all the different view functions. We just need one

```kotlin
interface FeedsView {
    fun render(state: FeedsViewState)
}
```

##### 3. Change your view implementation

This time you can freely choose whether you want to get smart in your view implementation, or you just want to render whatever the presenter gave to you.

For the example, you can only render list items only when the state provides it.

```kotlin
// inside Fragment or Activity
override fun render(state: FeedsViewState) {
    state.feeds.let { adapter.setData(it) }
}
```

This is simpler in some cases as you don't need to modify your view model on each scenario. But for more complex cases modifying your view model/state before you pass it to view layer is better but need something like a **state reducer** (will write about it later). It also allows us to make the view dumber.

For the example, we want to render list items whether it's empty or `null`. We want to change our implementation to:

```kotlin
override fun render(state: FeedsViewState) {
    adapter.setData(state.feeds.orEmpty())
}
```

It allows us to not giving attention to `state.feeds` condition, what left to do is having our view model reducer/mutator/modifier on our presenter

```kotlin
// in our presenter
private fun reduce(newState: FeedsViewState) =
    newState.copy(feeds= newState.feeds ?: oldState.feeds)
```

That would give you a more predictable state even when your view is detached from your presenter.

That's all for now. Cao 👋

---

This article is part of the state management series. Check it out! \ud83d\udc40

- [Part 1 - A Model for Your View](https://nolambda.stream/posts/a-model-for-your-view/)
- [Part 2 - Simple State Machine](https://nolambda.stream/posts/a-model-for-your-view/)
- [Part 3 - Redux-Like State Management with Sealed Class in Kotlin](https://nolambda.stream/redux-like-state-management-with-sealed-class/)
