// Arrays in JS

let marks_class12 = [10,20,30,40]
console.log(marks_class12[0])
console.log(marks_class12[1])
console.log(marks_class12[2])
console.log(marks_class12[3])
console.log(marks_class12[4]) // will be undefined because index 4 does not exist
console.log("The length of marks_class12 is",marks_class12.length)
marks_class12[0] = 89 // Changing the value at index 0
marks_class12[4] = 50 // Adding a value at index 4
console.log(marks_class12)
console.log(typeof marks_class12)

for(let i = 0; i<marks_class12.length;i++)
{
    console.log(marks_class12)
}