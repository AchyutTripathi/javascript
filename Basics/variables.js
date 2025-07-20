const accountId = 144553
let accountEmail = "achyut@google.com"
var accountPassword = "123456"
accountCity = "Bangalore" //can be asigned without var, let or const, global scope
let accountState;

// accountId = 2 // Error: Assignment to constant variable.


//Prefer let over var as let is block scoped and var is function scoped.


accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Delhi"


console.table({accountId, accountEmail, accountPassword, accountCity, accountState})
