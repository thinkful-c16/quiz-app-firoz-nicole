'use strict';

// In-memory database of questions
const QUESTIONS = [
  {question: 'What is the character\'s name in Metroid?',
    answers: ['Justin Bailey', 'Samus Aran', 'Langden Olger', 'Mother Brain'],
    correctAnswer: 'Samus Aran'
  },
  {question: 'Which Trifoce did Zelda posess?',
    answers: ['Wisdom', 'Power', 'Speed', 'Heart'],
    correctAnswer: 'Wisdom'
  },
  {question: 'Who do you fight before Mike Tyson in Mike Tyson\'s Punch Out?',
    answers: ['Sand Man', 'Soda Popinski', 'King Hippo', 'Super Macho Man'],
    correctAnswer: 'Super Macho Man'
  },
  {question: 'What year did Dr. Light create Mega Man?',
    answers: ['200Y', '200X', '200Z', '200M'],
    correctAnswer: '200X'
  },
  {question: 'What level do you reach after level 99 in Duck Hunt?',
    answers: [98, 0, 1, 100],
    correctAnswer: 0
  }
];


// Create your initial store
const STORE = {
  currentIndex: 0,

  // Current question
  // User's answer choice(s)
  // Current view
  // Score? Anything else?
};

// Template generators
function generateNextQuestion() {
  let possibleAnswers = QUESTIONS[STORE.currentIndex].answers.map(function(val, index){
    return `<div><input type='radio' name='answer' value='${val}' data-index-attr='${index}'/><span class='possible-answers'>${val}</span></div>`;
  });
  possibleAnswers = possibleAnswers.join('');
  let content = 
    `<div class="question-container">
      <h1 class="question-title">${QUESTIONS[STORE.currentIndex].question}</h1>
      <form id="answer-options">
          ${possibleAnswers}
          <div><input type="submit" value="Submit"></div>
          <div><input type="reset" value="Reset"></div>
      </form>
    </div>`;
  return content;
}
// displays question for current page 

function currentScore(){}
// show current score

function currentQuestion(){}
//current question button to go to next question
//determine if all questions complete 

function generateResults(){}
//generating html based on user final score



// Rendering functions
function renderQuestionText(){
}
// render question text from QUESTIONS array
// render answers  from STORE array

function correctAnswer(){}
//determine if user input is correct



// Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('change', '.submit-answer', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

function handleStartQuiz() {
  $('.user-controls').on('click', '.start-quiz', () => {
    // Retrieve start quiz identifier of user-clicked start quiz button
    
  });
}

function handleAnswer(){}
//if answer correct, display 'congrats message'
//if incorrect, display 'incorrect message' and show correct message

function handleResults(){}
//displays total score and asks to play again

$(function(){
  handleAnswerSubmitted();
  handleStartQuiz();
  document.getElementById('testing').innerHTML=generateNextQuestion();
});

