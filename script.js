//Create ids through query selector 
var timeEL = document.querySelector ("#timer");
var quizContainer = document.querySelector('#quiz');
let track = 0; 
let points = 0;
var question 
var choice 
var status 
var choices 
var answerA 
var answerB 
var answerC 
var answerD 
var submitI =document.getElementById('#submit');
var instructionsD= document.querySelector('.instruct')
var count = localStorage.getItem("points");
var instructD= document.querySelector('.instructD')
//Create arrays containing the questions and answers
let questions = [
    
   ["Which city does the baseball team Dodgers play in?","Los Angeles", "San Francisco", "Las Vegas", "Oakland", 'A'],
    
   ["Which Basketball team won the NBA Finals in 2018?","Warrios", "Buck", "Celtics", "Raptors","D"],
 
   ["Who was the MVP in the NFL's 2018 season?","Antonio Brown", "Tom Brady", "Patrick Mahomes", "Kobe Bryant","C"],
    
   ["Who has won the Champions Leauge the most?","Barcelona", "Real Madrid", "Bayern FC", "BVB Drotmund","B"],

   ["Who won the Halo 5 Championship in 2017","Tox", "Optic Gaming", "Envy", "Splyce",'D'],

];


//make your timer starts at 75 seconds
//Create a function so when you click on the start button, it starts the quiz
secondsL = 75;
const startBtn = document.querySelector("#start");
startBtn.addEventListener('click',startQuiz)
function startQuiz(){
    
    instructionsD.style.display ="none";
    startBtn.style.display ="none";
    quizContainer.style.display = "block";
    instructD.style.display='none';
    

    
    var timerInterval = setInterval (function(){
        secondsL--;
        timeEL.textContent = secondsL
        setInterval(timerInterval);
        if(secondsL === 0)
        clearInterval(timerInterval)
        
        if(secondsL === 75){}
        if(track >= questions.length){
            clearTimeout(timerInterval);
        }
    },1000);
    
}
//return the object refernece for the Id string
function _(x) {
    return document.getElementById(x);
}

//Render the questions
function renderQuestion(){
    quizContainer = _("quiz");
    emailE = _('email');
      if(track >= questions.length){
          quizContainer.innerHTML = '<h4>You Scored'+ " " + (points) + " " +'Put your initials here <input id = "results" action= scores.html type="text" value="BS"><button id = "submit">Submit</button></h4>';
          //e.innerHTML += '<p> Put your initials here <input type="text" value="BS"><p>';
          _('status').innerHTML = 'Congratulations you have completed the Test!';
          
          
          return false;
      }


    ("status").innerHTML = "Question" + (track+1) + "of"+ questions.length;
    question = questions[track][0];
    answerA = questions [track][1];
    answerB = questions [track][2];
    answerC = questions [track][3];
    answerD = questions [track][4];

    quizContainer.innerHTML = "<h2>"+question+'</h2>';
    quizContainer.innerHTML += "<input type ='radio' name = 'choices' value = 'A'> "+answerA+"<br>";
    quizContainer.innerHTML += "<input type ='radio' name = 'choices' value = 'B'> "+answerB+"<br>";
    quizContainer.innerHTML += "<input type ='radio' name = 'choices' value = 'C'> "+answerC+"<br>";
    quizContainer.innerHTML += "<input type ='radio' name = 'choices' value = 'D'> "+answerD+"<br><br>";
    //create submit button
    quizContainer.innerHTML += "<button onclick = 'checkAnswer()'>Submit Answer</button>";

    // if(track => questions.length){
    //      quizContainer.innerHTML = '<h1>You Scored' +points+ '!!'+ '</h1>'
    //      _('status').innerHTML = 'Congratulations you have completed the Test!';
    //      track= 0
    //      points= 0
    //      return false;
    
}
function checkAnswer(){
    choices = document.getElementsByName('choices');
    //for loop created to run the choices
    for (var i = 0;i <choices.length; i++){
    
    //for(var i = 0; < choices.length; i++{
        if (choices [i].checked){
                choice = choices[i].value;
        }
    }
    //conditional statement that equals the correct choice
        
        if (choice == questions[track][5]) { 
                points++;
                track++;

        } else {
            secondsL -=15;
            points--;
        }
    
        
        

        localStorage.setItem("count", points);
    
        //}
        
        // track++
    renderQuestion();
}              
function innResults(){
    var results = localStorage.getItem("results");
  
    if (results === null) {
      return;
    }

}
    ("click", function workplease() {
    event.preventDefault();
    addEventListener("submit")
    var results = document.querySelector("#results").value;

    if (results === "") {
    displayMessage("error", "Intials cannot be blank");

    innResults();
    }
})

window.addEventListener('load',renderQuestion,false);

//after quiz is over show an input for the user to input their initals.
//Show a list of highscores with a option to clear the current score.
//When the quiz is over have the user submit intials to local storage
//Show a list of highscores with a option to clear the current score.