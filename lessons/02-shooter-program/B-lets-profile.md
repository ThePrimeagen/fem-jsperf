---
title: "Lets Profile!"
description: "profiling the code can give us great insight into what's fast and slow"
---

### Lets Profile!
Before we profile our application with chrome, lets take a look at the perf viz
i have built specifically for this program and talk through it

lets launch 2 terminal applications

The Server
```bash
cd shooter
npm i
tsc && node --inspect dist/src/server.js --logPath /tmp/testing
```

The Client
```bash
cd shooter
cargo run --release -- -q 500 -g 100000 -t 2
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

### Lets play a game
Lets find the spot in which we are dropping +20% frames.
* Once we find it, lets take a nice long measurement and then keep that window
  open to go back to later

* If rerun the application it will delete your previous results based on the
  log file passed in.  so be careful

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

#### Chrome debugger
Ok now that we have a good understanding of our 20% marker, lets try to make
this program faster.  The simplest way to do this is "Hot spot" optimizing

Now be careful, this type of optimization has its draw backs

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Launch the program, but with --inspect

window 1
```bash
cd shooter
npm i
tsc && node --inspect dist/src/server.js --logPath /tmp/testing
```

window 2
```bash
cd shooter
cargo run --release -- -q 2000 -g 100000 -t 2
```

#### TO CHROME!!!
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
Ok, lets record small amount of time and analyze the results.  I prefer to let
things run for a minute before continuing on.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
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

