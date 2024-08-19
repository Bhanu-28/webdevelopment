// Write a function called sum that finds the sum from 1 to a number

// 5 digits sum

//15 = 1+2+3+4+5

const findSum = sum(328);

function sum(b){
    let result = 0;
    for(let a =1;a<=b;a++){
        result = result + a;
    }
    return result;
}

console.log(findSum);