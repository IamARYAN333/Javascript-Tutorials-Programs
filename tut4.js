// Primitives and Objects
// nn bb ss undefined -- Primitives in JS


let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3")
let e = "Harry"; 
let f = Symbol("I am a nice symbol ");
let g
console.log(a, b, c, d, e, f, g)
console.log(typeof c)

// Non Primitive Data Types -- Objects in JS

const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish":67,
    "Rohan":undefined,
}
console.log(item["Lovish"])