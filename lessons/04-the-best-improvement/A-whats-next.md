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

### The best way to speed up JavaScript
Stop writing javascript.  I mean this as literal as possible.  Lets relook at
our profiles and make some observations.

* we are largly idle
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

### Lets find our new 20%!
Hopefully we see some great improvements!

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

