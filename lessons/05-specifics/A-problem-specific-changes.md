---
title: "Problem Specific Solutions"
description: "Lets figure out this collision biz"
---

### Lets rethink about update function again
Lets make this function fast, but specific optimizations to this program.
* what can we say is true about the update function?

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

### 2 things that are true
* the head of the array is the only bullet that can collide with other bullet or player
* we have combined both arrays into one

<br/>
<br/>

**lets use this information and craft a better update function**
* lets come up with three rules that make sense for our game

<br/>
<br/>

**branch off of `fts`**

```bash
➜  shooter git:(fts) ✗ git checkout -b blazing-fast
```

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

### It may have made a difference, perhaps a tiny one
why would we want to do this?

* and there is still more we can do! (to the profiler!)

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

