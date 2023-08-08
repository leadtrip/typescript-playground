"use strict";
// ========================================================
// Basic class using built in types, range and default
class Planet {
    constructor() {
        this.messagesSent = 0;
    }
}
const Z2919 = {
    name: 'Z2919',
    knownLife: false,
    lightYearsFromEarth: 4,
    type: 'ROCKY',
    messagesSent: 10
};
console.log(Z2919);
// ========================================================
// Classes using our defined type
class Cow {
}
class CowAddress {
}
const bob = {
    name: 'Bob',
    age: 21,
    address: {
        no: 2321,
        street: 'Baker'
    }
};
console.log(bob);
// ========================================================
// Constructor
class Phone {
    constructor(n = 'XXX', m = '000') {
        this.name = n;
        this.model = m;
    }
}
const phoneY = new Phone();
console.log(phoneY);
