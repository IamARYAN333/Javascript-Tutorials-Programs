// Array Loops 

let num = [3, 54, 10, 15, 14]
/* for(let i = 0; i<num.length; i++)
{
    console.log(num[i]);
} */

// ForEach Loop
num.forEach((element)=>{
    console.log(element*element)
})

// Array.from
let name = "ARYAN"
let arr = Array.from(name) // makes Array from String or HTML collections
console.log(arr)

// for......of
for(let item of num){
    console.log(item)
}

// For....in
for(let i in num){
    console.log(num[i])
}