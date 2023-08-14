interface Box<T> { item: T }
export function boxIt<T>(arg: T): Box<T> {
    return {item: arg}
}
// =============================================================
export interface BoxedItems<T> { items: T[] }

export function boxItems<T>(lst: T[]) {
    let boxedItems: BoxedItems<T> = {items: []}
    lst.forEach((element) => {
       boxedItems.items.push(element)
    })
    return boxedItems;
}

export function addToBox<T>(item: T, bi: BoxedItems<T>) {
    bi.items.push(item);
}

// =============================================================

interface LengthWise {
    length: number;
}

export function loggingIdentityType<Type extends LengthWise>(arg: Type) {
    console.log(arg.length)
    return arg;
}