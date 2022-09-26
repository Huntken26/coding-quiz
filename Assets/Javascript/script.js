//Need to set variables/  get element by id's for the h1, text, and button.
// Those will all dissapear upon on click event, then the first question will pop up. append this and set styles within JS
// repeat this for each question
// set arrays and if then statements, functions etc.
// plan it all out during my study group
// click event for timer/button and another event for wrong answerr


var countdown = document.querySelector("timer");
var mainSection = document.querySelector("wrapper");
var mainTitle = document.querySelector("title");
var instructions = document.querySelector("startup-instructions");
var start = document.querySelector("start-button");
var scores = document.querySelector("top-left");



const questions = [
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


start.addEventListener("click", function() {
   
    }

    
    
scores.addEventListener("click", function() {
   
}

// Listen for a click event on toggle switch
// themeSwitcher.addEventListener("click", function() {
//     // If mode is dark, apply light background
//     if (mode === "dark") {
//       mode = "light";
//       container.setAttribute("class", "light");
//     }

var secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = " Timer:" + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}


//  Function to create and append colorsplosion image
// function sendMessage() {
//     timeEl.textContent = " ";
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);
  
//   }
  
//   setTime();
  
  
