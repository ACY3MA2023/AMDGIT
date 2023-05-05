//stating with typescript
// class Test {
//     customerId : string;
// }
// Interaces in typescript
// let const var with their scopes.
interface NetBanking {
 customerId: string;
}
let testVar = 'change me let ... ..';
console.log(testVar);
testVar = "change let";
console.log(testVar);
//destructuring allows creating variables from the values in array
const products = ['Commerce','IOT','Network!', 'Banking', "Fincance"];
const [com,iot,net] = products;
console.log(com);
console.log(iot);
console.log(net);

// variation // first few items and the rest
const [com1,iot1,net1, ...otherProducts] = products;
console.log(com1);
console.log(iot1);
console.log(net1);
console.log(otherProducts);

const servicesObject = {
 serviceProp : 'consulting',
 locProp : 'orlando',
 descriptionProp : 'it consulting services'
};

const {serviceProp, locProp, descriptionProp} = servicesObject;
console.log(serviceProp, ' ', locProp, ' ',descriptionProp)


