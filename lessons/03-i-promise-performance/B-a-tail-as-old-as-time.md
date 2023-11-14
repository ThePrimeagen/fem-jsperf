---
title: "I Promise Performance"
description: "but are you a liar?"
---

### Concurrency is awesome and promises enable it!
Before we begin, lets branch off of `master` again

```bash
git checkout -b so # second-opt already exists and is complete
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

1. pull out the timer and make it return only numbers (easily testable)
1. create a timer that maps expiry time to callbacks
1. update the game loop so that it is a function, not a while async loop
1. ...
1. profit (less memory (and hopefully less cpu (lisp)))


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
* Lets checkout the memory and performance profilers
* Zoom in on the remaining promises... what is happening here?
* Make the change and profile again
* Lets see if it makes a material impact on ackshual game performance
* Merge first opt and lets see combined performance

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
* node allows tons of hooks and ways to debug your async processes
* allows for analytics and insights as well
* this has a real cost, every promise has a real cost
  - its not just cpu time while processing the promises, but its also gc
* functions just marked as async have a real cost
* back to callback hell?
  - i would go to cb hell on highly perf sensitive parts.  Notice we didn't
    even change how we wait for sockets to be open.
* just because its a "hotspot" doesn't mean its meaningfully a hot spot in the chrome debugger

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

