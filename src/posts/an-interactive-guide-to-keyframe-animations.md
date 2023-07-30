---
title: An Interactive Guide to Keyframe Animations
description: CSS keyframe animations are awesome. They're one of the most powerful, versatile tools in CSS, and we can use them for all sorts of nifty things
date: '2023-5-4'
categories:
  - animation
  - css
published: true
---

But they're also often misunderstood. They're a bit quirky, and if you don't understand those quirks, using them can be quite frustrating.

In this tutorial, we're diving deep into CSS keyframes. We'll figure out how they work, and see how to build some pretty swanky animations with them. ✨

## Syntax

The main idea with a CSS keyframe animation is that it'll interpolate between different chunks of CSS.

For example, here we define a keyframe animation that will smoothly ramp an element's horizontal position from -100% to 0%:

(To re-run the animation, refresh the “Result” pane by clicking the icon.)

As with the transition property, animation requires a duration. Here we've said that the animation should last 1 second (1000ms).

The browser will interpolate the declarations within our from and to blocks, over the duration specified. This happens immediately, as soon as the property is set.

We can animate multiple properties in the same animation declaration. Here's a fancier example that changes multiple properties:
