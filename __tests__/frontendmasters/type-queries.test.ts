import {getPropertyValue, getPersonProperty} from "../../src/frontendmasters/type-queries";


test('printPersonProperty', ()=> {
    let person = { name: "Alice", age: 25, occupation: 'programmer' };

    expect(getPersonProperty(person, "name")).toEqual('Alice')
    expect(getPersonProperty(person, "age")).toEqual(25)
})


test( 'getPropertyValue', ()=> {
    let person = { name: "Alice", age: 25, occupation: 'programmer' };

    expect(getPropertyValue(person, "name")).toEqual('Alice');
    expect(getPropertyValue(person, "age")).toEqual(25)
    expect(getPropertyValue(person, "occupation")).toEqual('programmer')
    //expect(getPropertyValue(person, "location")).toEqual('london')            // this won't work because typescript knows location isn't a field on person

    let fridge = { mfr: 'indesit', colour: 'white' }
    expect(getPropertyValue(fridge, 'mfr')).toEqual("indesit")
} )