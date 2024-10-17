// function means a block of code which can be used many times at different places

// function sayMyName(){

//     console.log("M");
// console.log("A");
// console.log("N");
// console.log("O");
// console.log("J");


// }

// sayMyName() //sayMyName is ref, () this means function execution

// sayMyName // will print nothing as it is only a ref

// function addTwoNum(num1, num2){

//    console.log(num1 + num2);
// }
// addTwoNum() // nothing will print, coz values are not there and it will only return NaN

// addTwoNum(3.9, 4.2) // will print 8.1

// addTwoNum(3.9, "4.2") // will print 3.94.2, it will take both arguments as strings

//const result = addTwoNum(3.9, 4.2) 

// function addTwoNum(num1, num2){

//     //let result = num1 + num2

//     //return result

//     //console.log("manoj"); // will never gets executed. As prior to this we returned the function
//     return num1 + num2

//     }
 
//  const result = addTwoNum(3.9, 4.2) 
// console.log(result); // wil return undefined

function loggedInMessage(username){

    if(!username){

        console.log("please enter a username");

        return // it will ensure that if "if condition gets executed function will end here itself"

        
    }
    
   // return `${username} Manoj is logged IN` // backtics key is located prior to num1
}
 

//console.log(loggedInMessage("Jaglan")); // fucntion will execute but will not print anything without console.log


