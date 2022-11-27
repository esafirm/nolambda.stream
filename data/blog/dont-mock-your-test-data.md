---
title: "Don't Mock Your Test Data"
date: '2017-09-21T15:25:08.0Z'
draft: false
category: 'Tech'
tags:
  - 'Test'
summary: 'I found some strange condition when creating a test for a code with RxJava…'
---

I found some strange condition when creating a test for a code with RxJava.

```kotlin
"Verify movie not empty and error" {
        Mockito.`when`(networkSource.getMovies())
                .then { mock<Single<List<Movie>>>() }

        tested.getMovies().test().also {
            it.assertNoErrors()
            it.assertComplete()
            it.assertValueCount(1)
        }
    }
```

The test is simply asserting my `Single` is running completely without error and exactly return one value.
The problem is, my `Single` is neither completed or having an error. It also not returning any value.

```
java.lang.AssertionError: Not completed (latch = 1, values = 0, errors = 0, completions = 0)
```

<center><small> The error message </small> </center>

After scratching my head for the rest of the day, it turns out my test code that was wrong. I stub one of my `Single` to return a **mocked** `Single` that doesn't have behavior like the real `Single` at all.

So lesson learnt here:

1. The root of error in your test, maybe lies in your test, stub, mock logic, not your real code
2. Don't mock your test data, use a real one. Then verify it.

You can find the full sample on my [Github](https://github.com/esafirm/kotlin-playground/blob/master/src/test/kotlin/nolambda.playground/TestObservableSpec.kt)

Until next time. Cao ~ 👋
