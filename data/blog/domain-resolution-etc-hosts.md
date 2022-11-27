---
title: 'Domain Name Resolution with /etc/hosts'
date: '2017-08-03T12:41:45.0Z'
draft: false
category: 'Tech'
tags:
  - 'Ops'
  - 'UNIX'
  - 'OS'
  - 'DNS'
summary: 'I think we already know that the domain that we use to access some website is just a masking to IP(s). All that fancy name like this blog will be translated to IP by the DNS. But how we can override it?'
---

I think we already know that the domain that we use to access some website is just a masking to IP(s). All that fancy name like this blog [nolambda.stream](https://nolambda.stream) will be translated to IP by the [DNS](https://www.verisign.com/en_US/website-presence/online/how-dns-works/index.xhtml). But how we can override it?

#### The Hosts File

As a matter of fact, i already using the hosts file from years ago without knowing it. If you ever accessing your own machine with `localhost` that means you already use it.

In MacOS and Unix like system the hosts file is located in `/etc/hosts`. For other OS you can find it [here](<https://en.wikipedia.org/wiki/Hosts_(file)>).

So now we know what is the hosts file and the function of it, how we can use it for our benefits?

#### Local Network Environment

Remembering IP is hard (it's relative) use some human readable text to resolve it!

#### Opening Blocked Web

Recently, Telegram is blocked by Indonesian government. You can use the hosts file to override Telegram domain resolution

```
# in /etc/hosts

149.154.167.118\tt.me
149.154.167.118\ttelegram.me
149.154.167.99\ttelegram.org
149.154.167.99\tcore.telegram.org
149.154.167.99\tmy.telegram.org
149.154.167.99\tdesktop.telegram.org
149.154.167.99\tmacos.telegram.org
149.154.167.120\tweb.telegram.org
```

#### Breaking Bad Habit

Have a [social media addiction?](http://www.telegraph.co.uk/technology/0/12-signs-addicted-social-media/) Or maybe you just want to stay out from it. Simple add `facebook.com` and direct it to `arxiv.org`

There's more you can do with it, you can find it [here](http://bencane.com/2013/10/29/managing-dns-locally-with-etchosts/) if you want. That is all for now. Cao ~
