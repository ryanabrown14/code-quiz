var startBtn = document.getElementById('start');
var timerEl = document.getElementById('timer');
var score = 0;
var quizDivEL= document.querySelector("#quiz")
var ulCreate = document.createElement("ul");
var liCreate = document.createElement("li");
var questionIndex = 0;
var timeLeft = 75;

var questions = [{
    title: "Commonly used data type Do Not include:",
    answers:  ["strings","booleance","alerts", "numbers"],
    correct: "alerts"
},
{
    title: "The condition in an if/else statement is enclosed within:",
    answers: ["quotes","Curly brackets","parentheses", "square brackets"],
    correct: "parentheses"
},
{
    title: "Arrays in JavaScript can be used to store:",
    answers: ["numbers and strings","others Arrays","booleances", "all of the above"],
    correct : "all of the above"   
},
{
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript","terminal/bash","alerts", "console.log"],
    correct: "console.log" 
},
{
    title: "String values must be enclosed within _____ when being assigned to variables ",
    answers: ["commas","curly brackets","quotes","parentheses"],
    correct: "quotes"  
}
]


function startQuiz(){
    
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
        //endGame();
    }
      
    }, 1000);
quiz(questionIndex);


}

function quiz(questionIndex) {
    quizDivEL.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {

        var question = questions[questionIndex].title;
        var answer = questions[questionIndex].answers;

        quizDivEL.textContent = question;
    }
    
    answer.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quizDivEL.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (correct));
    })
}
function correct (click){
 var ans = click.target
 if (ans.textContent === questions[questionIndex].correct) {
     window.alert("Correct!");
     
 }
 else {
     timeLeft = timeLeft - 5;
     window.alert("Sorry, that is incorrect.")
     
 }
 questionIndex = questionIndex + 1;
 if (questionIndex < questions.length) {quiz(questionIndex);}
 else (
     endGame()
 )
}


function endGame(){
    window.alert("The game is over")
    quizDivEL.innerHTML = "";
    ulCreate.innerHTML = "";



}




startBtn.onclick = startQuiz;