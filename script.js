//Create ids through query selector 
var timeEL = document.querySelector ("#timer");
var quizContainer = document.querySelector('#quiz');
let track = 0; 
let correct = 0;
var question 
var choice 
var status 
var choices 
var answerA 
var answerB 
var answerC 
var answerD 



//Create arrays containing the questions and answers
let questions = [
    {
    questionChoices: ["Which city does the baseball team Dodgers play in?","Los Angeles", "San Francisco", "Las Vegas", "Oakland", 'a'],
    },
    {
    questionChoices: ["Which Basketball team won the NBA Finals in 2018?","Warrios", "Buck", "Celtics", "Raptors","D"],
    },
    {
    questionChoices: ["Who was the MVP in the NFL's 2018 season?","Antonio Brown", "Tom Brady", "Patrick Mahomes", "Kobe Bryant","C"],
    },
    {
    questionChoices: ["Who has won the Champions Leauge the most?","Barcelona", "Real Madrid", "Bayern FC", "BVB Drotmund","B"],
    },
    {
    questionChoices: ["Who won the Halo 5 Championship in 2017","Tox", "Optic Gaming", "Envy", "Splyce",'d'],
    },
];
//make your timer starts at 75 seconds
//Create a function so when you click on the start button, it starts the quiz
secondsL = 75;
const startBtn = document.querySelector("#start");
startBtn.addEventListener('click',startQuiz)

function startQuiz(){
     console.log('Started!');
    startBtn.style.display ="none";
    quizContainer.style.display = "block";
    
    var timerInterval = setInterval (function(){
        secondsL--;
        timeEL.textContent = secondsL
        setInterval(timerInterval);
        if(secondsL === 0)
        clearInterval(timerInterval);
        if(secondsL === 75){}
        
    },1000);
}
//return the onject refernece for the Id string
function _(x) {
    return document.getElementById(x);
}
//Render the questions
function renderQuestion(){
    quizContainer = _("quiz");
    ("status").innerHTML = "Question" + (track+1) + "of"+ questions.length;
    question = questions[track[0]];
    answerA = questions [track[1]];
    answerB = questions [track[2]];
    answerC = questions [track[3]];
    answerD = questions [track[4]];

    quizContainer.innerHTML = "<h2>"+question+'</h2>';
    quizContainer.innerHTML += "<input type ='radio' name = 'choices' value = 'A'> "+answerA+"<br>";
    quizContainer.innerHTML += "<input type ='radio' name = 'choices' value = 'B'> "+answerB+"<br>";
    quizContainer.innerHTML += "<input type ='radio' name = 'choices' value = 'C'> "+answerC+"<br>";
    quizContainer.innerHTML += "<input type ='radio' name = 'choices' value = 'D'> "+answerD+"<br><br>";
    //create submit button
    quizContainer.innerHTML += "<button onclick = 'checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
    alert("Dodgers lose in the playoffs")
}
window.addEventListener('load',renderQuestion,false);

//Show a list of highscores with a option to clear the current score.
//make a conditional statement so when the user gets the correct answer it will go to the next question.
//When the quiz is over have the user submit intials to local storage
//Show a list of highscores with a option to clear the current score.