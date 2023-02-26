---
title: Things I Keep Forgetting - Assemble vs Bundle and bundletools
date: '2023-02-25'
tags: ['Gradle', 'Tooling']
draft: false
summary: Part 1 of thing that I keep forgetting about in tooling and software development in general.
---

With the introduction of [Android App Bundle format (.aab)](https://developer.android.com/guide/app-bundle/app-bundle-format) things are improving for
the user of Android apps. However, this also means a more complicated development process for the developers.

Usually you only need one command to create an APK which is the `assemble` command, for example if we want to build an APK for debug build type:

```
$ ./gradlew :app:assembleDebug
```

However, since we now have an Android App Bundle format, to generate the **full** or **universal** APK, we need to run the `bundle` command:

```
$ ./gradlew :app:bundleDebug
```

And then make the universal apk via [bundletool](https://developer.android.com/studio/command-line/bundletool):

```
$ bundletool build-apks --bundle=app/build/outputs/bundle/debug/app-debug.aab --output=app/build/outputs/apk/debug/app-debug.apks --mode=universal
```

But then, we still can createa an APK using the `assemble` command, but this will only generate the APK for the base module.

So, what does it mean for us if we don't have any dynamic features? Well, it means that we can use the `assemble` command.

It will be much more `simple` and `faster`

### Bonus

You can actually create a universal APK with Gradle task in newer versions of AGP, for example, creating a univeral debug build type APK:

```
$ ./gradlew :app:packageDebugUniversalApk
```
