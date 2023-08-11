// primitive types ==============================================
let str = "Hello"
let num = 483
let boo = false
let nul = null
let und = undefined

// using const creates a literal type, it cannot be changed, it's literally whatever it's created with & that's that
const six = 6
const msg = 'done'

// type inference - we've not used any annotations above, in all cases the variable type has been inferred by the assigned value
// str = 99; we can't do this because TS has inferred the type to be string
// str.toBananaCase(); TS knows the shape of an object so prevents us from calling no-existing methods on them

// any
let bongo;  // bongo is of type any and can be reassigned to anything without error ==============================================
bongo = 'cheese';  // bongo is now type string
bongo = 8123;   // now number

// Adding a type annotation ensures that a variable can only ever be assigned to that type ==============================================
let firstName: string;
firstName = 'bob';

let dob: Date
dob = new Date()

