// Functions

function OneplusAvg(x, y) {
    console.log("Done")
    return  1 + (x+y)/2
    // return  Math.round(1 + (x+y)/2) This command will return the value after roundoff 

}
// This type of functions known as Arrow Functions
const hello = () => {
    console.log("Hey how are you.I am fine")
    return "hi"
}

const sum = (p, q) => {
    return p + q
}

let a = 1;
let b = 2;
let c = 3;
let v = hello();
console.log("One plus average of a and b is ", OneplusAvg(a, b))
console.log("One plus average of b and c is ", OneplusAvg(b, c))
console.log("One plus average of a and c is ", OneplusAvg(a, c))
console.log(sum(9,7))
hello();  
console.log(v)