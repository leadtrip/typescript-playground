"use strict";
/**
 * In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.
 */
// anonymous object
function greetThou(person) {
    return "Hello " + person.name;
}
function greetPerson(person) {
    return "Hello " + person.name;
}
function greet(human) {
    return "Hello " + human.name;
}
// Default values - we can supply default values for optional properties
function paintShape({ shape, xPos = 0, yPos = 0 }) { }
function visitForBirthday(home) {
    console.log(`Happy birthday ${home.resident.name}!`); // We can read and update properties from 'home.resident'.
    home.resident.age++;
}
function evict(home) {
    // home.resident = { name: "Victor the Evictor", age: 42, };        But we can't write to the 'resident' property itself on a 'Home'.
}
function readAddress(addr) {
    console.log(addr.name || '<default>', addr.num, addr.street);
}
let myAdd = {
    name: 'Home',
    street: 'Tower',
    num: 38
};
readAddress(myAdd);
readAddress({ num: 21, street: 'Whistler' });
const cc = {
    color: "red",
    radius: 42,
};
let stringBox = { contents: 'digger' };
let bungoBox = { contents: { falk: 'quelm' } };
function setContents(box, newContents) {
    box.contents = newContents;
}
setContents(stringBox, 'chicken');
setContents(bungoBox, { falk: 'gooseberry' });
// ==========================  ==========================
// ==========================  ==========================
// ==========================  ==========================
// ==========================  ==========================
// ==========================  ==========================
