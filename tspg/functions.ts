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