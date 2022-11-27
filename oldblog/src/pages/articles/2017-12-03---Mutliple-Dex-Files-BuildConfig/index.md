---
title: 'Multiple Dex Files Defined in Build Config'
date: '2017-12-03T15:49:58.0Z'
layout: post
draft: false
path: '/posts/multiple-dex-files-defined-in-build-config/'
category: 'Tech'
tags:
  - 'Android'
description: 'Have you ever encounter an error like this? '
---

Have you ever encounter an error like this? 

```
Error:Error converting bytecode to dex:
Cause: com.android.dex.DexException: Multiple dex files define Lnolambda.test/BuildConfig;
```

Seems like a multi dex issue right? But wait, this is a green field project. I haven't add any dependencies except for Android support library! But i have multiple module though, hmmm maybe it have something to do with it. 

After some googling and and \"SO searching\" i finally stumbled upon [this](https://stackoverflow.com/questions/25103288/multiple-dex-files-define-my-package-buildconfig-cant-find-the-cause). It turns out the root cause is because i have the same package name in `AndroidManifest.xml`(s). The SO answer is not *marked as answer* but it definitely solve my problem.

So based on that and other searching too, this problem can be happen if:

1. Conflict in package naming in `AndroidManifest.xml` that resulted a conflicted `BuildConfig.java` 
2. Include the same library twice in your classpath
3. And there also some issue regarding `Google Play Service` dependency too. 

Hope this can help anyone with the same issue. That's all from me. Cao 👋
