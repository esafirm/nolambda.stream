---
title: Things I Keep Forgetting - Softbrick in 3DS
date: '2025-10-20'
tags: ['3DS', 'Hardwarde']
draft: false
summary: My 3DS that installed with CFW got a softbrick problem, and I got it multiple times. Yet, I keep forgetting how to fix it
---

When a 3DS with CFW (Luma) cannot boot and it only blinking a blue led once, then it's most likely a softbrick.
I'm still not sure the cause of this, but the pattern is, the softbrick happen after we don't close a games and turning of the 3DS.
Technically speaking, it's caused by the firmware cannot read the `boot.firm` on the root of the SD card.

## Verifying the softbrick

- Check if it cannot boot and the blue led only blink once, and then the 3DS turned-off again
- Check if ejecting the SD card fix the boot problem

## Fix the softbrick

There are some discussion that the cause is the corrupted `boot.firm`, so replacing it and other luma files should fix the issue.
In my case this is not.

For me, to fix the problem, we need to

1. Delete the `3ds` directory in root dir, this is why I assumed the cause is also related to the game state when turning-off the device.
2. (Optional) [Update the B9S](https://3ds.hacks.guide/updating-b9s.html)
3. Update Luma (or use the existing version, but download the files again)

Voila! The softbrick is gone! 🌠
