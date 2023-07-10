// Array methods in JS

let num = [1, 2, 3, 34, 80]
let num2 = [11, 12, 13, 14, 15]

/* let b = num.toString() // converts b to String
console.log(b, typeof b) */

/* let c = num.join(" _ ")
console.log(c,typeof c) */

/* let r = num.pop() // removes the last element and return popped value
console.log(num,r) */

/* let r = num.push(56) // push add element to last and returns the new array length
console.log(num,r) */

/* let r = num.shift() // removes first element and return value of it
console.log(r, num) */

/* let r = num.unshift(78) // add first element and return length of array
console.log(r, num) */

/* console.log(num.length)
delete num[0]
console.log(num)
console.log(num.length) */

let newArray = num.concat(num2) // concat merges two or more arrays
console.log(newArray)

// sort method
let compare = (a,b)=>{
    return a-b
}
let List = [551, 25, 45, 65, 10, 84]
List.sort(compare) 
// List.reverse() // reverse the array
console.log(List) 

// Splice and slice
let number = [15, 65, 92, 43, 52, 55, 84, 12, 75]
let deletedValues = number.splice(2, 3, 102, 103, 104)
// console.log(number)
// console.log(deletedValues) 

let newnumber = number.slice(3, 5) // slice creates a new array and cannot modify original array
console.log(newnumber)