// Strings methods in JS

let name  = "Harry"
console.log(name.length)

console.log(name.toUpperCase()) // function prints letters in upper case
console.log(name.toLowerCase()) // function prints letters in lower case
console.log(name.slice(2,4)) // function prints letter between 2 and 4 index
console.log(name.slice(2)) // function prints letter after 2nd index
console.log(name.replace("Har","Per"))

let friend = "Naman"
console.log(name.concat(" is a friend of ", friend, "Ok")) // function joins two Strings
let friend2 = "     Meena       "
console.log(friend2)
console.log(friend2.trim()) // function removes white spaces from String

let fr = "Shivika" + "Harry" + "Raman"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4] = "o" This is not possible
// console.log(fr[4])
for(let i = 0;i<fr.length;i++)
{
    console.log(fr)
}
