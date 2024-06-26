/** JavaScript Function **/ 

// Function creating Syntax
function abc() {
    console.log("Hello World!")
}
// Created function calling function
abc()

function myNames() {
    console.log("My Function is working Dinesh")
}
myNames()

function iphone() {
    console.log("This is iPhone")
}
function redmi() {
    console.log("This is Redmi phone")
}
function xiomi() {
    console.log("This is Xiomi Phone")
}
function samsung() {
    console.log("This is the samsung phone")
}

function oppo() {
    console.log("This is oppo phone")
}

iphone()
iphone()
redmi()
xiomi()
samsung()
oppo()

/* Exercise */ 
var a = 10
var b = 20;

function add() {
    console.log(a + b)
}
add()

var factor = "Vijay"
var fplayer = "Dinesh"
var fmovie = "Beast"

function Favourite() {
    console.log("Favourite Actor: "+factor)
    console.log("Favourite Player: "+fplayer)
    console.log("Favourite Movie: "+fmovie)
}

Favourite()
Favourite()

/** JavaScript Parameters **/ 
function add(a,b) {
    console.log(a+b)
}
add(10,20)

// function area(length,breadth) {
//     console.log(length*breadth)
// }
// area(30,50)


function area(l,b) {
    var a=l*b
    console.log("Area is:"+a)
}

var length = 10
var breadth = 20

area(length,breadth)


function myName() {
    return "Jhon"
}

var a=myName()
console.log(a)