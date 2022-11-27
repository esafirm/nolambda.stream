---
title: 'Simple State Machine'
date: '2017-12-17T16:08:13.0Z'
layout: post
draft: false
path: '/posts/simple-state-machine/'
category: 'Tech'
tags:
  - 'Front End'
  - 'Android'
description: "After reading a bunch of unidirectional data flow, Cycle.js's MVI and this article about implementing MVI in Android by Hannes, I'm convinced that this is how I should write my code from now on."
---

After reading a bunch of unidirectional data flow, [Cycle.js's MVI](https://cycle.js.org/model-view-intent.html) and this article about [implementing MVI in Android by Hannes](http://hannesdorfmann.com/android/mosby3-mvi-1), I'm convinced that this is how I should write my code from now on.

But even when we have this rather simple data flow, we still have this problem called **asynchronicity**. Like when we must do some optimistic change to a like button. Have you ever do that?

Redux motivation page said, that mixing mutation and asynchronicity are like have a Mentos with a Coke.

> Both can be great in separation, but together they can create a mess.

This is where Redux enters. It attempts to make state mutations predictable. The core concept of Redux is very simple. Basically, it forces you to have an `immutable model` and one thing that can change it is a state mutator (read: `reducer`) triggered by an `action`

To make it more clear, let's take a look at a simple sample in Kotlin. Supposed that we have this state and action.

```kotlin
// State
data class LoginState(val isLoading: Boolean = false, val isLoginSuccess: Boolean = false)

// Actions, you can also use an Enum or maybe an Int if the action has no properties
object ShowLoading
object ShowLoginSuccess
```

And we have this state mutator function called `reduce`

```kotlin
fun reduce(oldState: LoginState, action: LoginAction): LoginState =
    when(action){
       ShowLoadingAction -> LoginState(isLoading = true)
       ShowLoginSuccess -> LoginState(isLoginSuccess = true)
    }
```

Then only thing that can changes `LoginState` is calling `reduce` with the previous or initial state and our action as the parameter

```kotlin
var state: LoginState = LoginState()
fun onLoginButtonClick() {
    state = reduce(state, ShowLoadingAction())
    // ... render state to view, request to API
    state = reduce(state, ShowLoginSuccess())
    // ... render success state
}
```

And that's it, we already have our simple redux-ish state machine.

The model can be anything! It can be your data layer or a [view state](https://nolambda.stream/a-model-for-your-view/). You can read more about core concept of redux in [here](https://redux.js.org/docs/introduction/CoreConcepts.html)

![](https://raw.githubusercontent.com/pluralsight/guides/master/images/79263077-e972-47c6-93dc-44e466a8e191.gif)
<small><center>A more complex redux diagram. </center></small>

Next, we will try to implement a redux-like state management again in Kotlin using `sealed class`. It's clear that we still not touch **asynchronicity** here so stay tuned!

---

This article is part of the state management series. Check it out! \ud83d\udc40

- [Part 1 - A Model for Your View](https://nolambda.stream/posts/a-model-for-your-view/)
- [Part 2 - Simple State Machine](https://nolambda.stream/posts/a-model-for-your-view/)
- [Part 3 - Redux-Like State Management with Sealed Class in Kotlin](https://nolambda.stream/posts/redux-like-state-management-with-sealed-class/)
