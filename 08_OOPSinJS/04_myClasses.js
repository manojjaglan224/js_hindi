// class User{
//     constructor(username, email, password){
//     this.username = username;
//     this.email =email;
//     this.password = password
// }

// encryptPassword(){
//     return `${this.password}abc`
// }

// changeUsername(){
//     return `${this.username.toUpperCase()}`

// }

// }


// const chai = new User("chai", "chai@fb.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// same  can be done using function.prototype syntax


class User{
    constructor(username){
    this.username = username;
    }

    abcd(){
        console.log(`USERNAME is ${this.username}`);
    }    
        
    
}


class Teacher extends User{
constructor(username, email, password){
    super(username)
    this.email = email;
    this.password = password
}

addCourse(){
    console.log(`A new course was added by ${this.username}`);
    
}
}

const chai = new Teacher("chai", "chai@fb.com", "123")


chai.addCourse()

const tea = new User("chai")

tea.abcd()