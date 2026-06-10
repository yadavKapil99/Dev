console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output will be 1, 4, 3, 2 because of the event loop and microtask queue.

// 1 and 4 are synchronous and execute immediately.
// 3 is a microtask that executes after the current call stack is empty.
// 2 is a macrotask that executes after the current call stack is empty and all microtasks are done.

// Some other macrotasks include setInterval, setTimeout, and I/O operations. Microtasks include promises and process.nextTick in Node.js.