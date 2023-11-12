---
title: "Begone Sets!"
description: "did the sets really weigh down our code?"
---

### Ok, lets implement an array strategy
Shouldn't be too hard.  There are not a lot of total bullets within our game,
so it should be pretty straight forward.

<br/>
<br/>

**lets put this on another branch**
```
git checkout -b first-opt
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

### Wow, such edit
correct, the power of vim.

<br/>
<br/>

if you wish to become cool checkout the [Vim course](https://frontendmasters.com/courses/vim-fundamentals/) on FEM.
* not free, but awesome

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


### Lets check the performance tab!
Did we change anything?

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Ok lets see if we PRACTICALLY see anything!
Lets run our little viz program!

start our viz server
```bash
go run ./cmd/main.go # you can also just run air
```

start the node server
```bash
tsc && node dist/src/server.js --logPath /tmp/first-opt
```

start clients
```bash
cargo run --release -- -q 1000 -g 100000 -t 2
```

open the webpage to see the results
* localhost:42068
* enter in file name, /tmp/first-opt

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Well... we need better perf!
This perf just isn't acceptable!  we need better performance!

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Did we make it faster?!?!?!
Well... the perf graphs say yes, but did we meaningfully change performance?  No

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### So what do we do now?
bathroom break?

NO

(well maybe)

but MOAR PROFILING

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

