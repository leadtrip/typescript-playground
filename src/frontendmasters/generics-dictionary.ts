interface Dict<T> {
    [k: string]: T
}

export function mapDict<T, U>(input: Dict<T>, mappingCallback: (arg: T, key: string) => U): Dict<U> {
    const toReturn: Dict<U> = {}
    for (let key in input) {
        const thisVal = input[key]
        toReturn[key] = mappingCallback(thisVal, key)
    }
    return toReturn
}
export function filterDict<T>(input: Dict<T>, filterCallback: (arg: T) => boolean): Dict<T> {
    const toReturn : Dict<T> = {}
    for ( let key in input ) {
        const thisVal = input[key]
        if ( filterCallback(thisVal) ){
            toReturn[key] = thisVal
        }
    }
    return toReturn;
}
export function reduceDict<T, V>(input: Dict<T>, reducer: (currentValue: V, item: T) => V, initialValue: V) : V  {
    let valToReturn = initialValue;
    for ( let key in input ) {
        const thisVal = input[key]
        valToReturn = reducer(valToReturn, thisVal)
    }
    return valToReturn;
}