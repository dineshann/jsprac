// if else condition
if(true) { 
    console.log("it's ture")
} else {
    console.log("It's false")
}

var rain = false
if (rain) {
    console.log("take an umrella")
} else {
    console.log("Enjoy the light")
}

var homework = true
if(homework) {
    console.log("Great Job")
} else {
    console.log("Finish your homework before playing")
}

var cookies = false
if(cookies) {
    console.log("Would you like cookie?")
} else {
    console.log("Time to bake more cookies")
}

var teeth = false
if(teeth) {
    console.log("Your teeth are clean")
} else {
    console.log("Go brush your teeth now")
}

var birthday = true
if(birthday) {
    console.log("Happy birthday! Enjoy your special day!")
} else {
    console.log("Have a great day")
}

// Logical AND
console.log(true && true);              // true
console.log(true && false);             // false

// Logical OR
console.log(true || false);             // true

//Logical NOT
console.log(!false);                     // false

var color = "red"

if(color == "red") {
    console.log("STOP")
}

if(color == "yellow") {
    console.log("Get Ready")
}

if (color == "green") {
    console.log("GO")
}

var season = "winter"
if (season == "spring") {
    console.log("Enjoy the blooming flowers")
}
if (season == "summer") {
    console.log("Have fun in the sun")
}
if(season == "autumn") {
    console.log("Admire the colorful leaves")
}

if(season == "winter") {
    console.log("Bundle up and stay warm")
}

var score = 51 

if(score <= 50) {
    console.log("You need to improve")
}
else if(score>50 && score<=70) {
    console.log("Good Job")
}
else if(score>70) {
    console.log("Excellent Performance")
}

var number = 12313243254345
if(number % 2 == 0) {
    console.log("This number is even")
} 
else if(number){
    console.log("The number is odd")
}

var chart = "z"
if (chart == "a" || chart == "e" || chart == "i" || chart == "o" || chart == "u") {
    console.log("it's a vowel.")
} 
else if(chart) {
    console.log("It's a consonant")
}