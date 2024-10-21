const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   
    //console.log(`${key} is for ${myObject[key]}`);
}


// ${myObject[key]} will return key values of this object.

const myNum = [1,2,3,4,5]

for (const key in myNum) {
   console.log(myNum[key]);  //for in will return key/ arr positions in this case. HOw to get values?
   
}