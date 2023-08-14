import {filterDict, mapDict, reduceDict} from "../../src/frontendmasters/generics-dictionary";
import {assertEquals, assertOk} from "./custom-asserts";

const fruits = {
    apple: { color: "red", mass: 100 },
    grape: { color: "red", mass: 5 },
    banana: { color: "yellow", mass: 183 },
    lemon: { color: "yellow", mass: 80 },
    pear: { color: "green", mass: 178 },
    orange: { color: "orange", mass: 262 },
    raspberry: { color: "red", mass: 4 },
    cherry: { color: "red", mass: 5 },
}

test ('mapDict', ()=> {
    const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
        ...fruit,
        kg: 0.001 * fruit.mass,
        name,
    }))
    const lemonName: string = fruitsWithKgMass.lemon.name
// @ts-ignore-error
    const failLemonName: number = fruitsWithKgMass.lemon.name
    assertOk(
        fruitsWithKgMass,
        "[MAP] mapDict returns something truthy"
    )
    assertEquals(
        fruitsWithKgMass.cherry.name,
        "cherry",
        '[MAP] .cherry has a "name" property with value "cherry"'
    )
    assertEquals(
        fruitsWithKgMass.cherry.kg,
        0.005,
        '[MAP] .cherry has a "kg" property with value 0.005'
    )
    assertEquals(
        fruitsWithKgMass.cherry.mass,
        5,
        '[MAP] .cherry has a "mass" property with value 5'
    )
    assertEquals(
        Object.keys(fruitsWithKgMass).length,
        8,
        "[MAP] fruitsWithKgMass should have 8 keys"
    )
})

test( 'filterDict', ()=> {
    const redFruits = filterDict(
        fruits,
        (fruit) => fruit.color === "red"
    )
    assertOk(
        redFruits,
        "[FILTER] filterDict returns something truthy"
    )
    assertEquals(
        Object.keys(redFruits).length,
        4,
        "[FILTER] 4 fruits that satisfy the filter"
    )
    assertEquals(
        Object.keys(redFruits).sort().join(", "),
        "apple, cherry, grape, raspberry",
        '[FILTER] Keys are "apple, cherry, grape, raspberry"'
    )
})

test( 'reduceDict', ()=> {
    const oneOfEachFruitMass = reduceDict(
        fruits,
        (currentMass, fruit) => currentMass + fruit.mass,
        0
    )

    const redFruits = filterDict(
        fruits,
        (fruit) => fruit.color === "red"
    )

    assertOk(
        redFruits,
        "[REDUCE] reduceDict returns something truthy"
    )
    assertEquals(
        typeof oneOfEachFruitMass,
        "number",
        "[REDUCE] reduceDict returns a number"
    )
    assertEquals(
        oneOfEachFruitMass,
        817,
        "[REDUCE] 817g mass if we had one of each fruit"
    )
})