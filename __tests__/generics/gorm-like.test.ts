import {find, save} from "../../src/generics/gorm-like";


test( 'test CRUD', ()=> {
    // find an existing laptop
    expect(find(1, 'laptops')).toEqual({id: 1, screenSize: 15})

    // find an existing keyboard
    expect(find(1, 'keyboards')).toEqual({id: 1, colour: 'black'})

    // create a new laptop
    expect(save({id: undefined, screenSize: 28}, 'laptops')).toEqual({id: 4, screenSize: 28})

    // find the new laptop
    expect(find(4, 'laptops')).toEqual({id: 4, screenSize: 28})

    // create a new keyboard
    expect(save({id: undefined, colour: 'indigo'}, 'keyboards')).toEqual({id: 4, colour: 'indigo'})
})