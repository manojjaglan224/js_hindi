// prop means properties

class User{
    constructor(username){
        this.username = username
    }
logMe(){
    console.log(`${this.username}`);
    
}


static createId(){  //static word will prevent this ID access to instances of this class
    return `123`
}

}

const manoj = new User("Manoj Jaglan")

manoj.logMe()
//console.log(manoj.createId())

class Teacher extends User{
    constructor(email, username){
        super(username)
        this.email = email;
        
    }
    
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
    }

    const cName = new Teacher("JS", "JS@gmail.com")
    cName.logMe()

    