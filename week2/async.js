function start (){
    console.log('start');
}

console.log("Hii Kapil Yadav");
setTimeout(start,1000);

console.log("Welcome to the hell");

let count = 0;
for(let i=0;i<1000000000;i++){
    count += 1;
} // this gonna take more than 1 sec 

console.log("Expensive Operation Done");

// Hii Kapil Yadav
// Welcome to the hell
// Expensive Operation Done
// start