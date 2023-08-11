import {Phone} from "../../src/classes/classes";


test('phone has factory settings', () => {
    const factoryPhone = new Phone()

    expect(factoryPhone.hasBeenSetup()).toEqual(false);

    factoryPhone.name = 'AB123'

    expect(factoryPhone.hasBeenSetup()).toEqual(true);
});