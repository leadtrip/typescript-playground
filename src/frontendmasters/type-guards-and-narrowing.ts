// A type guard is - Some expression that performs a runtime check that guarantees the type in some scope

let value: Date | null | undefined | "pineapple" | [number] | { dateRange: [Date, Date]}

// following are all type guards
if (value instanceof Date) {
    value
}
else if (typeof value === "string") {
    value
}
else if (value === null) {
    value
}
else if (!value) {
    value
}
else if (Array.isArray(value)) {
    value
}
else if ("dateRange" in value) {        // check for existence of property
    value
}
else {
    value       // nothing left so value = never
}

// user defined type guard
interface Blib {            // Blib has x and common properties
    x: number;
    common: string;
}

interface Blob {            // Blob has y and common properties
    y: number;
    common: string;
}

function isBlib(b: any): b is Blib {        // we use b is Blib rather than say boolean, Typescript will narrow the type in calling code to correct type
    return b.x != undefined;
}

function doIt(b: Blib | Blob) {
    if (isBlib(b)) {
        console.log(b.x)        // Typescript knows this is a Blib and has narrowed b to a Blib
    }
    else {
        console.log(b.y)        // Again, Typescript has narrowed b to a Blob
    }
    console.log(b.common)
}