// Map,Filter and Reduce in JS

// Map method
let arr = [45, 23, 21]
//console.log(arr)
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a) // [45,24,23]

// Filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let b = arr2.filter((a) => {
    return a < 10
})
console.log(b, arr2)

// Reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
    return h1 + h2
}
let c = arr3.reduce(reduce_func)
console.log(c, arr3)

// let c = arr3.reduce((h1,h2)=>{
//     return h1 + h2
// })


/*Note: Filter or Map - returns an array
        Reduce - returns a value */