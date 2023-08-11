/**
 * Typescript uses structural type checking as opposed to say Java which uses nominal type checking.
 * All the things below Bus, Truck, Bike and Bin are valid arguments to the printThing function because they all have
 * the same shape i.e. they all have the properties make, model and year
 */
interface Bus {
    make: string
    model: string
    year: number
}

export class Truck {
    make: string
    model: string
    year: number
    rigid: boolean
}

export class Bike {
    make: string
    model: string
    year: number
}

export type Bin = {
    make: string
    model: string
    year: number
}

export function printThing(thing: {     // Typescript uses a structural type system as opposed to Java which uses a nominal type system
    make: string                        // All typescript cares about here is that the argument has (at least) the 3 properties make, model and year
    model: string
    year: number
}) {
    console.log(`${thing.make} ${thing.model} ${thing.year}`)
}

export function printBus(bus: Bus ) {               // again here, although we've stated Bus as the argument type we can pass anything that has the 3 props
    printThing(bus)
}

export function printBike( bike: Bike ) {           // here we just call the printIntBus function from printBike
    printBus(bike)
}

interface OptBus extends Bus{
    doubleDeck?: boolean            // using ? we don't have to specify anything
    colour: string | undefined      // using or, we'd have to explicitly state undefined if value was unknown, see test
}

export function printOptBus(bus: OptBus) {
    if ( typeof bus.doubleDeck === 'undefined') {
        bus.doubleDeck = false
    }
    if ( typeof bus.colour === 'undefined') {
        bus.colour = 'white'
    }
    console.log(`${bus.make} ${bus.model} ${bus.year} ${bus.doubleDeck} ${bus.colour}`)
}