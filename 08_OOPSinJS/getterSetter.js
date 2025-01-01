class  User{
    constructor(email, username, password){
        
        this.email = email;
        this.username = username;
        this.password = password
        
    }

    get password(){
        return this.password.toUppercase()

    }

    set password(value){
        this._password = value // we never use return in setter setter.
    }


} 

const manoj = new User("manoj@123", "Manoj", "mypass");

console.log(manoj.password);


