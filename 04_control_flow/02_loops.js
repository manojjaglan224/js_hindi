// // for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element == 5) {

        //console.log("5 is best number");
        
        
//     }
//    // console.log(element);
    
// }

//console.log(element); // not accessible due to scope restrictions

// for (let i = 1; i <=10; i++) {

//     console.log(`outer loop value: ${i}`);
    

//     for (let j = 1; j <= 10; j++) {
//        // console.log(`inner loop value: ${j} and innerloop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
        
//     }

    
// }
let myArray = ["flash", "batman", "superman"]

//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) { // ++ is importnat else loop will get in infinite mode
    const element = myArray[index];
    //console.log(element); 
}

//break and continue

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("detected 5");

        //break
        continue // this will skip the loop condition once
        
    }
    console.log(`value of index is ${index}`);
    
}