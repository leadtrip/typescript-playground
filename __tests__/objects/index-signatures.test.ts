import {getPhoneFor, sumAllInput} from "../../src/objects/index-signatures";

test('sumAllInput', () => {
    const inp1 = {
        wheels: 44,
        bones: 31,
        trees: 1921
    }

    expect(sumAllInput(inp1)).toEqual(1996)

    const inp2 = {
        cardiff: 29,
        london: 291
    }

    expect(sumAllInput(inp2)).toEqual(320)
});

test( 'getPhoneFor', () => {
    const allPhones = {
        home: { country: "+1", area: "211", number: "652-4515" },
        work: { country: "+1", area: "670", number: "752-5856" },
        fax: { country: "+1", area: "322", number: "525-4357" },
    }

    expect(getPhoneFor(allPhones, 'fax')).toEqual({ country: "+1", area: "322", number: "525-4357" })
})