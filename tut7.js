// Conditional Expressions
const prompt = require("prompt-sync")();
let a = prompt("Hey whats your age?");
console.log(a);
a = Number.parseInt(a); // Convert the string to a Number
if(a<0)
{
    console.error("This is a invalid age")
    // alert("This is a valid age"); // alert is browser window command so we use console.log or console.error
}
else if(a<9){
    console.log("This is a Kid and you cannot even think of driving");
}
else if(a<18 && a>=9)
{
    console.log("You are a kid and you can think of driving after 18")
}
else{
    console.log("You are above 18 now u can drive")
}
console.log("Done")