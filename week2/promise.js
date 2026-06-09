// Promise class gives u a promise that i will return you something in the future. It is used to handle asynchronous operations in JavaScript. A promise can be in one of three states: pending, fulfilled, or rejected.

function hell() {
  console.log("This is a message from the future!");
}
setTimeout(hell, 2000); // exmaple of callback function, calling back the hell function.

// calling a promise is easy, defining your own promise is where things get hard.

// A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


function setTimeoutPromise(delay){
  return new Promise(resolve => setTimeout(resolve, delay));
}  // returning an object of the promise class

function callback(){
  console.log("This is a message from the future promise!");
}

setTimeoutPromise(2000).then(callback);