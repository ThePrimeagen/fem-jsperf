---
title: "Memory Again!"
description: "lets talk about pools"
---

### Can we improve our program based on what we now understand?
Let me ask it differently... do we need to keep creating the same objects over
and over again?

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

### Just a heads up
* this change will likely not make an observable impact in our program, but there are plenty of programs i have created where it was the _LARGEST_ improvement for the server.
* we will make the memory chart change, but the opportunity size is just small.

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

### So lets reduce our memory usage
Memory Pool!
* What is a memory pool (draw it out)
* When can you use one?
* Why would you use one?
* Lets implement a simple one

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

### What should we memory pool?
* lets pick out our most commonly created object

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

### While were at it, are there other easy memory wins?
why yes there is... one that is producing `2 * concurrent_games *
updates_per_second arrays!`

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

### How do we know we are faster?
* Lets look at the memory sampler to see if we made progress
* lets look at the ticks per second program and see if we did better
* REMEMBER: We are not expecting much wins anymore

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

