//write a calculator program

// functional arguments pass function as an argument to a function.


function sum(a,b) {
    return a + b; 
}

function subract(a,b) {
    return a - b; 
}

function multiply(a,b) {
    return a * b; 
}

function divide(a,b) {
    return a / b; 
}

function operation(a,b,operations){
    return operations(a,b);
}

const result = sum(40,90);
console.log(result);
const result2 = subract(40,90);
console.log(result2);

const result3 = divide(20,30);
console.log(result3);

const result6 = operation(2,3,subract)

console.log(result6);