const user = {

    username: "manoj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // here this is used in current context

        console.log(this);
    }

}

// user.welcomeMessage()

// user.username = "Jaglan"
// user.welcomeMessage()


// console.log(this); // no context in global space. in node environment this refers to empty object

// // inside browser global object is window(). So above line will return window() object in browser

// function coffee(){
//     let username = "MJ"
//     console.log(this); //when this is printed inside function it will return lot of values
//     console.log(this.username);
// }

// coffee()


// const coffee = () => {
//     let username = "MJ"
//     console.log(this);
// }

// coffee()

// () => {} this is arrow function syntax

// const addNumber = (num1, num2) => {
//     return(num1+num2);
// }

// console.log(addNumber(8.9, 9.8));

//now implicit return*************************************888

//const addNumber = (num1, num2) => (num1+num2);


const addNumber = (num1, num2) => num1+num2;
//example
const addNumber = (num1, num2) => ({username = "MJ"})
// in above line, to return object we have to use ()
console.log(addNumber(8.9, 9.8));