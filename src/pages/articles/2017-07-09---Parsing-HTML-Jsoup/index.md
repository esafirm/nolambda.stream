---
title: "Parsing HTML with jsoup"
date: "2017-07-09T11:44:14.0Z"
layout: post
draft: false
path: "/posts/html-parsing-with-jsoup/"
category: "Tech"
tags:
 - "Tech"
description: "Although a lot of my friends and colleagues use jsoup, i never had a chance to use it. It's my brain default to not choose Java as the language for parsing HTML."
---

Although a lot of my friends and colleagues use `jsoup`, i never had a chance to use it. It's my brain default to not choose Java as the language for parsing HTML. 

There's a lot of boilerplate to do, but with Kotlin, it seems this process getting a little more `fun`! 

##### Introduction

Quoted from `jsoup` [website](https://jsoup.org)

> jsoup is a Java library for working with real-world HTML. It provides a very convenient API for extracting and manipulating data, using the best of DOM, CSS, and jquery-like methods.


##### What it can do

- Scrape and parse HTML from a URL, file, or `String`
- Find and extract data, using DOM traversal or CSS selectors
- Manipulate the HTML elements, attributes and text

`jsoup` doesn't support **XPath**. You can use [xsoup](https://github.com/code4craft/xsoup) for that.

##### Coding Time

Given Hacker News link, we want to extract each story link and format it like this

```
1. A Super Story About Some Startup (https://example.com)
2. Some weird story about JS (https://js.org)
```

First thing first, add `jsoup` dependency to your `build.gradle`

```groovy
compile 'org.jsoup:jsoup:1.10.3'
```

Now in Kotlin file

```kotlin
Jsoup.connect("https://news.ycombinator.com/").get().run {
        select("td a.storylink").forEachIndexed { index, element ->
            println("$index. ${element.text()} (${element.attr(\"href\")})")
        }
    }
```

Done! \ud83c\udf89 I think there's no more reason to not use `jsoup` for your HTML parsing need \ud83d\ude2c

You can find the code on my [Github](https://github.com/esafirm/jsoup-example)

##### Bonus

For css selector, please check this [cheatsheet!](http://www.cheetyr.com/css-selectors)