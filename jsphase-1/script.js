/** JavaScript Variables **/
// Variables are containers for storing Information or Data
// JavaScript Variables can be declared in 4 ways
    // Using Var Keyword - function scope or global scope

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