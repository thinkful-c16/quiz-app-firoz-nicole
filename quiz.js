'use strict';

// In-memory database of questions
const QUESTIONS = [
  {
    question1: 'What is the character\'s name in Metroid?',
    question2: 'Which Trifoce did Zelda posess?',
    question3: 'Who do you fight before Mike Tyson in Mike Tyson\'s Punch Out?',
    question4: 'What year did Dr. Light create Mega Man?',
    question5: 'What level do you reach after level 99 in Duck Hunt?',
 }
];

// Create your initial store
const STORE = {
  // Current question
  // User's answer choice(s)
  // Current view
  // Score? Anything else?
};

// Template generators
function generateQuestions(questions) {}
// displays question for current page 

function generateAnswerList(answers) {}
//list of possible answers 

function currentScore(){}
// show current score

function currentQuestion(){}
//current question button to go to next question
//determine if all questions complete 

function generateResults(){}
//generating html based on user final score



// Rendering functions
function renderQuestionText(){}
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
  handleStartQuiz()
});
