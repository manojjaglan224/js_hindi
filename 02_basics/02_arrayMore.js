const Hindu_heros = ["Ram", "Hanu", "Krishana"]
const Enlitn = ["sadhguru", "srisri", "vivekananda"] // elements acan be of any data types even of array type

//Hindu_heros.push(Enlitn); // will return Enlitn array as 4th element 

//console.log(Hindu_heros); // 

//const heroArr = Hindu_heros.concat(Enlitn)  // will return new array of all values

//console.log(heroArr); 

//const heroArr2 = [...Hindu_heros, ...Enlitn]; // spread operatpr 
// this will also return joining of both the arrays. Simple operator 

//console.log(heroArr2);

const another_array = [1,2, 3, 4, [5, 6], 7, [6,7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);
// this will flaten the array to its full lenght 
// console.log(real_another_array);

// console.log(Array.isArray("manoj"));

// console.log(Array.from("manoj")); // will make an array from the given argument

console.log(Array.from({name: "manoj"})); // will return empty if it cant make an array of given argument
//now it got confused whether to make array put of name or manoj


let lap1 = 100
let lap2 = 200
let lap3 = 300
console.log(Array.of(lap1, lap2, lap3)); // return an array of all argument's values




