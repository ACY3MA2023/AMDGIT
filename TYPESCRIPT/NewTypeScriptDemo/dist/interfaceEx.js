// const message = "Welcome";
// IA
console.log("Welcome to Interfaces!!!");
console.log("es2018 ");
class SavingsAccount {
    constructor(customerId, pin) {
        this.customerId = customerId;
        this.pin = pin;
    }
    displayAccountDetails() {
        console.log("Inside displayAccountDetails()");
        console.log(this.customerId);
    }
    getAccountDetails() {
        return "Returned : " + this.customerId;
    }
}
// <<variable>>:<<type>>
const netBankingObject = new SavingsAccount("Customer1", 1231345);
// console.log(netBankingObject)
netBankingObject.displayAccountDetails();
const returnVal = netBankingObject.getAccountDetails();
console.log(returnVal);
