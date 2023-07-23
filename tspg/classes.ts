class Cow {
    name: string;
    age: number;
    address: CowAddress;
}

class CowAddress {
    no: number;
    street: string;
}

const bob: Person = {
    name: 'Bob',
    age: 21,
    address: {
        no: 2321,
        street: 'Baker'
    }
}