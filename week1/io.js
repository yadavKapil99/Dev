// setTimeout(..., 0) DOES NOT mean "run immediately".
// It means:
// "Run this callback after the current call stack is empty
// and when the Event Loop reaches the Timers phase."

setTimeout(() => {
  console.log("This will be printed after 0 seconds");
}, 0);

const fs = require("fs");

// readFileSync is SYNCHRONOUS.
// Node.js stops here and waits until the file is completely read.
const contents = fs.readFileSync("./week1/a.txt", "utf-8");

// Printed immediately after readFileSync finishes.
console.log(contents);

// readFile is ASYNCHRONOUS.
// Node sends the file-reading task to the OS/libuv thread pool
// and immediately moves to the next line without waiting.
fs.readFile("./week1/a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("./week1/b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("./week1/a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// This runs immediately because the async file reads
// have only been started, not completed.
console.log(
  "This will be printed before the contents of the files are printed."
);

/*
Execution Flow:

1. setTimeout callback is registered and placed in the Timers Queue.
   Nothing is printed yet.

2. readFileSync runs.
   Node waits until the file is fully read.

3. console.log(contents) runs.

   Output:
   Hii Kapil Yadav

4. Three readFile() operations are started.
   Node DOES NOT wait for them.

5. This console.log executes immediately.

   Output:
   Hii Kapil Yadav
   This will be printed before the contents of the files are printed.

6. Main script finishes.
   Call Stack becomes empty.

7. Event Loop starts processing queued tasks.

8. Timers Phase runs first.
   The setTimeout(..., 0) callback is ready, so it executes.

   Output:
   This will be printed after 0 seconds

9. After that, the completed fs.readFile callbacks are executed.

   Output:
   Hii Kapil Yadav
   Contents of b.txt
   Hii Kapil Yadav

Typical Final Output:

Hii Kapil Yadav
This will be printed before the contents of the files are printed.
This will be printed after 0 seconds
Hii Kapil Yadav
Contents of b.txt
Hii Kapil Yadav

Important:
setTimeout(..., 0) ≠ immediate execution

It only means:
"Execute as soon as possible AFTER the current code finishes
and when the Event Loop reaches the Timers phase."
*/