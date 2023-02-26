---
title: Things I Keep Forgetting - ABI Jar is Classpath Snapshot in Kotlin
date: '2023-02-26'
tags: ['Kotlin', 'Tooling', 'Compile']
draft: false
summary: I repeteadly googling about the ABI Jar implementation in Gradle when in fact, Kotlin has the feature built-in with different name
images: []
layout: PostSimple
canonicalUrl:
---

[ABI](https://en.wikipedia.org/wiki/Application_binary_interface) Jar or ABI snapshot is a non-complete is basically a JAR that only contains resources and
class interfaces of a module or a source. It is a multi-purpose tool that can be used for many things, but the most important for me is to
speed up the compilation time or more specifically, do the compile avoidance to decrease the compilation time.

If you want to know more about this go to this article of Buck and tweet by Zac Sweers:

1. https://buck.build/concept/java_abis.html
2. https://twitter.com/ZacSweers/status/1441623879328350212

I repeteadly in googling about the ABI Jar implementation in Gradle when in fact, Kotlin has the feature built-in with different name: `Classpath Snapshot`
It's available since Kotlin 1.3 or 1.4 I suppose (too lazy to search) but being a default in Kotlin 1.7

This is the youtrack link that mention it: https://youtrack.jetbrains.com/issue/KT-51964

### Bonus

In fact, we already benchmark the performance of classpath snapshot, not really aware of this we iterate it by doing incremental build with changes
in root node of the dependency graph. The result is… not what we expected. It was a regression. But yes, let's do another benchmark later with this
thing keeps in mind.
