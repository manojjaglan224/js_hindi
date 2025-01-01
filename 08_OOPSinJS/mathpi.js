const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")


console.log(descriptor);

// console.log(Math.PI);

// Math.PI = 5

// console.log(Math.PI);

const chai = {
    name: 'ginger tea',
    price: 100,
    isAvailable: true,

    orderChai: function(){
        console.log("No Tea");
        
    }
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
   // writable: false,
    enumerable: false // if this is false then loop can not be put on this
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
for (let [key, value] of Object.entries
    (chai)) {
        if (typeof value !== 'function') {
            console.log(`${key}, ${value}`);  
        }

    
    
    
}