// Operators and Expressions

console.log("Operators in JS")
// Arithmetic Operators
let a = 45;
let b = 5;
console.log("a + b = " , a+b)
console.log("a - b = " , a-b)
console.log("a * b = " , a*b)
console.log("a / b = " , a/b)
console.log("a ** b = " , a**b)
console.log("a % b = " , a%b)

console.log("++a = " , ++a)
console.log("a++ = " , a++)
console.log("--a = " , --a)
console.log("a-- = " , a--)
console.log("a = " , a)
console.log("a-- = " , a--)

// Assignment Operators
let c = 8;
c += 5 // same as assignment = assignment + 5
console.log("c is now =",c)
c -=5 // same as assignment = assignment - 5
console.log("c is now =",c)
c *=5 // same as assignment = assignment * 5
console.log("c is now =",c) // same as assignment = assignment * 5
c /=5 // same as assignment = assignment / 5
console.log("c is now =",c)

// Comparison Operators
let comp1 = 6;
let comp2 = 6;
console.log("comp1==comp2", comp1==comp2) 
console.log("comp1!=comp2", comp1!=comp2) 
console.log("comp1===comp2", comp1===comp2) 
console.log("comp1!==comp2", comp1!==comp2) 
console.log("comp1>comp2", comp1>comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)