---
title: Things I Keep Forgetting - Debugging Annotation Processor in Android Build
date: '2023-09-10'
tags: ['IntelliJ', 'JVM', 'Gradle', 'APT']
draft: false
summary: There's an error in your Android build and it points to your annotation processing code. But, you can't debug it. Here's how to do it.
---

Here's the problem, there's an error in your build, upon reading the error message you notice that this error is not from your code, but from the annotation processor that you use.

**You're thinking:** if this an app code, you can just run the app and attache the debugger to your app process.

But now it's in the compilation process, how can you debug it?

## The Solution

Same as in Android app development, the application that you can debug is a **debuggable** application. Since the annotation processing is being executed
by Gradle, we need to make the Gradle process debuggable.

To do that, you can run Gradle in debug mode:

```
./gradlew :app:assembleDebug -Dorg.gradle.debug=true --no-daemon
```

Above command will run `:app:assembleDebug` task in debug mode without the [Gradle daemon](https://docs.gradle.org/current/userguide/gradle_daemon.html). We disable the daemon because it runs in a separate process. Disabling the daemon also means we have a controlled environment for our debugging process.

After that, you can attach the debugger to the Gradle process. Since Gradle using [JDWP](https://www.baeldung.com/java-application-remote-debugging#jdwp), we can use IntelliJ or Android Studio debugger.

First, we need to create a new remote debugger configuration by going to

1. `Run -> Edit Configurations`
2. And then click the plus (`+`) button that says `Add New Configuration`
3. Choose `Remote JVM Debug`
4. Change the name and save the configuration

![Edit Configuration Menu](/static/images/posts/ide_run_configurations.png)

After that, you can do the debugging like you usually do in Android app development, add breakline, step, evaluate and everything.

## But, where's the code that I want to debug?

Above solution is fine when we have the annotation processor code such in scenario where we develop one. But, what if we want to debug the annotation processor code that we don't have access to?

Adding annotation proceesor artifact in `annotationProcessor` or `kapt` configuration will not download the source and not browseable in the IDE

The solution is to **temporarily add the artifact in compile or runtime classpath**

```gradle
dependencies {

   // temporarily add dagger annotation processor in compile classpath
   api "com.google.dagger:dagger-compiler:2.43.2"

   // add dagger as our annotation processor
   kapt "com.google.dagger:dagger-compiler:2.43.2"
}
```

---

FYI this debugging process also works for Gradle plugin or Gradle related code.

Until next time ~



