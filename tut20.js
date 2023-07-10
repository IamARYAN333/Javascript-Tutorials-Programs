/* let number = 5; 
let string = '';
for(let i = 1; i <= number; i++){
  for(let j = 1; j <= i; j++){
    string += '*';
  }
  string += "\n";
}
console.log(string); */

/* let n = 4
let count = 1;
let string = "";
for(let i = 1;i<=n;i++)
{
  for(let j = 1;j<=i;j++)
  {
    string += count + " ";
    count++;
  }
  string += "\n";
} 
console.log(string," "); */

/* var n = 5;
let i = 1;
while (i <= n) {
  // spaces
  var space = n - i;
  while (space) {
    console.log(" ");
    space = space - 1;
  }
  // Stars
  let j = 1;
  while (j <= i) {
    console.log("*");
    j = j + 1;
  }
  console.log("\n");
  i = i + 1;
} */

/*let n = 5;
// External loop
for (let i = 1; i <= n; i++) {
 // printing spaces
 for (let j = 1; j <= n - i; j++) {
   console.log(' ')
 }
 // printing stars
 for (let k = 0; k < 2 * i - 1; k++) {
   console.log('*')
 }
 console.log();
} */

const prompt = require('prompt-sync')()

/* function Square(x) {
  return x * x;
}

function Cube(x) {
  return x * x * x;
}

let x = prompt("Enter x")
let y = prompt("Enter y")
console.log("Square of x is ", Square(x))
console.log("Cube of y is ", Cube(y)) */

/* function power(base, exponent) {
  var result = 1;
  if(exponent == undefined || exponent == 0) {
  }
  for(var i=1; i<=exponent; i++) {
    result = result * base;
  }
  return result;
}
let x = prompt("Enter the base")
let y = prompt("Enter the exponent")
console.log(power(x,y)) */


/* function sum(x,y){
  return (x + y);
}

function subtract(x,y){
  return x - y;
}

function multiply(x,y){
  return x * y;
}

function divide(x,y){
  return x % y;
} 

 var a = prompt("Enter first number");
var b = prompt("Enter second number"); 

//  let a = 20 , b = 10;

console.log("Sum of both numbers are", sum(a,b));
console.log("Difference of both numbers are", subtract(a,b));
console.log("Product of both numbers are", multiply(a,b));
console.log("divison of both numbers are", divide(a,b)); 
*/

/* function AP(a, d, n)
    {
        let curr_term;
        curr_term=a;
        for (let i = 1; i <= n; i++)
        {   console.log(curr_term + " ");
            curr_term =curr_term + d;
       
        }
    }

    // First term
    let a = 6; 
       
    // Common difference
    let d = 5; 
       
    // N th term to be find
    let n = 5;
    
    AP(a, d, n);
*/

/* let x  = new Number, y = 3 , z = 4;
console.log(x instanceof Number);
console.log(typeof y); */

/* function GP(a1, r, n) {
  let an; 
  for (let i = 0; i < n; i++) {
    an = a1 * Math.pow(r,i);
    console.log(an + " ");
  }
}

let a1 = 1 , r = 2, n = 5;
GP(a1, r, n); */

// let x = 18, y = 9
// console.log(x**2)
// console.log(x??y)
// console.log(x&y)
// console.log(x|y)
// console.log(x^y)
// console.log(~x)
// console.log(x<<2)
// console.log(x>>2)
// console.log(x>>>)

/* let str = "aa";
 let l = 0
 let h = str.length - 1;
 while(h>l)
 {
  if(str[l++] != str[h--]){
    console.log("str is not a palindrome", str);
    return 0;
  }
  console.log("str is a palindrome ",str);
  return 0;
 } */

// const regex = /[%^123]/g
// const str = '12 3asada  d'
// console.log(str.replaceAll(/\s/g,''))
// console.log(str.replace(regex,''));
// console.log (str.replaceAll('^','').replaceAll('%','').replaceAll('1','').replaceAll('2','').replaceAll('3',''));


/* 1. const arr = [10,70,50,60,70,50,60,80,15,55,22];
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));  */

/* 2. const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,0,0,0,0,0, 2, 3, 3];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count); //  {1: 3, 2: 1, 3: 2} 
*/

/*  function mergeArray(arr1,arr2)
{
  const arr3 =  arr1.concat(arr2)
  return arr3
}

function Ascending(a, b) {
  return a - b
}

function Descending(a, b) {
  return b - a
}

const arr1 = [10,20,30,40,50]
const arr2 = [5,4,8,9,1,2]
const arr3 = console.log((mergeArray(arr1,arr2)).sort()); 
console.log((mergeArray(arr1,arr2)).sort(Ascending)); 
console.log((mergeArray(arr1,arr2)).sort(Descending)); */ 

/* function isPrime(n)
{
	if(n == 1 || n == 0) return false;
	
	for(var i = 2; i < n; i++)
	{
		if(n % i == 0) return false;
	}
	return true;
}
var N = 100;

for(var i = 1; i <= N; i++)
{
	if(isPrime(i)) {
     console.log(i);
	}
} */

// Variable Declarations in JS

/* var -- Globally  scope
let -- Block scope 
const -- Block scope*/

/* console.log(x === undefined); // true
var x = 3;

(function() {
  console.log(x); // undefined
  var x = 'local value';
})();
*/
/* var x;
console.log(x === undefined); // true
x = 3;

(function() {
  var x;
  console.log(x); // undefined
  x = 'local value';
})(); */

/* let person = {name:"asdasd" , age:15 , color:'red'}
 console.log(person) */
//  console.log(person.name)
/* let a = "Aruan \"
 console.log(a) */

/* let a = prompt("Enter a Number");
a =  parseInt(a);
console.log(a) 
console.log(typeof(a)) */

const sound = new Map();
sound.set("dog","bark");
sound.set("cat","meow");
sound.set("elephant","toot");
// sound.clear();
console.log(sound.size);
console.log(sound.get("dog"));
console.log(sound.has("dog"));
sound.delete("dog");       