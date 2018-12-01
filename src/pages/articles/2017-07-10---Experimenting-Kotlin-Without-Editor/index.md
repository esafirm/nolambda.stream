---
title: "Experimenting Kotlin without Editor"
date: "2017-07-10T12:16:00.0Z"
layout: post
draft: false
path: "/posts/experimenting-kotlin-without-editor/"
category: "Tech"
tags:
 - "Kotlin"
description: "What will you do if you want to test some Kotlin syntax? 
Chance you are opening your favorite IDE or text editor (not mentioning `vim` or `emacs` user in here) are very likely."
---

What will you do if you want to test some Kotlin syntax?
Chance you are opening your favorite IDE or text editor (not mentioning `vim` or `emacs` user in here) are very likely.

What about go to [Repl.it?](https://repl.it/languages/kotlin) It does provide with with interacitve [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop), but still you have to online and the compile time is really depends on your internet speed.

If you love using Terminal like me, maybe you want to try Kotlin REPL locally. First of all you have to install Kotlin command line compiler in your machine. If you're on macOS and using `brew`, it will be as simple as this:

```
brew install kotlin
```

Voila! Kotlin command line compiler is now installed on your macOS. If you're not on macOS, you can follow the instruction in [here](https://kotlinlang.org/docs/tutorials/command-line.html)

### Running The REPL

To running Kotlin REPL, simply run `kotlinc` after that you will see something like this

```
$ kotlinc
Welcome to Kotlin version 1.1.3 (JRE 1.8.0_92-b14)
Type :help for help, :quit for quit
>>>
```

Running some extension method sample

```
>>> data class Roti(var state: String = \"mentah\")
>>> fun Roti.bakar(): Roti = apply{ this.state = \"bakar\" }
>>> val roti = Roti()
>>> roti.bakar()
Roti(state=bakar)
```

Checking error message

```
>>> roti.rebus()
error: unresolved reference: rebus
roti.rebus()
```

Now you can validate your Kotlin syntax in Terminal first, without creating project in your IDE or even opening your favorite text editor, huzzah! ⚡️
