---
title: "Easy & Free HTTPS with Let's Encrypt"
date: '2017-07-13T12:30:45.0Z'
layout: post
draft: false
path: '/posts/free-https-with-lets-encrypt/'
category: 'Tech'
tags:
  - 'HTTPS'
  - 'SSL'
  - 'VPS'
description: 'HTTPS make the internet better and safer. It allows us to communicate securely in insecure channel such as public Wi-Fi or Internet Cafe.'
---

HTTPS make the internet better and safer. It allows us to communicate securely in insecure channel such as public Wi-Fi or Internet Cafe.

In order to implement HTTPS in our site, we need a certificate that will prove your site is yours. Sure we can create this certificate ourself but, the Browser will only verify the certificate that issued by trusted authorities.

That's when CA (Certificate Authority) come. Just like what their web said, `Let's Encrypt` is a CA that offer you a free certificates

> Let\u2019s Encrypt is a free, automated, and open Certificate Authority.

**Let's get it done!**

I'm gonna only cover the case with \"shell access\", so in order to continue, you have to have shell access to your site.

**1. Installing Certbot**

If you use `Nginx` and `Ubuntu 16.04`, installing `Certbot` will goes like this:

```
$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt-get install python-certbot-nginx
```

For others web server or OS please visit [Certbot Website](https://certbot.eff.org/)

**2. Installing Certificate**

Now with `Certbot`, we can automatically get our certificate and edit `Nginx` configuration!

```
$ sudo certbot --nginx
```

Follow the instruction and submit all the required data.

```
Which names would you like to activate HTTPS for?
-------------------------------------------------------
1: nolambda.stream
-------------------------------------------------------
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel):
```

That's pretty much it, your site should be accessible by HTTPS now! 🔐

**Extra**

If you only want to get your certificate, you can request using

```
$ sudo certbot --nginx --cert-only
```

For others web server or OS please go to [Certbot Website](https://certbot.eff.org/)

Until next time, cao ~
