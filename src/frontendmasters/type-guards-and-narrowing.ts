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
interface Blib {
    x: number;
    common: string;
}

interface Blob {
    y: number;
    common: string;
}

function isBlib(b: any): b is Blib {
    return b.x != undefined;
}

function doIt(b: Blib | Blob) {
    if (isBlib(b)) {
        console.log(b.x)
    }
    else {
        console.log(b.y)
    }
    console.log(b.common)
}