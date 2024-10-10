//primitive memory type is stack. you get a copy of values

// 7 types: string, Number, Boolean, null (means empty not zero), undefined, Symbol, 
// BigInt

//JavaScript is a dynamic language and not static, 
//  which means that variables can hold values of different types during runtime. 
//  //Unlike languages such as Typescript or Java, you don't need to 
//  declare the data type of a variable explicitly


// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 162736812638612386273n

// console.log(typeof bigNumber);



// Reference type (Non primitive) memory type is heap user gets refernce to that  original value
//Array, Objects, Functions

const heros = ["iman", "speed", "bpanther"];

let myobj  = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");

    }
myFunction();
    
console.log(typeof myFunction);


let myCycle = "urbanterrain"


let anotherName = myCycle
anotherName = "myteam";

console.log(anotherName);
console.log(myCycle);

let user1 = {
    UPI: "123@oksbi",
    Email: "123@google.com"

}

let user2 = user1

user2.Email = "456@google.com"

console.log(user1.Email);
