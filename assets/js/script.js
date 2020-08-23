var startBtn = document.getElementById('start');
var timerEl = document.getElementById('timer');
var score = 0;
var quizDivEL= document.querySelector("#quiz")
var ulItemEL = document.createElement("ul");
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
    ulItemEL.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {

        var question = questions[questionIndex].title;
        var answer = questions[questionIndex].answers;

        quizDivEL.innerHTML ="<h2 class = 'question'>"+ question + "</h2>";
    }
    
    answer.forEach(function (Item) {
        var listItemEL = document.createElement("li");
        listItemEL.textContent = Item;
        quizDivEL.appendChild(ulItemEL);
        ulItemEL.appendChild(listItemEL);
        listItemEL.addEventListener("click", (correct));
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
    ulItemEL.innerHTML = "";
    var listItemEL = document.createElement("li");
    quizDivEL.innerHTML = "<h2> Your final score was " + score + "</h2>";
    
    quizDivEL.appendChild(listItemEL);
    



}




startBtn.onclick = startQuiz;