---
title: "Setup Wordpress Behind Reverse Proxy"
date: "2021-05-24T15:47:44Z"
layout: post
draft: false
path: "/posts/setup-wordpress-behind-reverse-proxy/"
category: "Tech"
tags:
  - "Nginx"
  - "Wordpress"
  - "Web"
description: "How you can setup WordPress in your blog path and integrate it with your app"
---

I had this (I think) common problem where we have this web app on `example.com` but we want to have our WordPress blog on `example.com/blog`. Since this is outside the main app we should handle this on the web server, in this case, nginx.

So let's get started! 🚗

### 1. Install Wordpress

Since this is too long to explain here, you can follow this [guide](https://ubuntu.com/tutorials/install-and-configure-wordpress#1-overview) if you use ubuntu like me

### 2. Setup nginx

Add nginx location for path `/blog` that redirect to our WordPress instance.

```nginx
server {
  # Omitted
  ...

  location / {
    # This is where our main app belongs
    ...
  }

  location /blog {
    # Reverse proxy for wordpress
    # Change this to your WordPress location
    proxy_pass http://0.0.0.0/blog; 
    proxy_redirect off;

    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header X-Forwarded-For $remote_addr;
  }
}
```

### 3. Setup WordPress

After that, you must change the site and home URL to the target address, in this case, `example.com/blog`

Open WordPress config file
```
$ vim /usr/share/wordpress/wp-config.php
```

Add this to the top of the file

```php
// Also a ceremony to get WP working behind reverse proxy https
// HTTPS is also works
$target_url='http://example.com/blog';
define('WP_HOME', $setoko_web);
define('WP_SITEURL',$setoko_web);

// Setup for reverse proxy
// Needed if you use HTTPS
define('FORCE_SSL_ADMIN', true);
if ($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
    $_SERVER['HTTPS']='on';
}

if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
  $ips = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
  $_SERVER['REMOTE_ADDR'] = $ips[0];
}
```

Note: you can also change this by logging into your WordPress and change the home and site URL in the setting menu.

---

That's it, restart nginx and now `example.com/blog` should be routed to your WordPress instance.  
