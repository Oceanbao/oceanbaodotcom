---
title: Refreshing Server-Side Props
description: In a Next.js application I'm working on, I have an "admin" page, which lets me manage registered users
date: '2023-5-6'
categories:
  - nextjs
  - web
published: true
---

One of my favourite features about Next.js is that individual routes can opt-in to server-side rendering. While I tend to be a pretty big advocate for static generation, this is a perfect use-case for server-side rendering; I can fetch and inject the database data on first render, simplifying my front-end code.

At least, that's what I thought… And then I hit a snag. 😬

Here's my problem: in my dashboard, I'm able to edit users, to bestow purchases or update their name:

## The solution

But why does this work? Why are we involving the router in this process, and what the heck is it doing?

In fact, this solution requires a bit of context-setting. Let's talk a bit about how server-rendered routes have a secret alter-ego 🦸🏾‍♀️
