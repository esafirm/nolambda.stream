---
title: "Kotlin Coroutines - Introduction"
date: "2017-07-04T11:09:01.0Z"
layout: post
draft: false
path: "/posts/kotlin_coroutines_introduction/"
category: "Kotlin"
tags:
 - "Tech"
description: "Just like async/await in Javascript and C#, Kotlin Couroutines is trying to make asyncrhronous programming easier by enabling you to write async code with imperative style"
---

Just like `async/await` in Javascript and C#, Kotlin Couroutines is trying to make *asyncrhronous* programming easier by enabling you to write *async* code with imperative style

To give you better understanding what Kotlin Couroutines looks like here's a snippets for comparison between Java basic `Thread`, RxJava `Completable` and Kotlin `Coroutines`

Given 3 job very different jobs that return `Void`, we want to run it sequentially asynchronously and return



```
Job 1
Job 2
Job 3
Job Complete
```

*please note all the codes is written in Kotlin*

**Java Thread**

The problem on the code below is the anti-pattern/code smell called **Callback Hell**

```kotlin
fun printInThread() {
    firstJob {
        otherJob {
            otherOtherJob {
                println("Job Complete")
            }
        }
    }
}
```

**RxJava Completable**

Of course we can make this better, you can wrap your jobs in one `Action` or you could use Kotlin *lambda with receiver* and or *extension method*

After all, what makes Kotlin Couroutines syntax looking good is becase Kotlin language features (AFAIK)

Sorry for not having a better demo, not in the mood to write complicated sample \ud83d\ude1e

```kotlin
Completable.fromAction { println("Rx Job 1") }
            .andThen(Completable.fromAction { println("Rx Job 2") })
            .andThen(Completable.fromAction { println("Rx Job 3") })
            .doOnComplete { println("Job Complete") }
            .subscribeOn(Schedulers.computation())
            .subscribe()
```


**Kotlin Coroutines**

Finally with Coroutines there's so much `fun`! 
Notice the `runBlocking`? That's what make all the jobs running in sequence, with it this async jobs is just another block of imperative code. Notice the `also`? 

```kotlin
fun printInCoroutines() = runBlocking {
    firstJob() // you can also use `suspend` keyword
    async(CommonPool) { println("Coroutines Job 2") }
    async(CommonPool) { println("Coroutines Job 3") }
}.also {
    println("Job Complete")
}

suspend fun firstJob(){
    println("Coroutines Job 1")
}
```

You can also view all the snippets here in my Github repo [here](https://github.com/esafirm/coroutine-samples)

---

There's so much to learn and experiment with Kotlin Couroutines. I heard you can run compose `RxJava` in it too. Curious?