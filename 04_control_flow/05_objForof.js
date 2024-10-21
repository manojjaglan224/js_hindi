// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
   
//     //console.log(`${key} is for ${myObject[key]}`);
// }


// // ${myObject[key]} will return key values of this object.

// const myNum = [1,2,3,4,5]

// for (const key in myNum) {
//      // console.log(key); for in will return key/ arr positions in this case. HOw to get values?
//      //console.log(myNum[key]);
   
// }



// const map = new Map()
// map.set('HR', "Haryana");
// map.set('MH', "Maha");
// map.set('KR', "Kerala")

// console.log(map);

// for (const key in map) {
//     console.log(key);
    
// }   // forin here is iteratable in map
    

//for each******************************

const codePls = ["js", "ruby", "java", "python", "cpp"]

// codePls.forEach(function (item) { // call back function is nameless

// console.log(item);

// })


// codePls.forEach((item) => {  // arrow function is used

//     console.log(item);
    
//     })

//     function printMe(item){
//         console.log(item);
//     }

// codePls.forEach(printMe) // only ref needs to be here


// codePls.forEach((item, index, arr) => {  

//     console.log(item, index, arr);
        
//   })
    
const myCode = [
    {
        lanName: "JS",
        lsfileName: "java script"
    },

    {
        lanName: "Java",
        lsfileName: "java"
    },

    {
        lanName: "Python",
        lsfileName: "Py"
    }

]

myCode.forEach((item) => {
    console.log(item.lsfileName);
    
})