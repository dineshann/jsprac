// var
var a = "Dinesh "
var b = "Srilatha"

console.log(a+b)

// Function
function abc() {                            // ! Function Syntax

    console.log("Hello")                    // ! Say what need to be done. Create your function

}                                           // ! Function Syntax
abc()                                       // ! Calling Function

function iPhone() {
    console.log("This is iPhone")
}
function oppo() {
    console.log("This is Oppo")
}
function redmi() {
    console.log("This is Redmi")
}
function nokia() {
    console.log("This is Nokia")
}

iPhone()
nokia()
oppo()
redmi()

// Add Function
var aa = 10
var bb = 20

function add() {
    console.log(aa+bb)
}

add()

// Fav
var fa = "Kamal"
var fp = "Dhoni"
var fm = "Anbe Sivam"

console.log("Favourite Movie: "+fm)

function fav() {
    console.log("Favourite Actor:"+fa)
    console.log("Favourite Player:"+fp)
    console.log("Favourite Movie:"+fm)
}

fav()

// Parameters
function adding(e,f) {
    console.log(e+f)
}
adding(3,2)

function area(l,b) {
    var m = l*b
    console.log(m + " sqft")
}

let length = 40
let breath = 50

area(length,breath)

// Return
function xyz() {
    return "Return Value" 
}

let f = xyz()

console.log(f)

// if else
var i = true
if (i) {
    console.log("This is True")
} else {
    console.log("This is False")
}

let signal = "o"
if (signal == "r") {
    console.log("Stop")
}
if (signal == "o") {
    console.log("Get Reddy")
}
if (signal == "g") {
    console.log("Go")
}

var s = 65
if (s<=40) {
    console.log("Need to perform well")
} else if(s>40 && s<=70) {
    console.log("Good")
} else if (s>70) {
    console.log("Great")
}