/** JavaScript Parameters **/ 
function add(a,b) {                         // (a,b) is parameters
    console.log(a*b)
}
add(4,4)                                    // (4,4) passing the value to the parameter calling func


/* Exercise */ 
// function area(l,b) {
//     console.log(l*b+" Sqft")
// }
// area(50,70)

function area(l,b) {
    var a = l * b
    console.log("This area is "+a+"sqft")
}

var length = 50
var breadth = 70

area (length, breadth)