// sum of two number
//synchronous code executed line by line in the order its written.
//each operation waits for previous operation to get complete.

function sum(a,b){
    return a + b;
}

const result = sum(2,90);

console.log(result);

// Find sum from one to a number

function sumOfN(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}

const resultOfSumOfN = sumOfN(70);
console.log(resultOfSumOfN);

