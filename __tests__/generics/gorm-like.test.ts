import {find, save} from "../../src/generics/gorm-like";


test( 'test CRUD', ()=> {
    expect(find(1, 'laptops')).toEqual({id: 1, screenSize: 15})

    expect(find(1, 'keyboards')).toEqual({id: 1, colour: 'black'})

    expect(save({id: undefined, screenSize: 28}, 'laptops')).toEqual({id: 4, screenSize: 28})

    expect(find(4, 'laptops')).toEqual({id: 4, screenSize: 28})
})