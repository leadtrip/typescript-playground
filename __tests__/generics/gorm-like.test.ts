import {find, save} from "../../src/generics/gorm-like";


test( 'test CRUD', ()=> {
    expect(find(1, 'laptops')).toEqual({id: 1, screenSize: 15})

    expect(find(1, 'keyboards')).toEqual({id: 1, colour: 'black'})

    save({id: undefined, screenSize: 28}, 'laptops')

    expect(find(4, 'laptops')).toEqual({id: 1, screenSize: 28})
})