import {
    arrayDestructuring, arrayRestDestructuring,
    fullObjectDestructure,
    partialObjectDestructure,
    restObjectDestructure
} from "../../src/destructuring/destructuring";


test('fullDestructure', () => {
    fullObjectDestructure();
});

test('partialDestructure', () => {
    partialObjectDestructure();
})

test('restObjectDestructure', () => {
    restObjectDestructure();
})

test('arrayDestructuring', () => {
    arrayDestructuring();
})

test('arrayRestDestructuring', () => {
    arrayRestDestructuring();
})