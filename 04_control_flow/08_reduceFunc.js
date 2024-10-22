const myNum = [1,2,3,4,5,6,7,8,9,10]

//const initialVal = 0;

const myTotal = myNum.reduce(
    (key, value) => key + value, 
    //initialVal
    0 // 1st value of key. this is MUST
);

console.log(myTotal);
