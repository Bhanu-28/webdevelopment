// Objects
// An object in JavaScript is a collection of key-value pairs, 
// where each key is a string and each value can be any valid JavaScript data type, including another object.

// Write a function that takes a user as an input and greets them with their name and age

function Greet(user){
    console.log("hi "+ user.name + " welcome to the cohort")

}


let user = {
    name : "Bhanu",
    age : 22
}

Greet(user)