/*
Type Guard with in operator
In this example, 'swim' in pet uses the 'in' operator to check if the property .swim is present on pet.
TypeScript recognizes this as a type guard and can successfully type narrow this function parameter.
*/
type Fish = {fly(): 'Flapping'}
type Bird = {swim(): 'Swimming'}
function move(pet: Fish | Bird) {
    if ('swim' in pet) {
        return pet.swim();
    }
    return pet.fly();
}

/**
 * Type Guard if-else Statement
 * A type guard can be implemented as a conditional expression in an if statement.
 * If an else statement accompanies the if statement, TypeScript will infer that the else
 * block serves as the type guard for the remaining member type(s) of the union.
  */

function roughAge(age: number | string) {
    if (typeof age === 'number') {
        // In this block, age is known to be a number
        console.log(Math.round(age));
    } else {
        // In this block, age is known to be a string
        console.log(age.split(".")[0]);
    }
}
roughAge('3.5');  // Prints "3"
roughAge(3.5);    // Prints 4

