import {add, Badger, exponentiation, gtThan1, isGt1, myFunky2, newPerson} from "../../src/functions/functions";

test('add', () => {
    expect(add(5, 6)).toEqual(11);
});

test('isGt1', () => {
    expect(isGt1(2)).toEqual(true);
});

test('gtThan1', () => {
    expect(gtThan1(0)).toEqual(false);
});

test('exponentiation', () => {
    expect(exponentiation()).toEqual(4);

    expect(exponentiation(4)).toEqual(256);
});

test('Badger class', () => {
    const name = 'Barry';
    const age = 4;
    const barry = new Badger(name, age)

    expect(barry.toString()).toEqual(`Name: ${name} Age: ${age}`)
});


test('newPerson', () => {
    const name = 'Paul';
    const age = 38;

    expect(newPerson(name, age).created).toBeTruthy()
})