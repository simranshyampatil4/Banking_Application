class Bank{
    static allBanks = []
    static bankID = 1
    constructor(bankName,bankAbbrevation){
        this.ID = Bank.bankID++
        this.bankName = bankName
        this.bankAbbrevation = bankAbbrevation
        this.allBankAccounts = []
    }
    static addBank(bankObj){
        Bank.allBanks.push(bankObj)
    }
    static findBank(ID){
        try {
            for(let index = 0; index < Bank.allBanks.length; index++){
                if(Bank.allBanks[index].ID == ID){
                    return index
                }
            }
            throw new Error("Bank ID not found")
        } catch (error) {
            console.log(error.message);
        }
    }

    updateBank(parameter,newValue){
        try {
            switch(parameter){
                case "bankName":
                    if(typeof(newValue) != "string"){
                        throw new Error("Invalid Bank Name")
                    }
                    this.bankName = newValue
                    return this
                case "bankAbbrevation":
                    if(typeof(newValue) != "string"){
                        throw new Error("Invalid Bank Abbrevation")
                    }
                    this.bankAbbrevation = newValue
                    return this
                default:
                    throw new Error("Invalid Parameter")
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    addBankAccount(accObj){
        this.allBankAccounts.push(accObj)
    }
    findBankAccount(ID){
        try {
            for(let index = 0; index < this.allBankAccounts.length; index++){
                if(this.allBankAccounts[index].ID == ID){
                    return index
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    getBankAccounts(){
        return this.allBankAccounts
    }
    deleteBankAccount(accID){
        try {
            let index = this.findBankAccount(accID)
            this.allBankAccounts.splice(index,1)
        } catch (error) {
            console.log(error.message);
        }
    }
    withdrawAmount(accID,amount){
        try {
            let index = this.findBankAccount(accID)
            this.allBankAccounts[index].withdrawAmount(amount)
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = Bank
