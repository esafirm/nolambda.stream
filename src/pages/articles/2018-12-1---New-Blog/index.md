---
title: "New Blog"
date: "2018-12-01T11:07:05.0Z"
layout: post
draft: false
path: "/posts/blog-two-point-o/"
category: "Blog"
tags:
 - "Gastby"
 - "Blog"
 - "Ghost"
 - "Netlify" 
description: "So this is my new blog, it is a bit different from the previous one. Well technically this is a lot different from the previous one"
---

So this is my new blog, it is a bit different from the previous one. Well technically this is a lot different from the previous one, except for the previous content. It's because [this blog](https://github.com/esafirm/nolambda.stream) is built on top [GastbyJS](https://www.gatsbyjs.org/) a React-based site generator. While my previous [blog](https://github.com/esafirm/esafirm.github.io/tree/ghost-do) is [Ghost](https://ghost.org/)

So why the changes? Here's the story, at first i want to have (or already have, i can't remember) a blog on Github pages. 
It has several pros:

1. It's Free
2. Painless deployment (You just have to commit and push to publish)
3. Markdown support 

But the thing that always bother is the tooling, i have to install `bundle` and other Ruby's stuff that i don't use from day to day. 

So because of that, i'm searching for alternative. People said it is much much more convenient to have a CMS for blog. You know, Wordpress stuff. But i don't want to use Wordpress, it feels not techie enough for me. So i found [Ghost](https://ghost.org/). 

Not like Wordpress which can be installed in almost every hosting site (maybe every hosting site), Ghost is a little bit limited. It use Node.js which currently is not ubiquotus. At the time, i already have a VPS in Digital Ocean (a lot of trying things out in that VPS) so my choice is naturally to host the blog on that vitrual server.

It really does suit me because:
1. Familiar tooling (NPM & Node.js)
2. Great Markdown support, it has great editor in it
3. CMS, so i don't have to code for anything. 

But the problems start to being noticeable. We lost painless deployment. I'm syncing the git repo between my local machine and the VPS. Sure i don't use it very much because we don't have to change the code if we want to publish something. But still, there's thing that have to be done. Attaching image in post is also painfull. But the most pain point from it all is **I have to paid 5$ a month for the VPS**.

So here we are with GastbyJS and Netlify to host my blog. 
At the end, we got:

1. Free of charge (except the domain)
2. Familiar tooling (NPM, Node, React)
2. Markdown support 
4. Continuous deployment (Netlify)

The only missing part is the built-in editor, be we have VSCode, so i got that going for me which is nice.
For now, what it lacks I can cover with my own tooling. 
Until next time and welcome to my new blog. Cao 👋 ~


