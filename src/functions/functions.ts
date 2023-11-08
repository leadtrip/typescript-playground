// this function specifies any type for the input argument and the return type is inferred by typescript
function basic (a: any) {
    return 'b'
}

export const add = (a: number, b: number) => {
    return a + b;
}

// now we've specified the argument and return types
export function isGt1(a : number) : boolean {
    return a > 1;
}

// storing function types in a type alias ===========================================
type NumArgBoolRet = (a: number) => boolean;        // a function return type

export const gtThan1: NumArgBoolRet = function (        // here we make use of the NumArgBoolRet type defined above & we've fully typed the function, verbose
    a: number                                    // now, gtThan1 can be called wherever
): boolean {
    return a > 1;
}

const inp = 2;
console.log('%d is greater than 1 %s', inp, gtThan1(inp))   // calling gtThan1

const lt1: NumArgBoolRet = function (a) {return a < 1}  // again making use of the NumArgBoolRet type but letting typescript infer the arg and return types
console.log("%d is less than 1 %s", inp, lt1(inp) )                     // and calling lt1

// you can also pass the function return type as a parameter
function myFunky(func: NumArgBoolRet) : boolean {
    return func(29);
}
myFunky((a) => a % 2 == 0);

// and as a return type
export function myFunky2(): NumArgBoolRet {         // NO IDEA WHAT'S GOING ON HERE !!!!!!!
    return (a) => a % 3 == 0;
}
// =============================================================================================

// parameter annotations - functions can be given type annotations too ==============================================
function greetYou(noun: string) {
    console.log(`Hello, ${noun}!`);
}

greetYou('World'); // Prints: Hello, World
// greet(2020); can't do this

// specifying a ? after the parameter name makes it optional ==============================================
function greetOpt(name?: string) {
    console.log(`Hello, ${ name || 'stranger' }!`);
}

greetOpt();

// we can also supply defaults for parameters ==============================================
export function exponentiation(power = 1) {
    const res = 4 ** power
    console.log(res);
    return res;
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
function trueOrFalse(value: number): boolean {
    return value > 0;
}

// Arrow function vs function keyword ======================================================
// ES5: Without arrow function
const getResultKeyword = function(username: string, points: number) {
    return username + ' scored ' + points + ' points!';
};

// ES6: With arrow function
const getResultArrow = (username: string, points: number): string => {
    return `${ username } scored ${ points } points!`;
}

getResultKeyword('bob', 28);
getResultArrow('deb', 38);

// arrow function without parameter
const printHi =()=> console.log('Hi')

// curly braces aren't required around function body if there's a single statement
const singleStatmentFunc = (a: number, b: number) => a-b;

// an arrow function can be a class property
export class Badger {
    name: string;
    age: number

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
    toString = () => { return "Name: " + this.name + " Age: " + this.age }
}

const barry = new Badger('Barry', 1)
barry.toString()

export const getDate = (): number => Date.now()

export const echo = (thing: string) => console.log(thing);

export const sub = (a: number, b: number) => a - b;

interface Person {
    name: string;
    age: number;
    created: Date;
}

export const newPerson = (n: string, a: number): Person => { return {name: n, age: a, created: new Date()} }