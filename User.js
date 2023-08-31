const Account = require("./Account")
const Bank = require("./Bank")

class User{
    static allCustomers = []
    static userID = 0
    constructor(firstName,lastName,isAdmin){
        this.ID = User.userID++
        this.firstName = firstName
        this.lastName = lastName
        this.isAdmin = isAdmin
        this.allUserAccounts = []
    }
    static newAdmin(firstName,lastName){
        try {
            if(typeof firstName != "string"){
                throw new Error("Invalid first Name")
            }
            if(typeof lastName != "string"){
                throw new Error("Invalid last Name")
            }
            return new User(firstName,lastName,true)
        } catch (error) {
            console.log(error.message);
        }
    }

    newCustomer(firstName,lastName){
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin can create new customers")
            }
            if(typeof firstName != "string"){
                throw new Error("Invalid first Name")
            }
            if(typeof lastName != "string"){
                throw new Error("Invalid last Name")
            }
            let user = new User(firstName,lastName,false)
            User.allCustomers.push(user)
            return user
        } catch (error) {
            console.log(error.message);
        }
    }

    getAllCustomers(){
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin can get all customers")
            }
            return User.allCustomers
        } catch (error) {
            console.log(error.message);
        }
    }

    findCustomer(ID){
        try {
            for(let index =0; index < User.allCustomers.length;index++){
                if(User.allCustomers[index].ID == ID){
                    return index
                }
            }
            throw new Error("ID not found")
        } catch (error) {
            console.log(error.message);
        }
    }
    updateCustomer(ID,parameter,newValue){
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin can get all customers")
            }
            if(typeof ID != "number"){
                throw new Error("Invalid ID")
            }
            let index = this.findCustomer(ID)
            switch(parameter){
                case "firstName":
                    if(typeof newValue != "string"){
                        throw new Error("Invalid First Name")
                    }
                    User.allCustomers[index].firstName = newValue
                    return User.allCustomers[index]
                case "lastName":
                    if(typeof newValue != "string"){
                        throw new Error("Invalid Last Name")
                    }
                    User.allCustomers[index].lastName = newValue
                    return User.allCustomers[index]
                default:
                    console.log(error.message);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    deleteCustomer(ID){
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin can delete customers")
            }
            if(typeof ID != "number"){
                throw new Error("Invalid ID")
            }
            let index = this.findCustomer(ID)
            User.allCustomers.splice(index,1)
        } catch (error) {
            console.log(error.message);
        }
    }

    newBank(bankName,bankAbbrevation){
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin add new Bank")
            }
            if(typeof bankName != "string"){
                throw new Error("Invalid Bank Name")
            }
            if(typeof bankAbbrevation != "string"){
                throw new Error("Invalid Bank Abbrevation")
            }
            let bank = new Bank(bankName,bankAbbrevation)
            Bank.addBank(bank)
            return bank
        } catch (error) {
            console.log(error.message);
        }
    }
    getAllBanks(){
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin can View All Banks")
            }
            return Bank.allBanks
        } catch (error) {
            console.log(error.message);
        }
    }
    updateBank(ID,parameter,newValue){
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin can Update Banks")
            }
            if(typeof(ID) != "number"){
                throw new Error("Invalid Bank ID")
            }
            let index = Bank.findBank(ID)
            let bankObj = Bank.allBanks[index].updateBank(parameter,newValue)
            return bankObj
        } catch (error) {
            console.log(error.message);
        }
    }
    deleteBank(ID){
        try {
            if (!this.isAdmin) {
                throw new Error("Only Admin can Update Banks")
            }
            if(typeof(ID) != "number"){
                throw new Error("Invalid Bank ID")
            }
            let index = Bank.findBank(ID)
            User.allBanks.splice(index,1)
            return "Bank Details Deleted Successfully"
        } catch (error) {
            console.log(error.message);
        }
    }

    createNewAccount(bankID,balance){
        try {
            if (this.isAdmin) {
                throw new Error("Only Customers can create Bank account")
            }
            if (typeof bankID != "number") {
                throw new Error("Invalid Bank Id")
            }
            if (typeof balance != "number") {
                throw new Error("Balance amount should be a number")
            }
            if(balance < 0){
                throw new Error("Balance should be greater than 0")
            }
            let bankIndex = Bank.findBank(bankID)
            let accObj = new Account(balance)
            this.allUserAccounts.push(accObj)
            Bank.allBanks[bankIndex].addBankAccount(accObj)
            return accObj
        } catch (error) {
            console.log(error.message)
        }
    }
    getUserAccounts(){
        try {
            if(this.isAdmin){
                throw new Error("Only Customers can Access")
            }
            return this.allUserAccounts
        } catch (error) {
            console.log(error.message)
        }
    }

    findUserAccount(accID){
        try {
            for(let index = 0; index < this.allUserAccounts.length; index++){
                if(this.allUserAccounts[index].ID == accID){
                    return index
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    deleteUserAccount(accID,bankID){
        try {
            if(this.isAdmin){
                throw new Error("Only Customers can Access")
            }
            let index = this.findUserAccount(accID)
            if(this.allUserAccounts[index].balance != 0){
                return "Account cannot be deleted"
            }
            this.allUserAccounts.splice(index,1)
            let bankIndex = Bank.findBank(bankID)
            Bank.allBanks[bankIndex].deleteBankAccount(accID)
            return "Bank Account Deleted Successfully"

        } catch (error) {
            console.log(error.message)
        }
    }

    depositAmount(accID,amount){
        try {
            if(this.isAdmin){
                throw new Error("Only Customers can Access")
            }
            let index = this.findUserAccount(accID)
            if(amount <= 0){
                return "Enter a value greater than 0"
            }
            let accObj = this.allUserAccounts[index].depositAmount(amount)
            return accObj
        } catch (error) {
            console.log(error.message)
        }
    }

    withdrawAmount(accID,amount){
        try {
            if(this.isAdmin){
                throw new Error("Only Customers can Access")
            }
            let index = this.findUserAccount(accID)
            if(this.allUserAccounts[index].balance < amount){
                return "Insufficient Balance"
            }
            let accObj = this.allUserAccounts[index].withdrawAmount(amount)
            return accObj
        } catch (error) {
            console.log(error.message)
        }
    }

    transfer(selfAcID,recieverID,recieverAcID,amount){
        try {
            let index = this.findCustomer(recieverID)
            let recieverObj = User.allCustomers[index]
            console.log(this);
            console.log(recieverObj);
            let senderAccObj = this.withdrawAmount(selfAcID,amount)
            let recieverAccObj = recieverObj.depositAmount(recieverAcID,amount)
            return[senderAccObj,recieverAccObj]
        } catch (error) {
            console.log(error.message);
        }
    }
    getPassbook(accID) {
        try {
            if (this.isAdmin) {
                throw new Error("Only Customers can Access");
            }
            const account = this.allUserAccounts.find(acc => acc.ID === accID);
            if (!account) {
                throw new Error("Account not found");
            }
            return account.passbook.getTransactions();
        } catch (error) {
            console.log(error.message);
        }
    }

}
module.exports = User
