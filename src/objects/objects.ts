/**
 * In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.
 */
// anonymous object
function greetThou(person: { name: string; age: number }) {
    return "Hello " + person.name;
}

// named by using an interface:
interface Person {
    name: string;
    age: number;
}

function greetPerson(person: Person) {
    return "Hello " + person.name;
}

// named using a type alias
type Human = {
    name: string;
    age: number;
};

function greet(human: Human) {
    return "Hello " + human.name;
}

// ========================== Property Modifiers ==========================
// Optional properties - use a question mark after the property name
export type Shape = { name: string }
export interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

// Default values - we can supply default values for optional properties
export function paintShape({shape, xPos = 0, yPos = 0}: PaintOptions) {}

// Read only properties
interface Home {
    readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
    console.log(`Happy birthday ${home.resident.name}!`);       // We can read and update properties from 'home.resident'.
    home.resident.age++;
}

function evict(home: Home) {
    // home.resident = { name: "Victor the Evictor", age: 42, };        But we can't write to the 'resident' property itself on a 'Home'.
}

// ========================== Extending types ==========================
interface BasicAddress {
    name?: string
    street: string
}

interface NumberedAddress extends BasicAddress {         // NumberedAddress extends Address
    num: number
}

function readAddress(addr: NumberedAddress) {
    console.log(addr.name || '<default>', addr.num, addr.street)
}

let myAdd: NumberedAddress = {
    name: 'Home',
    street: 'Tower',
    num: 38
}

readAddress(myAdd)
readAddress({num: 21, street: 'Whistler'})

// ========================== Extend multiple types ==========================
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
};
// ========================== Generic object types ==========================
interface Box<T> {
    contents: T;
}
let stringBox: Box<string> = {contents: 'digger'};

interface Bungo {
    falk: string;
}

let bungoBox: Box<Bungo> = {contents: {falk: 'quelm'}};

function setContents<Type>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
}

setContents( stringBox, 'chicken');
setContents( bungoBox, {falk: 'gooseberry'});
// ==========================  ==========================
// ==========================  ==========================
// ==========================  ==========================
// ==========================  ==========================
// ==========================  ==========================