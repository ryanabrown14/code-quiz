var startBtn = document.getElementById('start');
var timerEl = document.getElementById('timer');
var score = 0;

var questions = [{
    title: "Commonly used data type Do Not include:---",
    answers:  ["strings","booleance","alerts", "numbers"],
    correct: "alerts"
},
{
    title: "The condition in an if/else statement is enclosed within:---",
    answers: ["quotes","Curly brackets","parentheses", "square brackets"],
    correct: "parentheses"
},
{
    title: "Arrays in JavaScript can be used to store:---",
    answers: ["numbers and strings","others Arrays","booleances", "all of the above"],
    correct : "all of the above"   
},
{
    title: "A very useful tool used during development and debugging for printing content to the debugger is:---",
    answers: ["JavaScript","terminal/bash","alerts", "console.log"],
    correct: "console.log" 
},
{
    title: "String values must be enclosed within --- when being assigned to variables ",
    answers: ["commas","curly brackets","quotes","parentheses"],
    correct: "quotes"  
}
]


function startQuiz(){
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;} 
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;}
       else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        endGame();}
      
    }, 1000);



}

function quiz() {
    for (var i = 0; i < questions.length; i++)
}






startBtn.onclick = startQuiz;