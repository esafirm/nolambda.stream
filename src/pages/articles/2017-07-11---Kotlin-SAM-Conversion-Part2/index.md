---
title: "Lambda and SAM Conversion in Kotlin - Part 2"
date: "2017-07-11T12:17:40.0Z"
layout: post
draft: false
path: "/posts/lambda-and-sam-conversion-in-kotlin-part-2/"
category: "Tech"
tags:
 - "Kotlin"
description: "So we already create `Interface` in Java and convert it to lambda with in Kotlin through SAM conversion. How about `interface` in Kotlin? As the previous part suggest, currently there's no SAM conversion in Kotlin interface."
---

*This is a article is part of the series: Lambda and SAM Conversion in Kotlin*

Previous: [Part 1]()

So we already create `Interface` in Java and convert it to lambda with in Kotlin through SAM conversion. How about `interface` in Kotlin? As the previous part suggest, currently there's no SAM conversion in Kotlin interface.

While [Kotlin community really wanted it](https://blog.jetbrains.com/kotlin/2017/06/kotlin-future-features-survey-results/), i don't think we don't need a SAM conversion for Kotlin `interface`.

 The reason behind this is because **Kotlin has proper function types which render SAM-conversions unnecessary for Kotlin** as quoted from [here](https://discuss.kotlinlang.org/t/kotlin-sam-traits-as-lambda-functions/279). 

So how we solve the boilerplate thingy? 
Simple, use Kotlin function types with `typealias`! 

So instead creating an `intereface` for some click listener:

```kotlin
interface OnClickListener {
    fun onClick(view: View)
}

class View {
    fun setListerner(listener: OnClickListener){...}
}
```

You can create a function type with type alias

```kotlin
typealias OnClickListener = (View) -> Unit

class View {
    fun setListener(listener: OnClickListener){...}
}
```

So you can have your nice lambda again!

```kotlin

// with interface 
View().setOnClickListener(object: OnClickListener {
    override fun onClick(view: View){
        ....
    }
}

// with typealias
View().setOnClickListener { ... } 

```

Until next time, cao ~ \ud83d\udcda