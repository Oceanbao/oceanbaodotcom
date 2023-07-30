---
title: An Interactive Guide to Flexbox
description: Flexbox is a remarkably powerful layout mode. When we truly understand how it works, we can build dynamic layouts that respond automatically, rearranging themselves as-needed
date: '2023-5-6'
categories:
  - css
  - ui
published: true
aboveFoldImage: 'https://encore.dev/assets/blog/eda-cover1.jpg'
---

This demo is heavily inspired by Adam Argyle’s incredible “4 layouts for the price of 1” codepen. It uses no media/container queries. Instead of setting arbitrary breakpoints, it uses fluid principles to create a layout that flows seamlessly.

Here's the relevant CSS:

## Introduction to Flexbox

CSS is comprised of many different layout algorithms, known officially as “layout modes”. Each layout mode is its own little sub-language within CSS. The default layout mode is Flow layout, but we can opt in to Flexbox by changing the display property on the parent container:

## Flex Direction

As mentioned, Flexbox is all about controlling the distribution of elements in a row or column. By default, items will stack side-by-side in a row, but we can flip to a column with the flex-direction property:
