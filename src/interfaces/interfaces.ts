/*
An interface defines the specifications of an entity. It lays out the contract that states what needs to be done but doesn’t specify how it will be done.
An interface contains the name of all the properties along with their types. It also includes the signature for functions along with the type of arguments and return type
A class or function can implement an interface to define the implementation of the properties as defined in that interface.
 */

// Interface definition
interface Logger {
    log: (message: string) => void;
}

// Concrete implementation of Logger interface above
const logger: Logger = {
    log: (message) => console.log(message)
}

// A more complex interface definition with functions
export interface TeslaModelS {
    readonly length: number;
    readonly width: number;
    readonly wheelbase: number;
    seatingCapacity: number;
    getTyrePressure: () => number;
    getRemCharging: () => number;
}

// A function that accepts a TeslaModelS argument, see test
export function buildTeslaModelS (teslaObj: TeslaModelS) {
}

