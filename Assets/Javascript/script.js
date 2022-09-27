// NOTE FOR GRADER- I'm completely new to js and I'm still learning the more efficient ways to code

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
var input;

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
    time = setInterval(myTimer, 1000);
    sec = 65;
  };
  li3.onclick = function () {
    alert("Wrong Answer");
    time = setInterval(myTimer, 1000);
    sec = 65;
  };
  li4.onclick = function () {
    alert("Wrong Answer");
    time = setInterval(myTimer, 1000);
    sec = 65;
  };

  li2.onclick = function () {
    return questionTwo() + myTimer();
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
    time = setInterval(myTimer, 1000);
    sec = 55;
  };
  li2.onclick = function () {
    alert("Wrong Answer");
    time = setInterval(myTimer, 1000);
    sec = 55;
  };
  li4.onclick = function () {
    alert("Wrong Answer");
    time = setInterval(myTimer, 1000);
    sec = 55;
  };

  li3.onclick = function () {
    return questionThree() + myTimer();
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
    time = setInterval(myTimer, 1000);
    sec = 45;
  };
  li2.onclick = function () {
    alert("Wrong Answer");
    time = setInterval(myTimer, 1000);
    sec = 45;
  };
  li3.onclick = function () {
    alert("Wrong Answer");
    time = setInterval(myTimer, 1000);
    sec = 45;
  };

  li4.onclick = function () {
    return questionFour() + myTimer();
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
    time = setInterval(myTimer, 1000);
    sec = 35;
  };
  li2.onclick = function () {
    alert("Wrong Answer");
    time = setInterval(myTimer, 1000);
    sec = 35;
  };
  li4.onclick = function () {
    alert("Wrong Answer");
    time = setInterval(myTimer, 1000);
    sec = 35;
  };

  li3.onclick = function () {
    window.location.reload();
  };
}

// For resubmission- add javascript functions and variables for the high score form/ initials input.
