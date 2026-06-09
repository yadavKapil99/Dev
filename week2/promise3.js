const promise = new Promise((resolve, reject) => {
    const success = true; // Simulating a successful operation

    if (success) {
        resolve("Operation was successful!"); // Resolving the promise with a success message
    } else {
        reject("Operation failed."); // Rejecting the promise with an error message
    }
});

console.log(promise);

const result = async function test() {
  return 5;
}
console.log(result); // Output: Promise { <pending> }
