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

// Tuple type - An array that has a fixed size of similar or different element types arranged in a particular sequence is defined as a tuple ==============================================
// These are arrays
let header: string[] = ['Name', 'Age', 'Smoking', 'Salary'];
let anyArray: any[] = [213, 'cow', false]
// This is a tuple, to annotate a tuple in TypeScript, add a colon (:) followed by square brackets ([...]) containing a list of comma-separated types
// A tuple maintains a strict ordering of its elements and therefore, the type for each element is enforced, and it's size cannot change
let profile: [string, number, boolean, number] = ['Kobe', 39, true, 150000];

let eventDate: [string, string] = ['April', '10']       // tuple
let newEvent: string[] = ['May', '21']                  // array
// eventDate = newEvent             can't do this, arrays are not tuples

const threeWords: [string, number, string] = ['Lasted', 90, 'minutes'];     // tuple
let moreWords = threeWords.concat(['on', 'zwift']);     // calling concat on a tuple creates an array

// a rest parameter in a function is implicitly of array type any, we must explicitly state type with an annotation, number[] in the case below
const sumAllNumbers = (...numberList: number[]): number => {
    let sum = 0;
    for (let i=0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    return sum;
}

// spread operator with a tuple ==============================================
function modulo(dividend: number, divisor: number): number {
    return dividend % divisor;
}
const numbers: [number, number] = [6, 4];
modulo(...numbers)  // spread

// ============================================== Enums ==============================================
// enum, MaritalStatus is a numerical enum by default where the first value starts at zero ==============================================
enum MaritalStatus {
    Single,
    Married,
    Separated,
    Divorced
}

let employee: [string, MaritalStatus, number] = [
    'Bob Jones',
    MaritalStatus.Single,
    39
];

// we can also assign a starting value to the first numerical enum and the others increment
enum ClassGrade {
    Freshman = 9,
    Sophomore,
    Junior,
    Senior
}

// we can also explicitly set the values of all the enums like:
enum Grades {
    A = 90,
    B = 80,
    C = 70,
    D = 60
}
const myGrade: Grades = Grades.A;

// the other type of enum is a string enum like:
enum ClassName {
    Freshman = 'FRESHMAN',
    Sophomore = 'SOPHOMORE',
    Junior = 'JUNIOR',
    Senior = 'SENIOR'
}
const studentClass: ClassName = ClassName.Junior;

const anA: Grades = 90;     // you can assign a valid numerical value to a variable whose type is a numeric enum
// const senior: ClassName = 'FRESHMAN;     // but you can't do the same with a string type enum

// ============================================== objects ==============================================
// typescript object types can be annotated with value types
let car: {make: string, model: string, year: number};
car = {make: 'Ford', model: 'Fiesta', year: 1985}

// this is a type alias which allows reuse and prevents need to redeclare complex objects repeatedly, just use type keyword
type Student = {
    name: string,
    age: number,
    courses: string[]
};
let boris: Student = {name: 'Boris', age: 35, courses: ['JavaScript', 'TypeScript']};

// ============================================== Function type alias ==============================================
// In JavaScript, a function can be assigned to a variable. In TypeScript, a function type alias can be used to annotate a variable.
// This is a function type alias
type NumberArrayToNumber = (numberArray: number[]) => number;

// This function uses a function type alias
let sumAll: NumberArrayToNumber = function(numbers: number[]) {
    let sum = 0;
    for (let i=0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// This function also uses the same function type alias
let computeAverage: NumberArrayToNumber = function(numbers: number[]) {
    return sumAll(numbers)/numbers.length;
};

console.log(computeAverage([5, 10, 15]));   // Prints 10

// ============================================== Generic Type Alias ==============================================
// This is a generic type alias
type Collection<G> = {
    name: string,
    quantity: number,
    content: G[]
};

let bookCollection: Collection<string> = {
    name: 'Nursery Books',
    quantity: 3,
    content: ['Goodnight Moon', 'Humpty Dumpty', 'Green Eggs & Ham']
};

let primeNumberCollection: Collection<number> = {
    name: 'First 5 Prime Numbers',
    quantity: 5,
    content: [2, 3, 5, 7, 11]
};

// ============================================== Generic Function Type Alias ==============================================
// This is a generic function type alias
function findMiddleMember<M>(members: M[]): M {
    return members[Math.floor(members.length/2)];
}

// Call function for an array of strings
console.log(findMiddleMember<string>(['I', 'am', 'very', 'happy'])); // Prints "very"

// Call function for an array of numbers
console.log(findMiddleMember<number>([210, 369, 102]));     // Prints 369
