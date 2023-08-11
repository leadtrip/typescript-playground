// ========================================================
// Basic class using built in types, range and default
export class Planet {
    name: string
    knownLife: boolean
    lightYearsFromEarth: number
    type: 'ROCKY' | 'GAS'
    messagesSent = 0
}

const Z2919: Planet = {
    name: 'Z2919',
    knownLife: false,
    lightYearsFromEarth: 4,
    type: 'ROCKY',
    messagesSent: 10
}

console.log(Z2919)
// ========================================================
// Classes using our defined type
class Cow {
    name: string;
    age: number;
    address: CowAddress;
}

class CowAddress {
    no: number;
    street: string;
}

const bob: Cow = {
    name: 'Bob',
    age: 21,
    address: {
        no: 2321,
        street: 'Baker'
    }
}

console.log(bob)

// ========================================================
// Constructor
export class Phone {
    name: string;
    model: string;

    constructor(n = 'XXX', m = '000') {         // constructor with defaults
        this.name = n;
        this.model = m;
    }

    hasBeenSetup (): boolean { return this.name != 'XXX' }
}

const phoneY = new Phone()
console.log(phoneY);

// ========================================================
// Inheritance
class BaseClass {
    k = 2;
}

class ChildClass extends BaseClass {
    constructor() {
        super();
        console.log(this.k)         // super must be called before accessing any parent class fields
    }
}