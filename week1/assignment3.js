// if/else statement that checks if a number is even or odd. 
// If it's even, print "The number is even." 
// Otherwise, print "The number is odd."

const number = findTypeOfNumber(4);

function findTypeOfNumber(number){
    if(number%2==0){
        console.log("Number: "+number+" is even");
    }else{
        console.log("Number: "+number+" is odd");

    }
}