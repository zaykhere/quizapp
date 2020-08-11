//Question-1
function check() {
    var score = 0
    var q1answer_1 = document.getElementById('q1-a')
    var q1answer_2 = document.getElementById('q1-b')
    var q1right_one1 =document.getElementById('q1-c')
    var q1answer_4 = document.getElementById('q1-d')
    if (q1right_one1.checked == true ) {
        score++
        alert("Result Of Question 1: Right!")
    }
    else {
        alert("Result Of Question 1: Wrong!")
    }
        


// Question-2
var q2answer_1 = document.getElementById('q2-a')
var q2answer_1 = document.getElementById('q2-b')
var q2answer_1 = document.getElementById('q2-c')
var q2right_one2 = document.getElementById('q2-d')
if (q2right_one2.checked == true) {
    score++
    alert("Result Of Question 2: Right!")
}
else {
    alert("Result Of Question 2: Wrong!")
}


// Question-3
var q3answer_1 = document.getElementById('q3-a')
var q3right_one3 = document.getElementById('q3-b')
var q3answer_3 = document.getElementById('q3-c')
var q3answer_4 = document.getElementById('q3-d')
if (q3right_one3.checked == true) {
    score++
    alert("Result Of Question 3: Right!")
}
else {
    alert("Result Of Question 3: Right!")
}

// Question-4
var q4answer_1 = document.getElementById('q4-a')
var q4answer_2 = document.getElementById('q4-b')
var q4right_one4 = document.getElementById('q4-c')
var q4answer_4 = document.getElementById('q4-d')
if (q4right_one4.checked == true) {
    score++
    alert("Result Of Question 4: Right!")
}
else {
    alert("Result Of Question 4: Right!")
}


// Question-5   
var q5answer_1 = document.getElementById('q5-a')
var q5right_one5 = document.getElementById('q5-b')
var q5answer_3 = document.getElementById('q5-c')
var q5answer_4 = document.getElementById('q5-d')
if (q5right_one5.checked == true) {
    score++
    alert("Result Of Question 5: Right!")
}
else {
    alert("Result Of Question 5: Right!")
}
alert("YOUR SCORE IS: " + score++)
}