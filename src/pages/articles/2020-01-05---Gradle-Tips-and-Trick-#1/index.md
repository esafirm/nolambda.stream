---
title: "Gradle Tips and Trick #1"
date: "2020-01-05T08:26:05Z"
layout: post
draft: false
path: "/posts/gradle-tips-and-trick-#1/"
category: "Tech"
tags:
  - "Gradle"
  - "Android"
description: "The first series of Gradle tips and tricks that might be helpful for you"
---

Alright, folks, I want to share some Gradle tips and tricks that might already be documented on their official documentation.
But you know, who reads the documentation right? 🙃

This will be a series, so stay tuned.

### Max Worker

You probably already noticed when Gradle execute their tasks, they execute it parallelly. 
You might want to turn it off with `--no-parallel` flag, but how about you just want to reduce your workers?

`--max-workers` flag comes to save you.

```bash
$ ./gradlew build --max-workers 2
```

### Running Gradle in Different Directory

Just like Ruby's `bundler` that search `Gemfile` in our current directory first, Gradle also finds the `build.gradle` in our current directory.
So how we can use `build.gradle` in another directory without actually in that directory? 

You could use `-p` or `--project-dir` to specify the path for your `build.gradle`

```bash
$ ./gradlew build -p parent/another_directory/project
```

### Passing Parameter with Default Value

It's pretty easy to pass a custom parameter to your Gradle tasks. You can specify it with `-P` along with your parameter name.
For some example, if we want to pass a parameter called `doBarrelRoll` you just have to pass it like this

```bash
$ ./gradlew build -PdoBarrelRoll=yes
```

Then what you have to do in your gradle file is

```groovy
// This will have a type of String
final doBarrelRoll = project.property('doBarrelRoll')
```

And then, when you want to put some default value because you don't pass it every time you run your tasks you can add this

```groovy
final doBarrelRoll = project.hasProperty('doBarrelRoll')
  ? project.property('doBarrelRoll')
  : "no"
```

Extra: if you want to pass a `boolean` type, you can use `toBoolean()` function. That's neat!

See you later 👋




