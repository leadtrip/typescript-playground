/** type aliases are used to provide names to type literals, a type literal looks like...
 {
    x: number
    y: number
 }
**/

// Primitive type
type SanitizedInput = string;
type MissingNo = 404;

// Object literal type
type Loc = {
    x: number;
    y: number;
};

// Tuple type - special case array with known types at specific index
type Data = [
    location: Loc,
    timestamp: string
]

// Union type - one of many options
type Size = 'small' | 'medium' | 'large'

// Intersection type - merge existing types
type Location2 = { x: number } & { y: number }

// Type indexing - extract and name from a subset of a type
type HttpResp = { data: { name: 'bob', age: 39 } }
type RespData = HttpResp['data']

// Function type ============================================
type MyAddFunc = (a: number, b: number) => number;      // define the function return type

const myFunc: MyAddFunc = function (a, b) {     // use the function return type
    return a + b;
}

const ten = myFunc(5, 5);       // call the function
// ==========================================================