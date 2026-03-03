---
title: Things I Keep Forgetting - SSHing into Mac via Tailscale
date: '2026-03-03'
tags: ['macOS', 'SSH', 'Tailscale', 'Networking']
draft: false
summary: You're using Tailscale on your Android and Laptop, but Termius keeps hanging on the Auth phase. Here’s how to fix the silent "DenyList" block.
---

Here's the problem: You’re trying to SSH from your Android phone (using Termius) to your Mac laptop. Both are on your Tailscale network, you can ping the laptop, but the SSH connection just hangs or fails at the authentication phase without a proper error message.

**You're thinking:** Is it the SSH key? Is Termius bugged? Is Tailscale down?

After digging into the macOS system logs, you notice the culprit: your Tailscale IP is being caught in a `DenyList` rule in your SSH configuration.

## The Solution

On macOS, SSH access is often restricted to local network IPs to prevent brute-force attacks from the open internet. If you have a "Match Address" block in your config, it likely doesn't recognize Tailscale's specific IP range.

To fix this, we need to explicitly "trust" the Tailscale network range in your `/etc/ssh/sshd_config`.

### 1. Identify the Tailscale Range

Tailscale uses the **100.64.0.0/10** range. We need to add this to our whitelist.

### 2. Update the Config

Open your SSH config:

```bash
sudo vim /etc/ssh/sshd_config

```

You'll likely see a block at the bottom that denies everything except local IPs. You need to insert `!100.64.0.0/10` (the `!` means "NOT", so it excludes this range from the denial rule). On my case, this was added by me before, but I forgot about it and it caused the same issue again when I reinstalled macOS. (duh!)

Your config should look like this:

```text
# Block everyone EXCEPT local IPs and Tailscale
Match Address *,!100.64.0.0/10,!192.168.0.0/16,!172.16.0.0/12,!10.0.0.0/8,!127.0.0.1,!::1
    DenyUsers *

```

### 3. Apply and Test

Before restarting, always check if you made a typo:

```bash
sudo sshd -t

```

If it returns nothing, restart the SSH daemon:

```bash
sudo launchctl kickstart -k system/com.openssh.sshd

```

## But, how do I know if it's actually working?

If you want to see the "live" drama of your phone trying to connect (and whether it's being accepted or rejected), you can stream the system logs:

```bash
log stream --predicate 'process == "sshd"' --level info

```

Now, when you try to connect from Termius, you’ll see the logs instantly transition from "Failed" to "Accepted."

---

FYI: This logic also applies if you use a specific VPN or a static IP at the office—just add that range to the exclusion list.

Until next time ~
