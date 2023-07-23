// Union type - TypeScript allows you to combine specific types together as a union type
let answer: any;    // any type
let typedAnswer: string | number; // union type

typedAnswer = '100';    // string
typedAnswer = 100;      // or number

// Union type narrowing
// you can help TypeScript infer the correct variable type using type narrowing. To narrow a variable to a specific type, implement a type guard. Use the typeof operator with the variable name and compare it with the type you expect for the variable
const choices: [string, string] = ['NO', 'YES'];
const processAnswer = (answer: number | boolean) => {
    if (typeof answer === 'number') {
        console.log(choices[answer]);
    } else if (typeof answer === 'boolean') {
        if (answer) {
            console.log(choices[1]);
        } else {
            console.log(choices[0]);
        }
    }
}
processAnswer(true);   // Prints "YES"
processAnswer(0);      // Prints "NO"

// Union return type, here typescript infers the return type as a union of string or number which we deal with when calling
const brownCod = (dig: number) => {
    if (dig > 0) {
        return 'positive'       // string
    }
    else {
        return -1;              // number
    }
}

let res: string | number = brownCod(10);    // string or number as return type

// Union Type Common Property Access - TypeScript allows you to access properties that are common among the member types without any error
let element: string | number[] = 'Codecademy';
// The .length property is common for string and array
console.log(element.length);      // Prints 10
// The .match method only works for a string type
console.log(element.match('my')); // Prints ["my"]

element = [3, 5, 1];
// The length property is common for string and array
console.log(element.length);      // Prints 3
// The .match method will not work for an array type
//console.log(element.match(5));  // Error: Property 'match' does not exist on type 'number[]'.