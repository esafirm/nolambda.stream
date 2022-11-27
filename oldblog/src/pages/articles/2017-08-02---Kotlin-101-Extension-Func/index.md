---
title: 'Kotlin 101 - Extension Function'
date: '2017-08-02T12:34:59.0Z'
layout: post
draft: false
path: '/posts/kotlin-101-extension-function/'
category: 'Tech'
tags:
  - 'Kotlin'
description: "There is some code that we write everywhere. It doesn't have **state** and usually small enough to become a `class`. We often call it a helper function and in Java we used to save it in some `*Utils` class."
---

There is some code that we write everywhere. It doesn't have **state** and usually small enough to become a `class`. We often call it a helper function and in Java we used to save it in some `*Utils` class.

For example i have a `StringUtils` class that have a function called `isNullOrEmpty`. It have no state and small enough.

```java
public class StringUtils {
    public static boolean isNullOrEmpty(String text){
        return text == null || text.isEmpty();
    }
}
```

And to call it

```java
StringUtils.isNullOrEmpty("text"); // return false
```

The downside of this pattern is we used to forget that we wrote it. Hence when the times come, we sometimes create the helper class again and again.

### Extension Function

Just like C# and Swift extension function, (or Javascript prototype if you like) Kotlin has extension function too.

With extension function you have the ability to extend with new functionality without having to inherit from the class

For the example we're gonna convert the `StringUtils` above to Kotlin's extension function

```kotlin
// in StringExt.kt

fun String?.isNullOrEmpty = null || isEmpty()
```

And to call it

```kotlin
"text".isNullOrEmpty() // return false
```

And it will be converted to utility style in Java

```java
StringExt.isNullOrEmpty(\"test\");
```

In Kotlin, we can define the extension function as a top level function, it means we don't have to create it inside a class. Much simpler, eh?

The [motivation](https://kotlinlang.org/docs/reference/extensions.html#motivation) is to tackle the problem above. Another _pros_ is we have a completion after the object typed not beforehand.

I think that's it for extension function, see you next time in another [Kotlin 101](/tag/kotlin101/) series. Cao ~ 👋
