/** JavaScript Random **/ 
/*
    Guess the number
*/ 

var a = Math.random(3.88)

console.log(a*100)


//Selecting input box, paragraph
var guessnumber = document.getElementById("guessnumber")
var result = document.getElementById("result")
var score = document.getElementById("score")
var randomnumber = Math.floor(Math.random()*10)+1

var totalscore = 10

function check() {
    var enterednember = guessnumber.value
    if(randomnumber == enterednember) {
        result.textContent = "Right"
        alert("YOU WON")
        console.log("Right")
    } else {
        totalscore = totalscore - 1
        score.textContent = "Score:"+totalscore
        result.textContent = "Wrong"
        console.log("Wrong")
    }
}

console.log(guessnumber.value)
console.log(randomnumber)