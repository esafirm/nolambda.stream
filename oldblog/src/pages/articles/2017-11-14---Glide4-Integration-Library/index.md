---
title: 'Glide v4 Integration for Library'
date: '2017-11-14T15:32:17.0Z'
layout: post
draft: false
path: '/posts/glide-v4-integration-for-library/'
category: 'Tech'
tags:
  - 'Android'
  - 'Library'
description: "Started from the issue on my image picker library which stated that we should use the new version of Glide, I'm starting to explore this new Glide v4 library and integrate it to the library"
---

Started from the [issue](https://github.com/esafirm/android-image-picker/issues/68) on my [image picker library](https://github.com/esafirm/android-image-picker) which stated that we should use the new version of [Glide](https://github.com/bumptech/glide/), I'm starting to explore this new Glide v4 library and [integrate it to the library](https://github.com/esafirm/android-image-picker/commit/d5969807e5bccdbb5d2798a150a7ef39073a44e5)

If I'm read the semver correctly, this version is bringing breaking changes to Glide. One of this changes is that we have to define a `GlideModule` in our app or library.

This can be done by extending `AppGlideModule` or `LibraryGlideModule` and annotate it with `@GlideModule` annotation like this:

```kotlin
@com.bumptech.glide.annotation.GlideModule
public class ImagePickerGlideModule extends LibraryGlideModule {
}
```

Little did I know, we have to follow that library and app configuration if we want to avoid strange cases like [this one](https://github.com/esafirm/android-image-picker/issues/75)
In fact, there is already an official [documentation](http://bumptech.github.io/glide/doc/configuration.html) about this (but I couldn't find it the first time)

Well, I hope you don't repeat the same mistake. Ciao \ud83d\udc4b
