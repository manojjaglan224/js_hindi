//const tUser = new Object() // singleton object declaration

// const tUser = {}
// tUser.id = "098T"
// tUser.name = "sunny"
// tUser.isLoggedIn = false

// //console.log(tUser);

// const rUser = {
//     empID: "789T",
//     fullname: {
        
//         fName: {
            
//         firstName: "sunny",
//         lastName: "Jaglan"
//         }
//     }
    
// }

// console.log(rUser.fullname); // will return full object

// // console.log(rUser.fullname.fName.firstName);

// // sometimes ? is used with objectname this is to verify if that object exists or not

const course = {
coursename: "js in hindi",

price: "999",

courseTeacher: "HC"
}

course.courseTeacher

const {courseTeacher: instructor} = course // course techer is mapped to name instructor
// {values} means destructuring
// console.log(instructor);

// const navbar = ({company}) => {

// }

// { // json starting. not using any object name. Its just JAVA SCRIPT OBJECT ROTATION

//     "name": "manoj",

//     "course": "js in hindi",

//     "price": "free"

// }

//for API JSON randomuser.me... use JSON formatter to staudy the code. 