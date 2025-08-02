const accountId = 12345678  //cont ka mtlb iski value change nhi hoti
let accountEmail = "s@Email.com"
var accountPassword = "1234"
accountCity = "Delhi"
let accountState;

// accountId=123

accountEmail = "sanjana@Email.com"
accountPassword = "12344321"
accountCity = "Bengal"

/*
Prefer Not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
