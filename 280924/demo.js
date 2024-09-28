// Function Calling
function xyz(){
    console.log("Function is working now")
}
xyz()



function samsung() {
    console.log("this is samsung")
}

function iphone() {
    console.log("this is iphone")
}

function xiomi() {
    console.log("this is xiomi")
}

xiomi()
samsung()
iphone()
xiomi()



var a = 33
var b = 23

function add() {
    console.log(a+b)
}
add()



var fActor = "Srilatha"
var fPlayer = "Srishti"
var fMovie = "Kadhal"

function fav() {
    console.log("Favourite Actor:", fActor)
    console.log("Favourite Player:", fPlayer)
    console.log("Favourite Movie:", fMovie)
}

fav()
fav()

// Parameters
function area(l,b) {
    var a = l*b
    console.log("Area is " + a)
}

area(12,6)



// Return type
function myname() {
    return "Dinesh"
}
var d = myname()
console.log(d)

function addition(aa,bb) {
    return aa+bb
}
var total = addition(10,20) 
console.log(total)