// Set up my styling for the questions, answers, etc. Set up the timer, if then statements for each question and choice
// set up if then statements for my choices being able to penalize someone for choosing wrong answer
//set up final page created elements and also styling. High score page and elements
// if anything other than correct answer is chosen alert wrong, is chosen right alert correct

var body = document.body;
var countdown = document.querySelector(".timer");
var mainSection = document.querySelector(".wrapper");
var mainTitle = document.querySelector(".title");
var instructions = document.querySelector(".startup-instructions");
var start = document.querySelector(".start-button");
var highScores = document.querySelector(".top-left");

var question = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("BUTTON");
var li2 = document.createElement("BUTTON");
var li3 = document.createElement("BUTTON");
var li4 = document.createElement("BUTTON");
var sec = 75;
var time;

function myTimer() {
  document.querySelector(".timer").innerHTML = sec + "sec left";
  sec--;
  if (sec == -1) {
    clearInterval(time);
    alert("Time out!! :(");
  }
}

question.setAttribute("class", "questions");

start.onclick = function () {
  mainTitle.style.visibility = "hidden";
  instructions.style.visibility = "hidden";
  start.style.visibility = "hidden";
  body.appendChild(question);
  question.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  listEl.appendChild(li4);
  time = setInterval(myTimer, 1000);

  return questionOne() + myTimer();
};

// Make a named function and assign as a click listener on the rest that arent correct wrong1 wrong2 wrong3 wrong4, have them deduct time. deduct from sec
// function wrongAnswer() {
//   prompt("Wrong Answer");
// }

function questionOne() {
  question.textContent = "Which of these data types is a string?";
  question.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  listEl.appendChild(li4);
  li1.textContent = 12345;
  li2.textContent = " 'Seven' ";
  li3.textContent = false;
  li4.textContent = "undefined";
  li1.onclick = function () {
    alert("Wrong Answer");
  };
  li3.onclick = function () {
    alert("Wrong Answer");
  };
  li4.onclick = function () {
    alert("Wrong Answer");
  };

  li2.onclick = function () {
    return questionTwo();
  };
}

function questionTwo() {
  question.textContent = "Which of these is used for Front-End Development?";
  question.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  listEl.appendChild(li4);
  li1.textContent = "Ruby";
  li2.textContent = "Java";
  li3.textContent = "Javascript";
  li4.textContent = "Python";
  li1.onclick = function () {
    alert("Wrong Answer");
  };
  li2.onclick = function () {
    alert("Wrong Answer");
  };
  li4.onclick = function () {
    alert("Wrong Answer");
  };

  li3.onclick = function () {
    return questionThree();
  };
}

function questionThree() {
  question.textContent = "What does HTML stand for ?";
  question.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  listEl.appendChild(li4);
  li1.textContent = "Hyper Bolic Time Chamber";
  li2.textContent = "High Transfer Meta Language";
  li3.textContent = "Hexa Mega Texas Loop";
  li4.textContent = "Hypertext Markup Language";
  li1.onclick = function () {
    alert("Wrong Answer");
  };
  li2.onclick = function () {
    alert("Wrong Answer");
  };
  li3.onclick = function () {
    alert("Wrong Answer");
  };

  li4.onclick = function () {
    return questionFour();
  };
}

function questionFour() {
  question.textContent = "_____ is used for Styling Websites ?";
  question.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  listEl.appendChild(li4);
  li1.textContent = "C++";
  li2.textContent = "SQL";
  li3.textContent = "CSS";
  li4.textContent = "CZZ";
  li1.onclick = function () {
    alert("Wrong Answer");
  };
  li2.onclick = function () {
    alert("Wrong Answer");
  };
  li4.onclick = function () {
    alert("Wrong Answer");
  };

  li3.onclick = function () {
    return finalScore;
  };
}

//local storage json stringify and parse; have an input with a button. submit button will have a function to get the value and put in local stor
function finalScore() {
  var score = document.createElement("div");
  var winners = document.createElement("ol");
  var inputInitials = document.createElement("BUTTON");
  winners.appendChild(inputInitials);
  score.appendChild(winners);
  inputInitials.textContent = "" + JSON.stringify(alphabet);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var input = "";
  winners.textContent = "HIGH SCORES" + input;
  return winners;
}
