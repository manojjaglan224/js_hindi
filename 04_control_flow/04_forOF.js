// for of loop

const arr = [1,2,3,4,5]

for (const element of arr) { // object here has nothing to do with javascript object... it can be put on array or string
    //console.log(element);
    
}

const greetings = "Welcome to the function"
for (const greet of greetings) { // object here has nothing to do with javascript object... it can be put on array or string
   // console.log(`Each char is ${greet}`);
    
}


//Maps

const map = new Map()
map.set('HR', "Haryana");
map.set('MH', "Maha");
map.set('KR', "Kerala")

console.log(map);

for (const [element, value] of map) {

   // console.log(element, ":-", value);
    
    
}

const myObject = {
"game1" : "NFS",
"game2" : "Spiderman"
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}

// error will come as myObject is not iteratble
