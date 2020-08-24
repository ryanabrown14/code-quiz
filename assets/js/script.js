var startBtn = document.getElementById('start');
var scoreBtn = document.getElementById('high-score')
var timerEl = document.getElementById('timer');
var score = 0;
var quizDivEL= document.querySelector("#quiz")
var ulItemEL = document.createElement("ul");
var questionIndex = 0;
var timeLeft = 75;



var questions = [{
    title: "Commonly used data type DO NOT include:",
    answers:  ["Strings","Booleance","Alerts", "Numbers"],
    correct: "Alerts"
},
{
    title: "The condition in an if/else statement is enclosed within:",
    answers: ["Quotes","Curly Brackets","Parentheses", "Square Brackets"],
    correct: "Parentheses"
},
{
    title: "Arrays in JavaScript can be used to store:",
    answers: ["Numbers and Strings","Others Arrays","Booleances", "All of the Above"],
    correct : "All of the Above"   
},
{
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript","Terminal/Bash","Alerts", "Console.log"],
    correct: "Console.log" 
},
{
    title: "String values must be enclosed within _____ when being assigned to variables ",
    answers: ["Commas","Curly brackets","Quotes","Parentheses"],
    correct: "Quotes"  
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
        endGame();
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
        listItemEL.className = "hover-color"
        listItemEL.id = "hover"
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
     timeLeft = timeLeft - 10;
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
    


    if (timeLeft >= 0){
        clearInterval(timeLeft);
    var listItemEL = document.createElement("h2");
    
    quizDivEL.innerHTML = "<h2> Your final score was " + timeLeft + "</h2>";
    
    quizDivEL.appendChild(listItemEL);
    }

    var h3EL = document.createElement("h3");
    h3EL.setAttribute("id","h3EL");
    h3EL.textContent = "enter your initials:";

    quizDivEL.appendChild(h3EL);

    var inputEL = document.createElement("input");
    inputEL.setAttribute("type", "text");
    inputEL.setAttribute("id","name");
    inputEL.textContent = "";
    quizDivEL.appendChild(inputEL);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("id","submit");
    submitBtn.textContent = "submit";

    quizDivEL.appendChild(submitBtn);

    submitBtn.addEventListener("click", function (){
        var name = inputEL.value;
        if (!name){
            window.alert("enter a name")

        }
            
            saveScore()
 
        
        
            
                

    });

}
var saveScore = function(){
 
    if (timeLeft > localStorage.getItem("highscore")){
    localStorage.setItem("highscore", timeLeft);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    }

    
}

function highScore (){
    window.alert("The highscore is " +  localStorage.getItem("highscore"));
}







startBtn.addEventListener("click", startQuiz);
scoreBtn.addEventListener("click", highScore)
