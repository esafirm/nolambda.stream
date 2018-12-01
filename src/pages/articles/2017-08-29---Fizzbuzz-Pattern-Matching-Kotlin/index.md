---
title: 'FizzBuzz with Pattern Matching in Kotlin'
date: '2017-08-29T15:27:10.0Z'
layout: post
draft: false
path: '/posts/fizzbuzz-with-pattern-matching-in-kotlin/'
category: 'Tech'
tags:
  - "Kotlin"
  - "Interview"
description: "Seeing FizzBuzz implementation in Clojure with clojure.core.match makes me wondering if Kotlin has the same pattern matching capabilities or at least some resemblance in the way of doing matching."
---

Seeing FizzBuzz implementation in [Clojure with `clojure.core.match`](https://gist.github.com/alandipert/1156115) makes me wondering if Kotlin has the same pattern matching capabilities or at least some resemblance in the way of doing matching.

Unfortunately Kotlin `when` still sort for that. 
Fortunately we still can achieve it with some misuse of `equals` function!

The idea is to create a `Pattern` class that will take the parameter in `when` and return if it's true or not.

```kotlin

// FizzBuzz ModResult -> ModResult( number % 3, number % 5)

class ModResult(val a: Int, val b: Int) {
    override fun equals(other: Any?): Boolean {
        if (other is Pattern) {
            return other.match(this)
        }
        return other == this
    }
}

class FizzPattern : Pattern {
    override fun match(modResult: ModResult): Boolean = modResult.a == 0
}

...Buzz Pattern, FizzBuzz pattern

```

And after that you can just using it with `when`:

```kotlin
(1..100).forEach { number ->
        val result: Any = ModResult(number % 3, number % 5)
        when (result) {
            fizzBuzz -> println("FizzBuzz")
            fizz -> println("Fizz")
            buzz -> println("Buzz")
            else -> println(number)
        }
    }
```

Voila, FizzBuzz with pattern matching-ish in Kotlin! You can find the full code in this [Github File](https://github.com/esafirm/kotlin-playground/blob/master/src/main/kotlin/nolambda.playground/patternmatching/FizzBuzz.kt)

That's all for now, until next time. Cao ~ 👋

