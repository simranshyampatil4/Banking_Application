const User = require("./User");

let admin1 = User.newAdmin('Simran','Patil')
//console.log(admin1);

let customer1 = admin1.newCustomer('Madhura','Khade')
//console.log(customer1);
let customer2 = admin1.newCustomer('Rahul','Kharkun')
//console.log(customer2);

// console.log("All Customers List");
// console.log(admin1.getAllCustomers());

// admin1.updateCustomer(1,'firstName','Sanika')
// admin1.updateCustomer(1,'lastName','Shinde')
// console.log(admin1.getAllCustomers());
// admin1.deleteCustomer(1)
// console.log("All Customers List");
// console.log(admin1.getAllCustomers());


let bank1 = admin1.newBank("State Bank Of India","SBI")
//console.log(bank1);

let bank2 = admin1.newBank("Bank Of India","BOI")
//console.log(bank2)

console.log("All Bank List");
// let allbanks = admin1.getAllBanks()
// console.log(allbanks);

// let update1 = admin1.updateBank(1,'bankAbbrevation','ICICI')
// console.log(update1);
// let allbanks = admin1.getAllBanks()
// console.log(allbanks)
// let d1 = admin1.deleteBank(1)
// console.log(d1);

// let allbanks = admin1.getAllBanks()
// console.log(allbanks);

console.log(customer1.createNewAccount(1,5000));
console.log(customer1.createNewAccount(1,6000));
console.log(customer1.createNewAccount(1,30000));
console.log(customer2.createNewAccount(1,51000));

console.log("-------------------------------------");
console.log("Customer 1 Accounts: ", customer1.getUserAccounts());
console.log("-------------------------------------");
console.log("Bank 1 Accounts: ",bank1.getBankAccounts());
console.log("-------------------------------------");
//console.log(customer1.deleteUserAccount(2,1));

console.log(customer1.withdrawAmount(1,1000));
console.log("-------------------------------------");
console.log("Customer 1 Accounts: ", customer1.getUserAccounts());
console.log("-------------------------------------");
console.log("Bank 1 Accounts: ",bank1.getBankAccounts());
console.log("-------------------------------------");

console.log(customer1.depositAmount(1,5000));
console.log("-------------------------------------");
console.log("Customer 1 Accounts: ", customer1.getUserAccounts());
console.log("-------------------------------------");
console.log("Bank 1 Accounts: ",bank1.getBankAccounts());
console.log("-------------------------------------");
console.log("Transfer: ", customer1.transfer(1,2,4,25));
console.log("Passbook for Customer 1 Account 1:");
console.log(customer1.getPassbook(1));

// console.log("Passbook for Customer 1 Account 2:");
// console.log(customer1.getPassbook(2));
