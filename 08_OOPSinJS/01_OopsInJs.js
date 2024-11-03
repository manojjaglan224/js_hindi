// const user = {
//     username: "manojjaglan",
//     loginCount: 8,
//     isLoggedIn: true,

//     getUserDetails: ()=>{
//         //console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
        
//     }

// }
//console.log(user.username);
//console.log(this);

//console.log(user.getUserDetails());

//const promiseOne = new Promise()
//const date = new Date() // new keywod is used to make new context and also called constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetings = ()=>{
        console.log(this.username);
        
    }

    return this // this is implicitly defined here 
}
// using new - firstly an empty object created 
// constructor function gets called
// this arguments gets injected
// arguments will be returned
const userOne = new User("Hitesh", 12, true)
const userTwo = new User("Jaglan", 22, true) // without using new this will get printed even without logging.
console.log(userOne.constructor);
//console.log(userOne.constructor);
//console.log(userTwo);
