const myArr = [0, 1, 2, 3, 4, 5];

//const myArr2 = new Array(1, 2, 3, 4)

// another way of declaring an array

//console.log(myArr[2]);
 
//Array methods

// myArr.push(6, true, "jashan", 7, 8)
// //console.log(myArr)

// myArr.push("manoj")

// // inserts the elements in that order

// console.log(myArr)

// myArr.pop() // pops out the last element by default

//myArr.unshift(8.5)

//myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));


// const newArr = myArr.join()

// console.log(myArr)

// console.log(newArr) // converts to string separated by commas

//slice and splice


//const myArr = [0, 1, 2, 3, 4, 5];
console.log("A", myArr);

const mynewArr1 = myArr.slice(1,3) //The slice() method of Array instances returns a 
//shallow copy of a portion of an array into a new array object selected from start to 
//end (end not included) where start and end represent the index of items in that array. 
//The original array will not be modified. 

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
//Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
//Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
//Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
//Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


console.log(mynewArr1);
console.log("B", myArr);

const mynewArr2 = myArr.splice(1,3)

/* The splice() method of Array instances changes 
the contents of an array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced 
without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice(). */

console.log(mynewArr2); // output will be elements at 1,2,3 positions.
console.log(myArr); // output will be elements at 0,4, 5 positions.


