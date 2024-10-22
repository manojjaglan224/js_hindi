// const codePls = ["js", "ruby", "java", "python", "cpp"]

// const values = codePls.forEach(item => {

//     //console.log(item)
//     return item //for each doesnt return any value
    
// })

// console.log(values);


const myNum = [1,2,3,4,5,6,7,8,9,10]

//const newNum = myNum.filter( (num)=> num>4 )

//const newNum = myNum.filter( (num)=> {return num>4} ) // {} return keyword will be used with {}


// const newNum = []

// myNum.forEach(element => {
// if (element>4) {
//     newNum.push(element)
// }    
// });


// console.log(newNum)


const myCode = [
    {
        lanName: "JS",
        lsfileName: "java script",
        year: 2004,
        Auth: "Manmohan"
    },

    {
        lanName: "Java",
        lsfileName: "java",
        year: 2004,
        Auth: "Sohan"
    },

    {
        lanName: "Python",
        lsfileName: "Py",
        year: 2012,
        Auth: "Sohan"
    }

]

const favLang =  myCode.filter( (langs) => langs.Auth === "Sohan" && langs.year == 2012)

console.log(favLang);

