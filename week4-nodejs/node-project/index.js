// import chalk from 'chalk'; //modern import syntax index.mjs

// console.log(chalk.red("Hello world"));

function sum(a,b){
    return a+b;
}

console.log(sum(3,4));


const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,Data){
    console.log(Data)
});

console.log(__dirname);

// node index.js -h 

