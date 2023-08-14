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

// ===== user defined type guard ================================================================
interface Blibby {            // Blib has x and common properties
    x: number;
    common: string;
}

interface Blobby {            // Blob has y and common properties
    y: number;
    common: string;
}

function isBlibby(b: any): b is Blibby {        // we use b is Blibby rather than say boolean, Typescript will narrow the type in calling code to correct type
    return b.x != undefined;
}

export function doIt(b: Blibby | Blobby) {
    if (isBlibby(b)) {
        console.log(`It's a Blibby ${b.x}`)        // Typescript knows this is a Blibby and has narrowed b to a Blibby
    }
    else {
        console.log(`It's a Blobby ${b.y}`)        // Again, Typescript has narrowed b to a Blobby
    }
    console.log(b.common)
}