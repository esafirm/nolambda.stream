---
title: 'Using MySQL Database with Docker'
date: '2017-12-03T15:53:02.0Z'
draft: false
category: 'Tech'
tags:
  - 'Docker'
  - 'MySQL'
  - 'Ops'
summary: 'Last Saturday I was attending a workshop for Spring Boot in Makers Institute Bandung. The prerequisite for the workshop is we have the tools installed on our private machine. Besides the obvious Java, we also have to install MySQL.'
---

Last Saturday I was attending a workshop for Spring Boot in Makers Institute Bandung. The prerequisite for the workshop is we have the tools installed on our private machine. Besides the obvious Java, we also have to install MySQL.

The last time I install MySQL is with `brew`. It was installed smoothly like 99% of the time I'm using it. But, when I want to remove it (because one and another reason), it wasn't as smooth as the install process. I forgot what is the problem, but I don't want to repeat the same process.

Then I remembered I have Docker installed on my machine. Maybe this can be an alternative. It easier to remove too.

###### How to use it

Getting your image is pretty straightforward:

```
$ docker pull mysql
```

Run your image, set the port to `3306` and set the root password:

```
$ docker run -p 3306:3306 --name nolambdadatabase -e MYSQL_ROOT_PASSWORD=root -d mysql
```

Here `MYSQL_ROOT_PASSWORD` is an environment variable and will be our MySQL root password. So if you want to use `bash` and go into MySQL console you just have to do this:

```
$ docker exec -it nolambdadatabse bash
$ mysql -u root -p
$ ENTER YOUR ROOT PASSWORD HERE
```

And finally since we use JDBC in Spring Boot, all is left to do is to define our data source url in `application.properties`

```
jdbc:mysql://localhost:3306/your_database_name
```

It works like a charm and easy to start/stop it too. I guess I will stick to this setup for now.

That's all from me. Cao 👋
