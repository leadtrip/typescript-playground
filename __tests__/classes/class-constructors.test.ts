import {NewThingy, OldThingy} from "../../src/classes/class-constructors";


test('create old thingy', ()  => {
    const oldThingy = new OldThingy('AAAA', 'BBBB')
    expect(oldThingy.make).toEqual('AAAA')
    expect(oldThingy.model).toEqual('BBBB')
})

test('create new thingy', ()  => {
    const newThingy = new NewThingy('AAAA', 'BBBB')
    expect(newThingy.make).toEqual('AAAA')
    expect(newThingy.getModel()).toEqual('BBBB')
})