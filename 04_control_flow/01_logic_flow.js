// let inum = 10;

// if (inum >= 2) {

//     console.log("inum is greater than or equal to 2");
    
    
// }

// = this is assigment operator
// != not equal
// == to check whether it is equal
// === strict equal check. it also checks for data type identical 
// 2 == "2" is true
// 2 === "2" is false because "2" here is string
// !== this will check for equality check including datatypes
// 2 !== "2"  true
// 2 !== 2  false


// implicit scope examples
// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2"); // imature code
// ;

// if (balance < 500) {
    
//     console.log("less than 500");
    

// } else if (balance < 750){
//     console.log("less than 750");
        
// }

// else if (balance < 750){
//     console.log("less than 750");
// }

// else {
//     console.log("1000");
// }

// 


// const month = 3  // lly strings can be case matched by putting them in ""

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     default:     
//         console.log("out of range");
//         break;
// }

// const userEmail = "manjag@gmail.com"
// // const userEmail = "" // will return false
// // const userEmail = [] // will return true

// if (userEmail) { // here we are checking if userEmail is having any value or not
//     console.log("got user email");
    
// } else {
//     console.log("dont have user email");
    
// }

// falsy values****************************************

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values********************

// "0"

// 'false'- its a truthy value will be taken as string
// " "- mind the space hy value!
// [], {} and function(){} are all truthy values


// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){ //method to check if theres any value in object
//     console.log("object is empty");
    
// }


// Operators &&, ||, ??

// Nullish coalescing Operator (??): null undefined

// let val1;
// //val1 = 5 ?? 10 // 5 will be printed
// val1 = null ?? 10 // 10 will be printed ?? checks for null/undefined values


// val1 = undefined ?? 15 // 15
//  // null ?? 10 ?? 15 -- first value ie 10 will be taken
// console.log(val1);

//********** Terinary operator

// condition ? true : false

const teaRate = 100
teaRate <= 80 ? console.log("less than 80"): console.log("more than 80"); // line number 113

