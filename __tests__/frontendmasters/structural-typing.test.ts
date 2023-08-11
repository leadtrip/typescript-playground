import {printThing, printBus, printOptBus, Truck, Bike, Bin} from "../../src/frontendmasters/structural-typing";

test('printThing', () => {
    printThing({make: 'Rover', model: 'D4', year: 1972})    // we can pass an object
    printThing(new Truck())                                      // or a truck, which also has a rigid property
    printThing(new Bike())                                       // or a Bike, they all have the 3 required properties make, model and year

    const BinType: Bin = { make: 'abc', model: 'xyz', year: 2023 }
    printThing(BinType)                                         // or a Bin
});

test('printBus', ()  => {
    printBus({make: 'Rover', model: 'D4', year: 1972})
    printBus(new Truck())                                // even though printIntBus accepts a Bus interface, so long as the object shape includes the fields it's acceptable
});

test ('printOptBus', () => {
    printOptBus({make: 'Rover', model: 'D4', year: 1972, colour: undefined})
})

test ( 'extraProperty', () => {
    //printBus({make: 'Rover', model: 'D4', year: 1972, colour: 'red'})     // Typescript won't let us add an extra colour property here because it knows it'll never be accessed

    const aBus = {make: 'Rover', model: 'D4', year: 1972, colour: 'red'} // however if we define the object outside the function call Typescript doesn't complain because the object may be used elsewhere

    printThing(aBus)
} )