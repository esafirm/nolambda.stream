---
title: 'Fragment Argument and TransactionTooLargeException'
date: '2021-07-06'
draft: true
category: 'Tech'
tags:
  - 'Android'
  - 'Parcelable'
summary: 'Have you ever got a TransactionTooLarge exception when developing an Android application? How did you solve it?'
---

## Intermezzo

This been a draft since 2021, and my definition of draft is just a title with date.
So yes, when I stumble upon this again, I'm clueless.

## TransactionTooLargeException

Looking at [the documentation](https://developer.android.com/reference/android/os/TransactionTooLargeException) of `TransactionTooLargeException`
we know that it's caused by a transaction that has a payload larger than its limit, to be more specific an RPC (remote procedure call) that has
an argument or return value (which stored in `Parcel` format) that exceed the `Binder` transaction buffer (at the time of writing the limit is 1MB)

The documentation even give a suggestion to avoid this kind of issue

> The key to avoiding TransactionTooLargeException is to keep all transactions relatively small. Try to minimize the amount of memory needed to create a Parcel for the arguments and the return value of the remote procedure call. Avoid transferring huge arrays of strings or large bitmaps. If possible, try to break up big requests into smaller pieces.

**But I don't use any RPC in my Android app?**

Aren't we all?

It turns out we're doing inter process call or in short IPC a subset of RPC (or a superset?) to handle the communication and data passing between Android components e.g Activity, Service, Fragment.

## IPC in Android

There are three IPC in Android system

1. Intents (along with Bundles)
2. Binders
3. ASHMEM (Anonymous Shared Memory) - The main difference between Linux shared memory and this shared memory is, in Linux other processes can't free the shared memory but here if other processes require memory this memory can be freed by Android OS.

_Source: [SO](https://stackoverflow.com/questions/5740324/what-are-the-ipc-mechanisms-available-in-the-android-os)_

So if you ever use `Intent`, `Bundle`, `SavedStateHandle` you are doing an IPC.

## Fragment Argument and TransactionTooLargeException

In my experience, the common pitfall for `TransactionTooLargeException` is when you sending an argument. Whether it is in `Activity` or `Fragment`

```kotlin
// An example of sending an argument through Intent

Intent(context, SuperCoolActivity::class).apply {
  putExtra("Key.First", aStringArgument)
  putExtra("Key.Second", aParcelableArgument)
}
```

```kotlin
// An example of sending argument in Fragment
companion object {
  fun newInstance(argument: Parcelable): SuperCoolFragment {
    val bundle = Bundle().apply {
      putParcelable("Key.First", argument)
    }

    return SuperCoolFragment().apply {
      arguments = bundle
    }
  }
}
```

Arguably, the first example of how we send an argument to `Activity` is easier to reproduce and detect because it will triggered once
we executed it.

The second example is more subtle and could be a time bomb in your application, because it's become a problem
once [state saving](https://developer.android.com/guide/fragments/saving-state) is in action

https://miro.medium.com/max/1400/1*AQ4FT19L-GUrHk2PHzrIsg.png
