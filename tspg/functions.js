"use strict";
// this function specifies any type for the input argument and the return type is inferred by typescript
function basic(a) {
    return 'b';
}
const add = (a, b) => {
    return a + b;
};
// now we've specified the argument and return types
function isGt1(a) {
    return a > 1;
}
const gtThan1 = function (// here we make use of the NumArgBoolRet type defined above & we've fully typed the function, verbose
a // now, gtThan1 can be called wherever
) {
    return a > 1;
};
const inp = 2;
console.log('%d is greater than 1 %s', inp, gtThan1(inp)); // calling gtThan1
const lt1 = function (a) { return a < 1; }; // again making use of the NumArgBoolRet type but letting typescript infer the arg and return types
console.log("%d is less than 1 %s", inp, lt1(inp)); // and calling lt1
// you can also pass the function return type as a parameter
function myFunky(func) {
    return func(29);
}
myFunky((a) => a % 2 == 0);
// and as a return type
function myFunky2() {
    return (a) => a % 3 == 0;
}
// =============================================================================================
// parameter annotations - functions can be given type annotations too ==============================================
function greetYou(noun) {
    console.log(`Hello, ${noun}!`);
}
greetYou('World'); // Prints: Hello, World
// greet(2020); can't do this
// specifying a ? after the parameter name makes it optional ==============================================
function greetOpt(name) {
    console.log(`Hello, ${name || 'stranger'}!`);
}
greetOpt();
// we can also supply defaults for parameters ==============================================
function exponentiation(power = 1) {
    console.log(4 ** power);
}
exponentiation(); // Prints: 4
exponentiation(4); // Prints: 256
// return type inference ==============================================
function factOrFiction() {
    return Math.random() >= .5 ? 'true' : 'false';
}
//const myAnswer : boolean = factOrFiction();   typescript knows this isn't going to work as the return type is string
// explicit return types ==============================================
// We can be explicit about what type a function returns by adding type annotation (: followed by the type) after a function’s closing parenthesis, ).
function trueOrFalse(value) {
    return value > 0;
}
// Arrow function vs function keyword ======================================================
// ES5: Without arrow function
const getResultKeyword = function (username, points) {
    return username + ' scored ' + points + ' points!';
};
// ES6: With arrow function
const getResultArrow = (username, points) => {
    return `${username} scored ${points} points!`;
};
getResultKeyword('bob', 28);
getResultArrow('deb', 38);
// arrow function without parameter
const printHi = () => console.log('Hi');
// curly braces aren't required around function body if there's a single statement
const singleStatmentFunc = (a, b) => a - b;
// an arrow function can be a class property
class Badger {
    constructor(n, a) {
        this.toString = () => console.log("Name: " + this.name + " Age: " + this.age);
        this.name = n;
        this.age = a;
    }
}
const barry = new Badger('Barry', 1);
barry.toString();
const anObj = {
    blik: '291',
    dzan: () => console.log(this.blik)
};
anObj.dzan();
