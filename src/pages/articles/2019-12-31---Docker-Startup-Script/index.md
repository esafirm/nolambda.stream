---
title: "Docker Startup Script - Stay Interactive"
date: "2019-12-31T01:09:24Z"
layout: post
draft: false
path: "/posts/docker-startup-script/"
category: "Tech"
tags:
  - "Docker"
  - "DevOps"
description: "You've got options when you want to run something inside Dockerfile, but what if you want to run something when the container 
is started?"
---

It's been a long time since I wrote my last article in this new blog. The only things that I update is the [talks pages](https://nolambda.stream/talks/) because I'm quite active at
giving talks on this year and I'm very proud of it.

So Docker, when you want to run something in it you basically have three instructions to choose. There's `CMD`, `RUN` and `ENTRYPOINT`. 
Every instructions can executing command like shell command 

```
RUN apt-get install python3
CMD echo "Hello world"
ENTRYPOINT echo "Hello world"
```

You can find a better explanation for this in [here](https://goinbigdata.com/docker-run-vs-cmd-vs-entrypoint/)

## Startup

So when the container is created, it is a common use-case that you want to run something. Maybe you want to generate mock data to your database or create
some files based on your environment variables.
In this case you can use `CMD` or `ENTRYPOINT`. The problem is, when you want to go to **interactive** mode.

Usually what you have to do is just use this when you running your docker image

```bash
$ docker run -it ubuntu bash
```

This will create docker container and run interactive bash shell inside the container. But this won't work if you have `ENTRYPOINT` in your dockerfile,
or, the `CMD` will be overrided by the `bash` command (`CMD` is basically `ENTRYPOINT` that purposely easily overrided).

You can override the entrypoint as well with `--entrypoint` like this

```bash
$ docekr run -it --entrypoint "/bin/bash"
```

But it will also prevent your startup script from running. So how can we overcome this situation?

## Startup Script

All you have to do is create the entrypoint script that will run your startup command but also run the command that you pass

```bash
#!/usr/bin/env bash
set -e

## Run startup command 
echo "Hello ENTRYPOINT" >> hello

## Running passed command
if [[ "$1" ]]; then
	eval "$@"
fi
```

And set this script as your entrypoint

```
## Copy the script to PATH, don't forget to add executable
COPY entrypoint.sh bin/entrypoint.sh

## Set it as your entrypoint
ENTRYPOINT [ "entrypoint.sh" ]
```

Tada ~ now you can run anything you passed on and still running your startup script!

For more examples please check the `Dockerfile` in [here](https://github.com/esafirm/dockerimages/tree/master/startupdemo)