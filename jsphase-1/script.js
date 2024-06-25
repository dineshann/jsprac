/** JavaScript Variables **/
// Variables are containers for storing Information or Data
// JavaScript Variables can be declared in 4 ways
    // Using var Keyword - function scope or global scope
    // Using let Keyword - block scope
    // Using const Keyword - block scope

    // var - accessible outside the block | let & const can't

var a = 10;
var b = 20;
let e = 50;
const x = 1000;

e = 300;
console.log(e);

console.log(a+b+e+x);

{
    let c = 10;
    var d = 40;
    const y = 100;
}

// console.log(c);
console.log(d);
// console.log(y);

/* Exercise 1 */
var price = 700;
var product = "iPhone20";
var tax = 77;
console.log(product);

var total=price+tax;
console.log(total);

/* Exercise 2 */ 
var FruitName = "Mango";
var count = 50;
var price = 100;
var total = count * price;

console.log(FruitName);
console.log("Total Price", total);


/** JavaScript Operators **/
let m = 5;
let n = m++;

console.log(n);