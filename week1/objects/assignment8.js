// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male


let userData = [{
    firstName : "Bhanu",
    LastName : "Pradeep",
    age : 22,
    gender : "male"
},{
    firstName : "shreya",
    LastName : "",
    age : 24,
    gender : "female"
},{
    firstName : "chintu",
    LastName : "",
    age : 19,
    gender : "male"
}]


function classification(userData){
    let newArray = [];
    for(let i = 0;i<userData.length;i++){
        if(userData[i].age>18 && userData[i].gender=="male"){
            newArray.push(userData[i]);
        }
    }
    return newArray;

}

const usersEligible = classification(userData);
console.log(usersEligible);


// Now need to use filters in Js.

let filtersArrayObject = [{
    firstName : "Bhanu",
    LastName : "Pradeep",
    age : 22,
    gender : "male"
},{
    firstName : "harkirat",
    LastName : "singh",
    age : 21,
    gender : "male"
},{
    firstName : "chintu",
    LastName : "",
    age : 19,
    gender : "female"
}]

let ans = filtersArrayObject.filter(checkCondition);
console.log(ans);

function checkCondition(obj){
    return obj.age > 18 && obj.gender=="male";
}
