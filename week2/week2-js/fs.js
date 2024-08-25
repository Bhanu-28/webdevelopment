const fs = require("fs");

const read = fs.readFileSync('a.txt',"utf-8");

console.log(read);



const read2 = fs.readFileSync('b.txt',"utf-8"); //synchronously.

console.log(read2);

const async = fs.readFile("c.txt","utf-8");

console.log(async);


var user = {
    age : 20,
    name : "Hello",
    calculateHeight : function(){
        return 5.8;
    }
}

console.log(user.calculateHeight())