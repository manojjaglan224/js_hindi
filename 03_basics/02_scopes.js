//var c = 300

//{}  // this is where scope comes into play
let a = 300

if(true){
    let a = 10
    const b = 20  // values that we declare inside this scope should not be accessible outside
    var c = 30

    //console.log("inner: a=", a);
    
}




//console.log(a); // a and b will not be printed because they are out of scope
//console.log(b);
// console.log(c); // this being out of scope gets printed. Reason we should not use var
// console.log(a);

// function one(){
//     const username = "manoj"

//             function two(){

//                 const website = "youtube"
//                 console.log(username);
        
//              }
// //console.log(website); // it will come as not defined

//             two()
// }

// one()

//** interesting  */

console.log(addone(5))

function addone(num){
 return num +1

}



addTwo(5)       // here it is not accessible because function is held in  a variable
// this is called hoisting in javascript

const addTwo = function(num){
return num + 2

}


