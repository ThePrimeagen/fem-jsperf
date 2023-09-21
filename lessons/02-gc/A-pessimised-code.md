---
title: "Pessimised Code"
description: "what is pessimised code?"
---

### What is pessimised (pessimized?) code?
The simplest way to put it, its the opposite of optimizing your code.

### What causes pessimised code?
Programming

- Often this isn't a stance of actively writing bad code
- Its just writing code you were told is the way to do things, and in the JS
  world, its particularly egregious

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### How do I stop writing code?
You must understand a bit more about how javascript works!

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Garbage Collection
These terms are V8 specific (sorry bun) but i bet there are similar concepts in
JSC.  These definitions have been taken from [V8's Blog on GC](https://v8.dev/blog/trash-talk)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Types of GC
* Major GC (Full Mark-Compact): A stop the world, full heap crawl of all the
objects created
  * typically more rare
  * typically takes an order of magnitude longer than Minor

* Minor GC (Scavenger): GC collecting only from the "nursery" or young
generation.
  * typically frequent
  * relatively "fast"

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Vizualizing the GC
![The Generational GC](./images/GC-Vizualization.svg)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

