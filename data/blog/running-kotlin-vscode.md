---
title: 'Running Kotlin Code in VSCode'
date: '2017-08-06T12:46:41.0Z'
draft: false
category: 'Tech'
tags:
  - 'Kotlin'
  - 'VSCode'
summary: "Suppose you want to test some Kotlin code, but it is too simple for you so you don't want to create a project in your IDE and it also too complex to put it in your REPL"
---

Suppose you want to test some Kotlin code, but it is too simple for you so you don't want to create a project in your IDE and it also too complex to put it in your [REPL](https://nolambda.stream/experimenting-kotlin-without-editor/)

For me, the solution would be:

1. `code ~/Desktop/test.kt`
2. Write some Kotlin function
3. Run it with [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

That's it, simple 3 steps to get your hands wet in Kotlin code. The only limitation with **Code Runner** in Kotlin is you have to call your function from `main` function and you have to install the [command line compiler](https://kotlinlang.org/docs/tutorials/command-line.html) first.

Example:

```kotlin
fun main(args: Array<String>){
    println(\"test\")
}
```

Because what Code Runner does is just:

```
cd \"/Users/esa/Desktop/\" && kotlinc test.kt -include-runtime -d test.jar && java -jar test.jar
```

Still a lot faster than if you have to do it yourself, aight? Cao ~ \ud83d\udc4b
