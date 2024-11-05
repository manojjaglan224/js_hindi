// // let myNmae = "hitesh    "

// // // console.log(myNmae.length);

// // let myHeros = ["Thor", "Spiderman"]

// // let heroPower = {

// // }

// //console.log(myNmae.truelength); // we want to exclude the extra spaces in a string


// Object.prototype.manoj = function(){
//     console.log('manoj is omnipresent');
    
// }

// myHeros.manoj()

function Setusername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    Setusername.call(this, username) // to hold reference to above function
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);