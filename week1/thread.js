const sum = (a, b) => {
    return a+b;
    //   return a.toString() + b.toString();
    // return parseInt(a) + parseInt(b);
    // return Number(a) + Number(b);

}

console.log(sum(10, 20));     //30
console.log(sum("6",90));     //690
console.log(sum(6, "90"));    //690
console.log(sum("Hello ", "World!"));     //Hello World!


// How the threads are working in js 
// sum function is goona put in memory and then goes to console.log(sum(10, 20)); and then it will execute the sum function and return the result and then it will print the result in console.
// After that it will go to the next console.log(sum("6",90)); and then it will execute the sum function and return the result and then it will print the result in console.
// This process will continue for all the console.log statements.