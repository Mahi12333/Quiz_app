let Question_no=document.getElementById("question-no");
let Total_No_Qus=document.getElementById("total-question-no");
let Score=document.getElementById("score");
let Question=document.getElementById("question");
console.log(Question)
let Next_btn=document.getElementById("next");



const mark_wrong = '<i class="fa fa-times"></i>';
const mark_check = '<i class="fa fa-check"></i>';

var questions = [{
    num: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Multiple Language",
      "Hyper Text Preprocessor",
      "Hyper Tool Multi Language",
      "Hyper Text Markup Language"
    ]
  },
  {
    num: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Computer Style Sheet",
      "Cascading Style Sheet",
      "Colorful Style Sheet",
      "Common Style Sheet"
    ]
  },
  {
    num: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hometext Preprocessor",
      "Hypertext Preprogramming"
    ]
  },

  {
    num: 4,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXTra Multi-Program Language",
      "eXecutable Multiple Language",
      "eXtensible Markup Language",
      "eXamine Multiple Language"
    ]
  },
  {
    num: 5,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Statement Question Language",
      "Stylesheet Query Language",
      "Stylish Question Language",
      "Structured Query Language"
    ]
  },
];


//Create a function to load the current question:
let currentQuestionIndex = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  //console.log(currentQuestion);
  Question_no.textContent = currentQuestion.num;
  Total_No_Qus.textContent = questions.length;
  Question.textContent = currentQuestion.question;

  const optionsContainer = document.querySelector(".answerss");
  //console.log(optionsContainer)
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    //console.log(option)
    const optionElement = document.createElement("div");
   // console.log(optionElement);
    optionElement.classList.add("option");
    optionElement.innerHTML = `<div class="text">${option}</div>`;
    optionElement.setAttribute("onclick", "checkAnswer(this)");
    optionsContainer.appendChild(optionElement);
  });
}


//Create a function to check the selected answer:
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedOption.textContent;

  if (selectedAnswer === currentQuestion.answer) {
    Score.textContent++;
    selectedOption.classList.add("correct");
    selectedOption.innerHTML += mark_check;
  } else {
    selectedOption.classList.add("wrong");
    selectedOption.innerHTML += mark_wrong;
  }

  disableOptions();
  showNextButton();
}

//Create functions to disable options and show the next button:
function disableOptions() {
  const options = document.querySelectorAll(".option");
  //console.log(options);
  options.forEach(option => {
    option.classList.add("disabled");
  });
}

function showNextButton() {
  console.log("sh");
  Next_btn.style.display ="block";
  console.log(Next_btn);
}

//Create a function to load the next question:
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    resetOptions();
    hideNextButton();
  } else {
    // Quiz completed, you can show the final score or perform other actions
    alert("Quiz completed! Your score is: " + Score.textContent);
  }
}

// Create a function to reset options for the next question:
function resetOptions() {
  const options = document.querySelectorAll(".option");
  options.forEach(option => {
    option.classList.remove("disabled", "correct", "wrong");
    option.innerHTML = `<div class="text">${option.textContent}</div>`;
  });
}

//Create a function to hide the next button:
function hideNextButton() {
  console.log("hi");
  Next_btn.style.display = "none";
}

//Add an event listener to the "NEXT" button:
Next_btn.addEventListener("click", nextQuestion);

// //Call the loadQuestion() function to start the quiz:
loadQuestion();
