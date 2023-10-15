---
title: "Begone Sets!"
description: "did the sets really weigh down our code?"
---

### Ok, lets implement an array strategy
Shouldn't be too hard.  There are not a lot of total bullets within our game,
so it should be pretty straight forward.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
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

### Repeat, but with old version

```bash
git stash
```

start the node server
```bash
tsc && node dist/src/server.js --logPath /tmp/no-opt
```

start clients
```bash
cargo run --release -- -q 1000 -g 100000 -t 2
```

open the webpage to see the results
* localhost:42068
* enter in file name, /tmp/no-opt


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
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
YES!  but not by that much.. :(

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
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

