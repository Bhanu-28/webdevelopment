const x:number = 1;

console.log(x);

GreetPerson("Bhanu");
GreetPerson(18);

function GreetPerson(UserName:String | number){
    console.log("Hi "+UserName +" Welcome to 100xDevs")
}


function Sum(a:number,b:number): number{
    return a + b;
    //returm type is infered type script compiler.    
}

console.log(Sum(2,3));

function Sum1(a:string,b:number){
    return a + b;
    //returm type is infered type script compiler.    
}

console.log(Sum1("bhanu",3));

isLegal(18);

function isLegal(number:number){
    if(number>18){
        console.log("Eligible");
    }else{
        console.log("Not Eligible");
    }
}



function delayedFunction(fn :() => void){
    setTimeout(fn,1000);
}

delayedFunction(function(){
    console.log("function in function");
})