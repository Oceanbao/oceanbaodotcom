---
title: Data Binding in React
description: So you have a bit of state in React, and you want to sync it with a form field. How do you do it?
date: '2023-5-2'
categories:
  - react
published: true
layout: blog
---

Well, it depends on the type of form control: text inputs, selects, checkboxes, and radio buttons all work a little bit differently.

The good news is that while the details vary, they all share the same fundamental mechanism. There's a consistent philosophy in React when it comes to data binding.

In this tutorial, we'll first learn how React approaches data binding, and then I'll show you how each form field works, one by one. We'll look at complete, real-world examples. I'll also share some tips I've learned over the years, and some “gotchas” to watch out for!

## Introduction to controlled fields

By default, React takes a very “hands off” approach. It creates the <input> DOM node for us and then leaves it alone. This is known as an uncontrolled element, since React isn't actively managing it.

This is known as a controlled element. React is on guard, making sure that the input always displays the string "Hello World".

Now, it's not super useful to lock the value to a static string like this!\* I'm doing it here purely to illustrate how controlled elements work: React “locks” the input so that it always contains the value we passed in.

## Text inputs

I'm also providing an id. This isn't required for data binding, but it's an important usability and accessibility requirement. IDs need to be globally-unique; later, we'll learn how to generate them automatically using a new React hook.

Link to this heading
