// primitive types ==============================================
let str = "Hello"
let num = 483
let boo = false
let nul = null
let und = undefined

// type inference ==============================================
// str = 99; we can't do this because TS has inferred the type to be string
// str.toBananaCase(); TS knows the shape of an object so prevents us from calling no-existing methods on them

let bongo;  // bongo is of type any and can be reassigned to anything without error ==============================================
bongo = 'cheese';  // bongo is now type string
bongo = 8123;   // now number

// Adding a type annotation ensures that a variable can only ever be assigned to that type ==============================================
let firstName: string;
firstName = 'bob';

// parameter annotations - functions can be given type annotations too ==============================================
function greet(noun: string) {
    console.log(`Hello, ${noun}!`);
}

greet('World'); // Prints: Hello, World
// greet(2020); can't do this

// specifying a ? after the parameter name makes it optional ==============================================
function greetOpt(name?: string) {
    console.log(`Hello, ${ name || 'stranger' }!`);
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
function trueOrFalse(value: number): boolean {
    return value > 0;
}

// type for 1D array ==============================================
let zipcodes: string[] = ['903281', '9283192']
zipcodes.push('12321')

// type for generic 1D array ==============================================
let birds: Array<string> = ['robin', 'eagle']
birds.push('thrush')

// empty 1D array
let axis: string[] = [];
// empty 2D array
let coords: number[][] = [];

// Tuple type - An array that has a fixed size of similar or different element types arranged in a particular sequence is defined as a tuple
// This is an array
let header: string[] = ['Name', 'Age', 'Smoking', 'Salary'];
// This is a tuple
let profile: [string, number, boolean, number] = ['Kobe', 39, true, 150000];