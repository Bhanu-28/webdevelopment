// const fs = require("fs");
// //pass the read as functional argument.

// fs.readFile("a.txt","utf-8",read); //asynchronously
// fs.readFile("b.txt","utf-8",read); //asynchronously

// console.log("Done!")

// function read(err,Data){
//     if(err){
//         console.log("file not found");
//     } else {
//         console.log(Data);
//     }
// }


// setTimeout(()=>{
//     console.log("Hello");
// },0)








console.log("started");

setTimeout(timeout,2000); // I/O operation.

function timeout(){
    console.log("Time out done");
}
let c = 0;

for(let i=0;i<20000;i++){     //CPU INTENSE
    if(i==1){
    console.log("expensive operation started")
    }
    c++;
}

console.log(c);

console.log("expensive operation Done")


//thread was not free
// started
// expensive operation started
// 200000
// expensive operation Done
// Time out done