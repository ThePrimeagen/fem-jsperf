---
title: "GC"
description: "A brief introduction into the GC"
---

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

### How this code "works"

```typescript
let a = {};
const b = [a];
const c = { ref: a };
```

![The Object Pointer](./images/create-objects.png)


```typescript
a.foo = 69;
```

both `b` and `c` will reflect the same value, because they are pointing to the
same object.

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

### But what happens here?

```typescript
a = undefined
b.pop();
delete c.ref
```

our original object, `0xdeadbeef`, has been completely abandoned.

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

### Major GC: Marking and Sweeping
In javascript there are "root" objects.

Lets look at a quick example of a root

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <script>
            const a = {};
            let b = {};

            setTimeout(function() {
                b = undefined;
            }, 1000);
        </script>
    </body>
</html>
```

![Window Object](./images/window.png)

<br/>
<br/>

### Major GC Before `b = undefined`

![Mark and Sweep](./images/mark-and-sweep.png)

<br/>
<br/>

### Major GC After `b = undefined`

![After B Is Removed](./images/after-b.png)

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

### Compaction

"The major GC also chooses to evacuate/compact some pages, based on a
fragmentation heuristic. You can think of compaction sort of like hard-disk
defragmentation on an old PC. We copy surviving objects into other pages that
are not currently being compacted (using the free-list for that page). This
way, we can make use of the small and scattered gaps within the memory left
behind by dead objects." - v8 trash talk

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

### Minor GC (Scavenger)
This is the second form of GC in V8 and this follows the "The Generational
Hypothesis"

"'The Generational Hypothesis'

This basically states that most objects die young. In other words, most objects
are allocated and then almost immediately become unreachable, from the
perspective of the GC" - v8 trash talk

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

### How Minor GC works
Its more complicated than the major gc, but effectively it uses a few
techinques and a different set of "roots" to calculate life.  1/2 of the minor
GC space is left empty and objects are copied "From Space" to "To Space" every
GC.  Only the "alive objects" are copied over to "To Space"


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

### To Recap
* Major GC (Full Mark-Compact): A stop the world, full heap crawl of all the
objects created
  * typically more rare
  * typically takes an order of magnitude longer than Minor
  * Sometimes has to compact a memory region due to fragmentation

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

### How Generational GCs Work
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

### This is a brief introduction to GC
Hopefully the point that got across.  `{}` are a bit more expensive than you
may have realized.  Perhaps you will think more about Array#map and
Array#filter from here on out

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

### Lets create a nice example of GC
lets observe gc both minor and major!

to js-perf-exampels/gc-example!

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

