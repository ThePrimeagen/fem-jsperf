---
title: "Lets Profile!"
description: "profiling the code can give us great insight into what's fast and slow"
---

### How do we start?
what do you all think is slow?

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### The Best Way To Start
Measure!!
* but there are more than one way to measure

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Before we measure via chrome
lets take a look at the perf viz i have built specifically for this program and
talk through it

<br/>
<br/>

lets launch 3 terminal applications

<br/>
<br/>

The Server
```bash
cd shooter
tsc && node dist/src/server.js --logPath /tmp/testing
```

<br/>
<br/>

The Client
```bash
cd shooter
cargo run --release -- -q 500 -g 100000 -t 2
```

<br/>
<br/>

The Viz Server
```bash
cd shooter
go run cmd/main.go
```
<br/>

Then open a browser to localhost:42068 and put into the text box the file path
you provided for the logging, which should be `/tmp/testing`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### A little searching is in order.
lets try to find a point in which our program starts to spiral out of control
and no games can be played at all.

* for me its at about 1000 connections where i will start to spiral out of control

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


### Chrome debugger
Ok now that we have a good understanding of our performance, lets try to make
this program faster.  The simplest way to do this is "Hot spot" optimizing

<br/>
<br/>

Now be careful, this type of optimization has its draw backs
* quick netflix story with [Yunong](https://twitter.com/YunongX)

<br/>
<br/>
<br/>

### Launch the program, but with --inspect

terminal 1
```bash
cd shooter
tsc && node --inspect dist/src/server.js --logPath /tmp/testing
```

**WARNING: Don't forget ulimit**

<br/>

terminal 2
```bash
cd shooter
cargo run --release -- -q 1000 -g 100000 -t 2
```

#### TO CHROME!!!

![Performance Tab](./images/performance.png)

If you don't have the performance tab, please download the latest version of
chrome to get it

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Lets Profile Performance
I only profiled a short period of time due to the tool.  if you go to long i
have hit some weird issues with chrome

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Lets look at the code, what is wrong?
This may come as a shock....

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

