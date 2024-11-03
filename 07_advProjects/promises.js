const promiseOne = new Promise(function(resolve, reject)
{
// Do an async task
//DB calls, cryptography, network
setTimeout(function(){
    console.log('Async task completed');
    resolve() // promise comsumed will run after that
    
}, 1000)

})
promiseOne.then(() => {
    console.log("Promise consumed");
    
})

//const promiseTwo = new Promise()
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
          
    }, 1000)
}).then(() => {
    console.log("Asyn 2 resolved");
    
})

const promiseThree = new Promise((resolve, reject) => {
                    setTimeout( ()=> {
                        resolve({username: "Chai", email: "chaiaurcode22@gmail.com"})

                    }, 1000)
})

promiseThree.then((user) => {
console.log(user);

})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout( ()=> {
        //let error = true
        let error = false
        if(!error){

            resolve({username: "HiteshChai", email: "chaiaurcode22@gmail.com", password: "123"})
        } else {
            reject('Error: something went wrong');
        }
        

    }, 1000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {

console.log(username);

}).catch((error) => {
    console.log(error);
    
}).finally(() => {
    console.log("The Promise is either fullfilled or rejected totally");
    
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout( ()=> {
    let error = true
         //let error = false
        if(!error){

            resolve({username: "javaScript", email: "chaiaurcode22222@gmail.com", password: "12wewe3"})
        } else {
            reject('Error: JS went wrong');
        }
        

    }, 1000)
})

async function consumeP5(){
   try {const resonse = await promiseFive

   console.log(resonse);}
   catch(error){
    console.log(error);
    
   }
   
}
consumeP5()

// async function getallusers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     //console.log(response);
//     const data = await (response.json()) 
//     console.log(data);
    
// }catch(error){
//     console.log(error);
    
// }
// }
// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
return response.json();
}).then((data) => {
    console.log(data);    
}).catch((error) => {console.log(error);})

// one thing to note that last block of code is getting executed in the last.