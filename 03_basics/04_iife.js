// immediatlely Invoked Function Expressions (IIFE)

(function chai(){  // here chai is named IIFE

    console.log(`DB connected`);
    
})
(); // remember ; in such cases. Two IIFE in same code file

( (name) => {
// unnamed IIFE
    console.log(`DB connected 2 ${name}`);
    
})(`manoj`);

//chai()