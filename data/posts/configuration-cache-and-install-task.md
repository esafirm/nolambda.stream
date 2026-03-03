---
title: 'Configuration Cache and the False Economy of Gradle Helper Tasks'
date: '2025-10-26T03:16:41.0Z'
draft: false
category: 'Tech'
tags:
  - Gradle
  - Android
  - Productivity
summary: Creating a new helper task in Gradle is not always a good thing, especially if you're using the configuration cache.
---

The motivation for this post is a habit I’ve had for a long time: I used to have an alias for `./gradlew app:assembleDebug` and `./gradlew app:installDebug` to quickly build and deploy my Android project.

It felt efficient. But since enabling the **Configuration Cache**, I noticed something annoying. Running these two tasks sequentially wasn't as fast as I expected.

**You're thinking:** Since the project is already "configured" for the build, the install task should be instant, right?

**The reality:** Both tasks don't share the same configuration cache entry.

## The Problem

In the world of Gradle, the [Configuration Cache](https://docs.gradle.org/current/userguide/configuration_cache.html) is a godsend for multi-module projects. It saves a snapshot of the task graph so Gradle doesn't have to re-evaluate all your `build.gradle` files every time.

However, the cache is **task-specific**.

When you run `./gradlew app:assembleDebug`, Gradle creates a cache entry for that specific request. If you immediately run `./gradlew app:installDebug`, Gradle looks at the requested task, realizes it doesn't have a cache for _that_ specific graph, and starts the configuration phase all over again.

If your project configuration takes 5-10 seconds, you're paying that tax twice just to get an APK onto your phone.

## The Solution

Instead of relying on the Gradle `install` task and bloating my task graph, I’ve shifted my workflow to lean on [gadb](https://github.com/esafirm/gadb) directly.

I now only run the build task:

```bash
./gradlew app:assembleDebug

```

And then I use `gadb` to handle the installation. By doing this, I keep my Gradle usage "pure"—it hits the Configuration Cache every single time because the requested task never changes.

## Why gadb instead of standard ADB?

While I could use `adb install`, I prefer [gadb](https://github.com/esafirm/gadb) because it offers a significantly better UX for the "build-and-deploy" loop:

- **Multi-device installation:** If I have a physical device and an emulator plugged in, `gadb` handles the targeting without me having to find and copy-paste device serials.
- **Version Downgrade:** We've all hit that `INSTALL_FAILED_VERSION_DOWNGRADE` error. `gadb` handles this by performing an uninstall first when necessary, so you don't have to stop and do it manually.

## But, what if I really want one command?

If you absolutely want a single command, you should combine them in a single Gradle call:

```bash
./gradlew app:assembleDebug app:installDebug

```

This works because Gradle will configure the graph for **both** tasks at once and store it as a single cache entry. The next time you run that _exact_ combination, you'll get the cache hit.

The downside? If you ever decide to just run `assembleDebug` alone later, you're back to a cache miss. This is why I prefer the `gadb` approach—it's decoupled, robust, and keeps my configuration phase out of the way.

---

FYI: Decoupling your build from your deployment is often the fastest way to stay in the "flow" state.

Until next time ~
