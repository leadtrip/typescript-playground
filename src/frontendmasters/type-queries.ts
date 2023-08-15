// -- keyof --
// The keyof operator takes an object type and produces a string or numeric literal union of its keys.

interface Person {
    name: string;
    age: number;
    occupation: string;
}

type AllPersonKeys = keyof Person   // AllPersonKeys = { name | age | occupation }

// A function that works explicitly with a Person
export function getPersonProperty(person: Person, property: AllPersonKeys) {
    return person[property]
}

// A generic function that takes an object and a key of that object, and returns the value of that key
export function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}