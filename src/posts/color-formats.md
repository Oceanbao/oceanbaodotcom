---
title: Color Formats in CSS
description: CSS has a whole slew of different color formats: hex codes, rgb(), hsl(), lch(), the list goes on!
date: '2023-5-5'
categories:
  - css
published: true
layout: blog
---

Which one should we use? It might seem like an inconsequential decision, but there are some pretty important differences between them. And, honestly, I think most of us are prioritizing the wrong things. 😅

In this tutorial, I'll take you on a tour of the different options. We'll see how they work, how we can decipher them, and how we can use them to our advantage. Later, I'll show you how modern CSS lets us make on-the-fly adjustments, if we pick the right color format.

## Named colors

So, this isn't really a color format, but it's a good place to start!

HTML comes with 140 named colors. These are special keyword values like dodgerblue, hotpink, and tomato:

It probably goes without saying, but we generally don't use named colors in production applications. 140 colors just isn't enough—it's even less than the 8-bit color palette available on the original NES console!

## Hex codes

Here's how it works: a 6-digit hex code contains three 2-digit values, one for each channel (red / green / blue). Instead of using a 10-digit decimal system, it uses a 16-digit hexadecimal system.

This'll be clearer with an interactive demo. Try dragging the sliders to discover how hex codes work:
