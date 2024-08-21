var age = '1';

age = 22

console.log(age);

//difference between let and var;
let aged = 22;

age = "bhanu";

age = true;

console.log(age);

const age1 = "45";

// age1 = 20;



function bhanu(age){
    var age = 20;
    console.log("hi Bhanu I am accessible in this function"+age+"outside loop");
    for(let i=0;i<2;i++){
        var aged = 23;
        let yolo = 0;
        console.log("In loop"); 
    }

    console.log(aged);
    console.log(yolo);
}


bhanu(22)