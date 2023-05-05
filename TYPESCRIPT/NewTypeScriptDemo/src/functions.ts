// functions are first-class citizens
console.clear();
function printJS(){
    console.log("Functons are first class citizens")
}

printJS();

function sum(num1, num2){
    console.log(num1+num2)
}

sum(5,10)
sum("test","rest")

function sum1(num1:number,num2:number){
    console.log(num1+num2)
}

sum1(100,100)
// sum1("test","rest")

function sum2(num1, num2){
    return num1 + num2;
}
const result = sum2(100,0)
console.log("return : " , result)

const cokeFunction  = function drinkCoke(){
    console.log("& smile for a while!");
    return "return from Coke Function!";
}

console.log(cokeFunction());
console.log(cokeFunction);


// primitives number, boolean, undefined, null, string
function eatPizza() {
    console.log("eat pizza")
    return function drinkCoke(){
        console.log("Drink coke!")
        return function drinkCoke() {
            console.log("thank god!")
            return function drinkCoke(){
                console.log("& smile for a while!")
            }
        }
    }
}

const drinkCoke = eatPizza();
const someMoreCoke = drinkCoke();
const smile = someMoreCoke();
smile();

console.log("really cool and flexible***************")
eatPizza()()()();

function hi() {
    console.log("hi")
    return function hello(){
        console.log("hello!")
        return function welcome() {
            console.log("welcome!")
        }
    }
}

hi()()()
console.log("only hi() returning ")
hi();


function welcome(name) {
    console.log("Dear Mr/Ms. ", name)
    return function thanks(message){
        console.log(message)
    }
}

welcome('sam')('thanks for being the best today!')
console.log("from Sebastian")
// welcome((welcome("hello")());
function eat(param1) {
    return function drink(param2){
        return function thank(param3){
            console.log(param1, '>' , param2 , '>', param3)
        }
    }
}
eat('fruits')('water')('nature')

// display numbers in descending order with recursion.
function descendingOrder(number) {
    // operation
    console.log(number)
    // manipulation
    const updatedNumber = number -1
    // base case
    if(updatedNumber > 49) {
        descendingOrder(updatedNumber)
    }
}

descendingOrder(55);