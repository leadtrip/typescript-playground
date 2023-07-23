"use strict";
// type for 1D array ==============================================
let zipcodes = ['903281', '9283192'];
zipcodes.push('12321');
// type for generic 1D array ==============================================
let birds = ['robin', 'eagle'];
birds.push('thrush');
// empty 1D array
let axis = [];
// empty 2D array
let coords = [];
// Tuple type - An array that has a fixed size of similar or different element types arranged in a particular sequence is defined as a tuple ==============================================
// These are arrays
let header = ['Name', 'Age', 'Smoking', 'Salary'];
let anyArray = [213, 'cow', false];
// This is a tuple, to annotate a tuple in TypeScript, add a colon (:) followed by square brackets ([...]) containing a list of comma-separated types
// A tuple maintains a strict ordering of its elements and therefore, the type for each element is enforced, and it's size cannot change
let profile = ['Kobe', 39, true, 150000];
let eventDate = ['April', '10']; // tuple
let newEvent = ['May', '21']; // array
// eventDate = newEvent             can't do this, arrays are not tuples
const threeWords = ['Lasted', 90, 'minutes']; // tuple
let moreWords = threeWords.concat(['on', 'zwift']); // calling concat on a tuple creates an array
// a rest parameter in a function is implicitly of array type any, we must explicitly state type with an annotation, number[] in the case below
const sumAllNumbers = (...numberList) => {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    return sum;
};
// spread operator with a tuple ==============================================
function modulo(dividend, divisor) {
    return dividend % divisor;
}
const numbers = [6, 4];
modulo(...numbers); // spread
// ============================================== Enums ==============================================
// enum, MaritalStatus is a numerical enum by default where the first value starts at zero ==============================================
var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus[MaritalStatus["Single"] = 0] = "Single";
    MaritalStatus[MaritalStatus["Married"] = 1] = "Married";
    MaritalStatus[MaritalStatus["Separated"] = 2] = "Separated";
    MaritalStatus[MaritalStatus["Divorced"] = 3] = "Divorced";
})(MaritalStatus || (MaritalStatus = {}));
let employee = [
    'Bob Jones',
    MaritalStatus.Single,
    39
];
// we can also assign a starting value to the first numerical enum and the others increment
var ClassGrade;
(function (ClassGrade) {
    ClassGrade[ClassGrade["Freshman"] = 9] = "Freshman";
    ClassGrade[ClassGrade["Sophomore"] = 10] = "Sophomore";
    ClassGrade[ClassGrade["Junior"] = 11] = "Junior";
    ClassGrade[ClassGrade["Senior"] = 12] = "Senior";
})(ClassGrade || (ClassGrade = {}));
// we can also explicitly set the values of all the enums like:
var Grades;
(function (Grades) {
    Grades[Grades["A"] = 90] = "A";
    Grades[Grades["B"] = 80] = "B";
    Grades[Grades["C"] = 70] = "C";
    Grades[Grades["D"] = 60] = "D";
})(Grades || (Grades = {}));
const myGrade = Grades.A;
// the other type of enum is a string enum like:
var ClassName;
(function (ClassName) {
    ClassName["Freshman"] = "FRESHMAN";
    ClassName["Sophomore"] = "SOPHOMORE";
    ClassName["Junior"] = "JUNIOR";
    ClassName["Senior"] = "SENIOR";
})(ClassName || (ClassName = {}));
const studentClass = ClassName.Junior;
const anA = 90; // you can assign a valid numerical value to a variable whose type is a numeric enum
// const senior: ClassName = 'FRESHMAN;     // but you can't do the same with a string type enum
// ============================================== objects ==============================================
// typescript object types can be annotated with value types
let car;
car = { make: 'Ford', model: 'Fiesta', year: 1985 };
let boris = { name: 'Boris', age: 35, courses: ['JavaScript', 'TypeScript'] };
// This function uses a function type alias
let sumAll = function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};
// This function also uses the same function type alias
let computeAverage = function (numbers) {
    return sumAll(numbers) / numbers.length;
};
console.log(computeAverage([5, 10, 15])); // Prints 10
let bookCollection = {
    name: 'Nursery Books',
    quantity: 3,
    content: ['Goodnight Moon', 'Humpty Dumpty', 'Green Eggs & Ham']
};
let primeNumberCollection = {
    name: 'First 5 Prime Numbers',
    quantity: 5,
    content: [2, 3, 5, 7, 11]
};
// ============================================== Generic Function Type Alias ==============================================
// This is a generic function type alias
function findMiddleMember(members) {
    return members[Math.floor(members.length / 2)];
}
// Call function for an array of strings
console.log(findMiddleMember(['I', 'am', 'very', 'happy'])); // Prints "very"
// Call function for an array of numbers
console.log(findMiddleMember([210, 369, 102])); // Prints 369
