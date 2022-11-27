---
title: 'Disable Direct Access to Your IP in Nginx'
date: '2017-07-15T12:32:37.0Z'
draft: false
category: 'Tech'
tags:
  - 'Nginx'
  - 'VPS'
summary: "Often times we don't want to expose our server IP address to public. We just want to access our domain address."
---

Often times we don't want to expose our server IP address to public. We just want to access our domain address.

If you're using [Nginx](https://www.nginx.com) like me, there's a simple workaround for this problem.

Just add another `server` block in your config file under `/etc/nginx/site-available` like this

```
server {
    listen 80;
    server_name YOUR_IP_ADDERSS;
    return 301 YOUR_DOMAIN_NAME;
}
```

It will return 301 (Moved Permanently) and redirect it to your domain address instead.

Simple isn't it? 👌
