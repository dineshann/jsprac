/** JavaScript If else **/
/*
    if(condition){
        // Code to be executed if the condition is true
    } else {
        // Code to be executed if the condition is false
    }

    if (true) {
        console.log("If is working")
    } else {
        console.log("else is working")
    }
 */

if(false) {
    console.log("It's True")
} else {
    console.log("It's False")
}


var rain = true

if (rain) {
    console.log("Take an umbrella.")
} else {
    console.log("Enjoy the sunshine.")
}


// Exercise 1
var homework = true
if (homework) {
    console.log("Great Job!")
} else {
    console.log("Finish your homework before playing.")
}

// Exercise 2
var cookies = true
if (cookies) {
    console.log("Would you like a cookie?")
} else {
    console.log("Time to bake more cookies.")
}

// Exercise 3
var teeth = true
if (teeth) {
    console.log("Your teeth are clean.")
} else {
    console.log("Go brush your teeth now.")
}

// Exercise 4
var birthday = true
if (birthday) {
    console.log("Happy birthday! Enjoy your special day!")
} else {
    console.log("Have a great day!")
}

var soulmate = true
if (soulmate) {
    console.log("I love my life <3 Your my everything")
} else {
    console.log("I hate you d Rakshasi!")
}


/* Logical */
// ! AND(&&) operator
console.log(true && false && true)                  
console.log(true && true)  
console.log(true && false)

// ! OR(||)  operator
console.log(true || false || false)

// ! NOT(!) operator
console.log(!true)


// ! if statement
var color = "green"
if (color == "red") {
    console.log("STOP")
}
if( color == "yellow") {
    console.log("Get Ready")
}
if (color == "green") {
    console.log("Go")
}

// Exercise
var season = "autumn"
if (season == "spring") {
    console.log("Enjoy the blooming flowers.")
}
if (season == "summer") {
    console.log("Have fun in the sun.")
}
if (season == "autumn") {
    console.log("Admire the colorful leaves.")
}
if (season == "winter") {
    console.log("Bundle up and stay warm.")
}

// ! if else statement
var score = 70
if (score<=50) {
    console.log("You need to improve.")
}
else if (score>50 && score<=70) {
    console.log("Good Job!")
}
else if (score>70) {
    console.log("Excellent Performance")
}

// Exercise
var number = 11
if (number & 1==1) {
    console.log("The number is odd")
} else {
    console.log("The number is even")
}

var char = "e"
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    console.log("It's a vowel.")
} else {
    console.log("It's a consonant.")
}
