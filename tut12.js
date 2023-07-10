// Strings in JS

let name = "Harry"
console.log(name)
console.log(name.length)

// Template Literals
// It uses backtics(`),'.""
// we can insert variables directly in Template literal.This is called String Interpolation

let boy1 = "Pramod"
let boy2 = "Nikhil"
// we have to print (Nikhil is a friend of Pramod)
let sentence = `${boy2} is "a" friend of ${boy1}`
console.log(sentence)

// Escape Sequence Characters
let fruit = 'Bana\nna'
// let fruit = 'Bana\rna'
// let fruit = 'Bana\tna'
console.log(fruit)