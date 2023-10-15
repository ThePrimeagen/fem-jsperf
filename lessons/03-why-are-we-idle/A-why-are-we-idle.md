---
title: "Your Program Is Idle"
description: "But is it ackshually idle?"
---

### Why are we idle?

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

### Lets try a different profiler, perhaps that will help
Lets try profiling with memory!

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

### Perhaps a little back knowledge maybe useful here...
The answer is staring us in the face... do you see it?

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

### Lets gain some knowledge
to the event loop!

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

### Lets make the change!  No more crazy timers!
Lets draw out our idea before we implement it, here is my basic steps in my
head

* pull out the timer and make it return only numbers (easily testable)
* create a timer that maps expiry time to callbacks
* update the game loop so that it is a function, not a while async loop
* ...
* profit (less memory)


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

### Lets measure the results

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

### Was this surprising?
This is the cost of the "Runtime."  You probably have heard this term since bun
has come out, and they keep talking about this "zig" thing.

* Lets explain the runtime

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

