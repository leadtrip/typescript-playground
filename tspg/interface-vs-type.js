"use strict";
// There are two main tools to declare the shape of an
// object: interfaces and type aliases.
//
// They are very similar, and for the most common cases
// act the same.
const bird1 = { wings: 2 };
const bird2 = { wings: 2 };
// Because TypeScript is a structural type system, it's possible to intermix their use too.
const bird3 = bird1;
let owl = { wings: 2, nocturnal: true };
let chicken = { wings: 2, colourful: false, flies: false };
/*type Puppy = {    // Nope
  toys: number;
};*/
// Depending on your goals, this difference could be a positive or a negative. However for publicly exposed
// types, it's a better call to make them an interface.
