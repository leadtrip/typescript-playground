import {
    arrayDestructuring, arrayRestDestructuring,
    fullObjectDestructure,
    partialObjectDestructure,
    restObjectDestructure, spreadExercise
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

test('spreadExercise', () => {
    spreadExercise();
})