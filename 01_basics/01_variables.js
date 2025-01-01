const accountId = 144553
let accountEmail = "mannuprime@gmail.com"
var accountPsw = "12345"
accountCity = "Jaipur" // it is possible to declare a variable like this

let accountState; // logging it will return undefined

//accountId = 2 not allowed
/* never use var for declartioan because it has scope issues
Only use let for declaration */
accountEmail = "1mannuprime@gmail.com" // will be accepted coz it is varfiable
accountPsw = "123456"
accountCity = "1Jaipur"

console.log(accountId);
console.table([accountId, accountCity, accountEmail, accountPsw]) // this will print variable and values in table format.