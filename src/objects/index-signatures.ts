/**
 * Index signatures let you type objects of unknown structure when you only know the key and value types.
 */

type StringKeyNumVal = {[key: string]: number};     // all we know is the key is a string and the value is a number
export function sumAllInput(inp: StringKeyNumVal ) {
    let total  = 0;
    for (const name in inp) {
        total += inp[name]
    }
    return total;
}

// ================================================================================

type Ph = {
    country: string
    area: string
    number: string
}

type IndPhone = {           // slightly more complex index signature type where key is string and value is a Ph object
    [k: string]: Ph
}

export function getPhoneFor(allPhones: IndPhone, typ: string): Ph {
    return allPhones[typ];
}