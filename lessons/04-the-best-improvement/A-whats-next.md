---
title: "What is next?"
description: "We have pretty much squeezed out all the juice"
---

### Hot spot optimizations
Up until now we have been doing hot spot optimizations.  This is where we look
at the profiler and try to make it faster.  What if there is nothing left?

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

### First Lets Assess the situation
* A majority of memory pointing towards websockets (we can't just stop...)
* On the performance side there does appear to be about ~20-30% in just hundreds a little functions of which a lot of them appear in ws

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

### The best javascript is not javascript
Stop writing javascript.  I mean this as literal as possible.  Lets relook at
our profiles and make some observations.

* we still have lots of idle
* bits on websocket are there
* we produce most of our memory from our websocket program

<br/>
<br/>

Lets remove `ws` and replace it with a library that uses `Node Bindings/C++`.
This is also the same library that `Bun` uses

```bash
npm i uNetworking/uWebSockets.js#v20.32.0
```

This upgrade is going to take some effort, so lets do this!

<br/>
<br/>

**please use second opt as base**
For the third optimization please use `second-opt` from the branch to start
from.  This is just the second optimization and this will allow us to test just
the third optimization. afterwords we can find out if optimizing `update` makes
a difference!

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

### Lets measure!

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

### Lets combine!
For the third optimization please use `second-opt` from the branch to start
from.  This is just the second optimization and this will allow us to test just
the third optimization.

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

### Lets merge first-opt
```bash
git merge first-opt
npm run test # don't need to wait for int test
```

now lets measure!

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
