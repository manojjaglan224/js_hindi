//object literals


//Object.create // constructor mehtod of creating an object
//const mySym = symbol("key1")

const JsUser = {
    "full name": "Manoj Jaglan",
    age: 36,
    
    dmns: [46, 34, 86],
    isLoggedIn: false,

   // [mySym]: "myKey1" // way of declaring symbol
}

//console.log(JsUser["full name"]) // this type of values can be accessed by this method only

//console.log(JsUser.dmns);
//console.log(typeof JsUser.mySym);
//console.log(JsUser[mySym])

// JsUser.email = "optimusprime@gmail.com"

// console.log(JsUser.email);

// Object.freeze(JsUser); // can change value after that
// JsUser.email = "1optimusprime@gmail.com" // will not be permitted


// console.log(JsUser);


JsUser.greeting = function () {
    console.log("Hello bhabhiji");
}

//console.log(JsUser.greeting());
//console.log(JsUser.greeting); // will return function proto

JsUser.greetingTwo = function (){
    console.log('Hello Jaglan, ${this.age}');
}

console.log(JsUser.greetingTwo());


//console.log(JsUser.)