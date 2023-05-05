// const message = "Welcome";
// IA
console.log("Welcome to Interfaces!!!");
console.log("es2018 ");
// type safety
interface NetBanking {
    customerId : string;
    pin : number;
    displayAccountDetails():void;
    getAccountDetails():string;
}
class SavingsAccount implements NetBanking{
        // this
        customerId : string;
        pin: number;

        constructor(customerId:string,pin:number){
            this.customerId = customerId;
            this.pin = pin;
        }
        displayAccountDetails() :void{
            console.log("Inside displayAccountDetails()");
            console.log(this.customerId);
        }
        getAccountDetails(): string {
            return "Returned : " + this.customerId;
        }
}
// <<variable>>:<<type>>
const netBankingObject : NetBanking = new SavingsAccount("Customer1",1231345);
// console.log(netBankingObject)
netBankingObject.displayAccountDetails();
const returnVal:string = netBankingObject.getAccountDetails()
console.log(returnVal)
