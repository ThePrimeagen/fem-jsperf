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

**WARNING: Don't forget ulimit**
<br/>
If you get the issue:
```bash
failed to connect to server: Io(Os { code: 24, kind: Uncategorized, message: “Too many open files” })
```
<br/>

Set a ulimit:
```bash
ulimit -u some_big_number
ulimit -n some_big_number # on Mac
```


<br/>

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
Lets do a small step ladder approach

* run at 500 concurrent games
* run at 1000 concurrent games
* run at 2000 concurrent games

<br/>
<br/>

**please save the log files**
```bash
--logFile /tmp/master-500
--logFile /tmp/master-1000
--logFile /tmp/master-1500
```

we will want to refer to these later

<br/>
<br/>

We are doing a very crude "step ladder" test to see how our ratio grows with
more games

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
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

**Chrome Devices:** chrome://inspect/#devices

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

