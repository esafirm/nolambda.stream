---
title: 'Lambda and SAM Conversion in Kotlin - Part 1'
date: '2017-07-04T11:28:43.0Z'
layout: post
draft: false
path: '/posts/lambda-and-sam-conversion-in-kotlin-part-1/'
category: 'Tech'
tags:
  - 'Kotlin'
description: "I love lambda expression. Whether it's in Java, Kotlin, or Javascript (arrow function). It helps me remove verbosity from my code"
---

I love lambda expression. Whether it's in Java, Kotlin, or Javascript (arrow function). It helps me remove verbosity from my code, for example:

Given a `View` i want to listen to a _click event_ from user, in this case we want to make the listener to be an interface named `OnClickListener` with **single access method (SAM)**

So the listener will be like this:

```java
public interface OnClickListener{
  void onClick(View view);
}
```

Then i want to bind my view with the listener, without lambda it will go like this:

```java
view.setOnClickListener(new OnClickListener {
  @Override public void onClick(View view){
    // do something
  }
}
```

Even worse, in Kotlin without lambda

```kotlin
view.setOnClickListener(object: OnClickListener{
  fun void onClick(view: View){
    // do something
  }
}
```

<small>4 ~ 5 LOC for listening to user click only</small>

Luckily, in Java 8 you can convert that SAM interface to lambda, and if you targeting Java 7 below you can use [Retrolambda](https://github.com/evant/gradle-retrolambda)! Here's the code after we apply lambda expression

```language-java
view.setOnClickListener(view -> // do something with `view`)
```

So how about Kotlin?

If your **interface is written in Java**, Kotlin automagically [will convert your SAM to lambda expression](https://kotlinlang.org/docs/reference/java-interop.html) just like Java 8 lambda specification

```kotlin
view.setOnClickListener { // do something with `it }
```

<small>If the parameter is singular you can use `it` keyword. [More on this](https://kotlinlang.org/docs/reference/lambdas.html#it-implicit-name-of-a-single-parameter)</small>

Wait what?
That's right folks, **it only convert the interface written in Java.**

And if you don't want to use lambda adapter function, the method with the interface parameter must written in Java too.

```kotlin
view.setOnClickListener( OnClickListener {
  // do something with `it`
})
```

<small>Example of adapter function in lambda. Originally designed to handle multiple method taking functional interface</small>

--
So, how we can implement lambda and or SAM conversion in Kotlin?

Let's discussed it in another time 👋

Cao ~
