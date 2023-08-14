import {doIt} from "../../src/frontendmasters/type-guards-and-narrowing";

test ('doIt', () => {
    doIt({x: 111, common: "Hello I'm a Blibby"})
    doIt({y: 999, common: "Hello I'm a Blobby"})
})