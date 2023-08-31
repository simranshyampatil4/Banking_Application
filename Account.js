const Passbook = require("./Passbook");

class Account{
    static accID = 1
    constructor(balance) {
        this.ID = Account.accID++;
        this.balance = balance;
        this.passbook = new Passbook();
    }

    withdrawAmount(amount){
        try {
            if (this.balance <= 1000) {
                throw new Error('Minimum Balance of 1000 should be maintained')
            }
            this.balance -= amount
            this.passbook.addTransaction(new Date(), 'Debited', amount, this.balance);
            return this
        } catch (error) {
            console.log(error.message);
        }
    }

    depositAmount(amount){
        try {
            this.balance += amount
            this.passbook.addTransaction(new Date(), 'Credited', amount, this.balance);
            return this
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = Account
