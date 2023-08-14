import {addToBox, BoxedItems, boxIt, boxItems, loggingIdentityType} from "../../src/frontendmasters/generics";

test ('boxIt', () => {
    // we can use generics on function call...
    boxIt<number>(84)
    boxIt<string>('dog')
    boxIt<object>( {name: 'sam', age: 100})

    // or leave off and let Typescript infer
    boxIt(84)
    boxIt('dog')
    boxIt( {name: 'sam', age: 100})
})

test ( 'boxItems', () => {
    boxItems<string>(['one', 'two', 'three'])
    boxItems<number>([1, 2, 3])
    boxItems<Array<number>>([[1], [2], [3]])
})

test ( 'addToBox', () => {
    let bi: BoxedItems<string> = {items: []}
    addToBox('chicken', bi)
    expect(bi.items[0]).toEqual('chicken')

    addToBox('helicopter', bi);
    expect(bi.items.length).toEqual(2)
    expect(bi.items[1]).toEqual('helicopter')
})

test ( 'loggingIdentityType', ()=> {
    loggingIdentityType([1, 3]);     // arrays have a length property
    loggingIdentityType('I have a length')
    loggingIdentityType({length: 1, details: 'object with length'})
})