export function fullObjectDestructure() {
    let rect = {x: 0, y: 10, width: 15, height: 20};
    let {x, y, width, height} = rect;           // assign all rect values
    console.log(x, y, width, height); // 0,10,15,20

    rect.x = 10;
    ({x, y, width, height} = rect); // assign to existing variables using outer parentheses
    console.log(x, y, width, height); // 10,10,15,20
}

export function partialObjectDestructure() {
    let person = {name: 'bob', age: 50, height: 180, weight: 76}
    let {name, age} = person        // assign 2 person values
    console.log(name, age)

    let {height, weight} = person       // assign 2 other person values
    console.log(height, weight)
}

export function restObjectDestructure() {
    // Example 1
    let {w, x, ...remaining} = {w: 1, x: 2, y: 3, z: 4};
    console.log(w, x, remaining); // 1, 2, {y:3,z:4}

    // Example 2, more practical
    // Example function
    function goto(point2D: {x: number, y: number}) {
        // Imagine some code that might break if you pass in an object with more items than desired
    }
    // Some point you get from somewhere
    const point3D = {x: 1, y: 2, z: 3};
    /** A nifty use of rest to remove extra properties */
    const { z, ...point2D } = point3D;
    console.log(point2D)
    goto(point2D);
}

export function arrayDestructuring() {
    let input = [1, 2];
    let [first, second] = input;
    console.log(first);
    console.log(second);
}

export function arrayRestDestructuring() {
    let [first, ...rest] = [1, 2, 3, 4];
    console.log(first); // outputs 1
    console.log(rest); // outputs [ 2, 3, 4 ]

    let [f,, t, ...others] = [1,2,3,4,5,6];     // this time we skip 2 with the double comma ,,
    console.log(f)
    console.log(t)
    console.log(others)
}

export function spreadExercise() {
    const externalData = {name: 'bob', age: 100}

    const anotherData =
        {
            ...externalData,
            mongoose: 'okay',
            twister: 1023
        }

    console.log(anotherData)
}