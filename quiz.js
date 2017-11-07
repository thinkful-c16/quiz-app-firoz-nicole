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
  questions: QUESTIONS,
  currentIndex: 0,
  userAnswerChoice: {}, 
  //score
};

function userAnswer(){
  $('#answer-options').on('submit', function(event){
    event.preventDefault();
    STORE.userAnswerChoice.val();
    console.log('test');

  });
}

// Template generators
// displays question for current page 
function generateNextQuestion() {
  let possibleAnswers = QUESTIONS[STORE.currentIndex].answers.map(function(val, index){
    return `<div><input type='radio' name='answer' value='${val}' data-index-attr='${index}' required /><span class='possible-answers'>${val}</span></div>`;
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

// function generateStartQuiz(){
//   return `
//     <h1>Nintendo Quiz</h1>
//     <div class="image" >
//     <img src="" alt="alt image text  DONT FORGET to update">
//     </div>

//     <div class="main-text">
//         <p>Test your knowledge of Nintendo games.</p>
//     </div>
//     <div id='start-quiz'>
//     <button type="submit" class="next" >Start</button>
//     </div>
//   `;
// }

function handleStartQuiz() {
  $('#start-quiz').on('click', function(event) {
    event.preventDefault();
    $('#start-page').toggleClass('hidden');
    $('#question-page').toggleClass('hidden');
  });
}

//function that will loop over properties in the STORE.. 
//we can check to see if the object index is = to the index of the shown question.
//increment the current index by 1 

//function check answer

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

function handleAnswer(){}
//if answer correct, display 'congrats message'
//if incorrect, display 'incorrect message' and show correct message

function handleResults(){}
//displays total score and asks to play again

$(function(){
  // handleAnswerSubmitted();
  handleStartQuiz();
  document.getElementById('question-page').innerHTML=generateNextQuestion();
  // userAnswer();
});

