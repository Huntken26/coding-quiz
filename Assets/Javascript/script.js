//Need to set variables/  get element by id's for the h1, text, and button.
// Those will all dissapear upon on click event, then the first question will pop up. append this and set styles within JS
// repeat this for each question
// set arrays and if then statements, functions etc.
// plan it all out during my study group
// click event for timer/button and another event for wrong answerr

var body = document.body;
var countdown = document.querySelector(".timer");
var mainSection = document.querySelector(".wrapper");
var mainTitle = document.querySelector(".title");
var instructions = document.querySelector(".startup-instructions");
var start = document.querySelector(".start-button");
var highScores = document.querySelector(".top-left");


var question = document.createElement("div");
var listEl  = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

question.textContent = "";
li1.textContent = "";
li2.textContent = "";
li3.textContent = " ";
li4.textContent = "";


mainSection.appendChild(question);
question.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);


start.onclick = function() {
    mainTitle.style.visibility = "hidden";
    instructions.style.visibility = "hidden";
    start.style.visibility = "hidden";
};


function questionOne(questionsArray) {

}

function questionTwo(questionsArray) {
    
}

function questionThree(questionsArray) {
    
}

function questionFour(questionsArray) {
    
}

function finalScore(questionsArray) {

}


var questionsArray = [
    {
        question: "Which of these data types is a string?",
        optionA: 7,
        optionB: "Seven",
        optionC: true,
        optionD: undefined,
        correct: "optionB"
    },

    {
        question: "Which of these is used for Front-End Development?",
        optionA: "Ruby",
        optionB: "Java",
        optionC: "Javascript",
        optionD: "Python",
        correct: "optionC"
    },

    {
        question: "What does HTML stand for ?",
        optionA: "Hyper Bolic Time Chamber",
        optionB: "High Transfer Meta Language",
        optionC: "Hexa Mega Texas Loop",
        optionD: "Hypertext Markup Language",
        correct: "optionD"
    },

    {
        question: "_____ is used for Styling Websites ?",
        optionA: "C++",
        optionB: "SQL",
        optionC: "CSS",
        optionD: "CZZ",
        correct: "optionC"
    },

]

    

highScores.addEventListener("click", function() {

})



// Listen for a click event on toggle switch
// themeSwitcher.addEventListener("click", function() {
//     // If mode is dark, apply light background
//     if (mode === "dark") {
//       mode = "light";
//       container.setAttribute("class", "light");
//     }

// var secondsLeft = 75;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = " Timer:" + secondsLeft;

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }


// function sendMessage() {
//     timeEl.textContent = " ";
  
//   }
  


//   setTime();
  
  
