---
title: Common Beginner Mistakes with React
description: Pitfalls, gotchas, and footguns, oh my!
date: '2023-5-1'
categories:
  - react
published: true
layout: blog
---

A couple years ago, I was teaching React at a local coding bootcamp, and I noticed that there were a handful of things that kept catching students off guard. People kept falling into the same pits!

In this tutorial, we're going to explore 9 of the most common gotchas. You'll learn how to steer around them, and hopefully avoid a lot of frustration.

In order to keep this blog post light and breezy, we won't dig too much into the reasons behind these gotchas. This is more of a quick reference.

## Evaluating with zero

Alright, let's start with one of the most pervasive gotchas. I've seen this one “in the wild” on a handful of production apps!

Our goal is to conditionally show a shopping list. If we have at least 1 item in the array, we should render a ShoppingList element. Otherwise, we shouldn't render anything.

```jsx
function App() {
	const [items, setItems] = React.useState([]);
	return <div>{items.length > 0 && <ShoppingList items={items} />}</div>;
}
```

## Mutating state

Let's keep working with our shopping list example. Suppose we have the ability to add new items:

React relies on an state variable's identity to tell when the state has changed. When we push an item into an array, we aren't changing that array's identity, and so React can't tell that the value has changed.
