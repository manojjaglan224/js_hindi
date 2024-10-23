const myNum = [1,2,3,4,5,6,7,8,9,10]

//const initialVal = 0;

const myTotal = myNum.reduce(
    (key, value) => key + value, 
    //initialVal
    0 // 1st value of key. this is MUST
);

//console.log(myTotal);


//**************shoping cart example ... adding price of items*/
const myBooks = [
    {
        lanName: "JS BOOK",
        lsfileName: "java script",
        year: 2004,
        Auth: "Manmohan",
        price: 4000
    },

    {
        lanName: "Java BOOK",
        lsfileName: "java",
        year: 2004,
        Auth: "Sohan",
        price: 5000
    },

    {
        lanName: "Python BOOK",
        lsfileName: "Py",
        year: 2012,
        Auth: "Sohan",
        price: 2000

    }

]

//const favLangBook =  myBooks.reduce( (acc, item)  => acc + item.price, 0)
const favLangBook =  myBooks.reduce( (acc, item)  => acc + item.price, 0) 

console.log(favLangBook);

