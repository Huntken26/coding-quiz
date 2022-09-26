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
  return questionOne();
}

function questionOne() {
  question.textContent = "Which of these data types is a string?";
  question.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  listEl.appendChild(li4);
  li1.textContent = 7;
  li2.textContent = " 'Seven' ";
  li3.textContent = true;
  li4.textContent = "undefined";
li2.onclick = function () {
    return questionTwo();
}
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
  li3.onclick = function () {
    return questionThree();
}
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
  li4.onclick = function () {
    return questionFour();
}
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

  li3.onclick = function () {
    return finalScore();
}
}

function finalScore() {
    var score = document.createElement("div");

    score = "";
}

