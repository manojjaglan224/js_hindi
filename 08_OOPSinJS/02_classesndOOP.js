// function multiplyby5(num){
//     return num*5
// }

// multiplyby5.power = 2

// console.log(multiplyby5(5));
// console.log(multiplyby5.power); // 
// console.log(multiplyby5.prototype); // returns current context as {}


function createUser(username, score){
this.username = username
this.score = score
}

createUser.prototype.increment = (f) => {
    this.score++
}

createUser.prototype.printMe = (f) => {
    console.log(`price is ${this.score}`);  
}


const chai = new createUser("chai", 25)
const tea = new createUser("tea", 260)

//console.log(chai.printMe);


tea.printMe()