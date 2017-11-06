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
]

// Create your initial store
const STORE = {
  // Current question
  // User's answer choice(s)
  q1answer: '' 
  q2answer: 
  q3answer: 
  q4answer: 
  q5answer: 
  // Current view
  // Score? Anything else?
};

// Template generators
function generateAnswerList(answers) {}

// Rendering functions
function renderQuestionText() {}

// Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

$(function(){
  handleAnswerSubmitted();
});