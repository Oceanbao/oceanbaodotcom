---
title: Animated Pride Flag
description: It's June, which means it's Pride Month! Let's celebrate by building a wavy pixellated pride flag
date: '2023-5-3'
categories:
  - animation
published: true
layout: blog
---

There's a lot of exciting stuff packed into this tutorial. In order to build this flag, we'll need to rely on a handful of tricks I've developed over years of experimentation. You'll learn a ton about keyframe animations, linear gradients, and more. 😄

## Show me the code!

Let's start by looking at a complete implementation. It doesn't have all of the bells and whistles we'll add later, but it shows the fundamental idea.

Don't worry if you can't make much sense of it yet, we'll dig into it in this blog post!

## The fundamental strategy

With this CSS in place, we have a bunch of columns moving up and down. The final missing piece is animation-delay; each column will receive a slightly-larger value. By staggering the animation, we create the illusion of a rippling flag.

Here's a simplified demo. Drag the “Staggered Delay” slider to see the effect at work:
