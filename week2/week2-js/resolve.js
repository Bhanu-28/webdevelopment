function waitFor3s(resolve){ //resolve = main
    console.log(resolve);
    setTimeout(resolve,3000)
}

function setTimeoutPromisified(){
    return new Promise(waitFor3s);
}

function main(){
    console.log("main started")
}

// waitFor3s(main);
setTimeoutPromisified().then(main);

