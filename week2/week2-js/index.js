class Rectangle{
    constructor(length,width,height,color){
        this.length = length;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        console.log(area);
    }

    paint(){
        this.area();
        console.log("painting an area of with this "+this.color+" color");
    }
}

//instance is an object of a class

const worker = new Rectangle(5,2,3,"blue"); //instance or object of that class 
const area = worker.area();
const paint = worker.paint();

const date = new Date();
console.log(date.toISOString());



const map = new Map();
map.set('name','Bhanu');
map.set('age',22);
console.log(map.get("name"));
console.log(map.get("age"));

//call back based approach
function logName(){
    console.log("Time out");
}

setTimeout(logName,3000);



