function wait3seconds(resolve){
    setTimeout(resolve, 3000);
}

function main (){
    console.log("main is called");
}

function setTimeoutPromisified(){
    return new Promise(wait3seconds);
}  
// Here the promise class said when the first argument is resolved( of wait3seconds) then call whatever is passed in then function

setTimeoutPromisified().then(main);