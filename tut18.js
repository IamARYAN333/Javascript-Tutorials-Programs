// Console Object in JS

console.log("log")
console.info("info")
console.warn("warn") // it gives warning
console.error("err") // used to show errors
console.assert("err" != false) // it checks assertive statements
console.assert(5 > 55)

console.time("forLoop")
for(let i = 0; i<5; i++){
    console.log(i)
}
console.timeEnd("forLoop")

console.time("WhileLoop")
let i = 0
while(i<5){
    console.log(i)
    i++
}
console.timeEnd("WhileLoop") // timeEnd shows the time require to run