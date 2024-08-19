function random(resolve){
    resolve();
}

let p = new Promise(random); //suppose to return something eventually.
console.log(p);


function callback(){
    console.log("promise succeeded");
}

p.then(callback);


//promise is a function and takes function as a input random and takes a function of random as input
//whenever resolve gets called then callback gets called.


//give me a function which actually does asynchronous task.