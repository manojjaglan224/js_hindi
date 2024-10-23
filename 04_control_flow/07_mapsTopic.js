const myNum = [1,2,3,4,5,6,7,8,9,10]

//const newNum = myNum.map( (num) => num+10 )
// if using {} use return
// chaining of functions
// const newNum = myNum
// .map((num) => num * 10)
// .map((num) => num+1)
// output will be 11,21,31... and so on

const newNum = myNum
.map((num) => num * 10)
.map((num) => num+1)
.filter( (num) => num >=40 )
// will return all numbers greater than 40

console.log(newNum);


