class Passbook{
    constructor() {
        this.transactions = [];
    }

    addTransaction(date, status, amount, balance) {
        this.transactions.push({
            date,
            status,
            amount,
            balance,
        });
    }

    getTransactions() {
        return this.transactions;
    }
}
module.exports = Passbook
