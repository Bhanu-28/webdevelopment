// Write a function that takes a new object as input which has name , 
// age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, you24r age is 21)


function greetElders(user){
    if(user.gender=="female"){
        return console.log("Hi Mrs "+ user.name + " welcome to the cohort.")
    }
    if(user.gender=="male"){
        return console.log("Hi Mr "+ user.name + " welcome to the cohort.")
    }
    else{
        return console.log("Hi neutral "+ user.name + " welcome to the cohort.")
    }
}  

let user = {
    name : "shreya",
    age : 24,
    gender : "female"
}
let user1 = {
    name : "bhanu",
    age : 22,
    gender : "male"
}
let user2 = {
    name : "rod",
    age : 17,
    gender : "others"
}


greetElders(user)
greetElders(user1)
greetElders(user2)

