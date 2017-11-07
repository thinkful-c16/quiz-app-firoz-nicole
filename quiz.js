'use strict';

$(function(){
  $('#start-button').on('click', function(){
    handleStartQuiz();
  });
});
const ANSWERS = [];
let totalCorrect = 0;

// In-memory database of questions
const QUESTIONS = [
  {question: 'What is the character\'s name in Metroid?',
    answers: ['Justin Bailey', 'Samus Aran', 'Langden Olger', 'Mother Brain'],
    correctAnswer: 'Samus Aran'
  },
  {question: 'Which Triforce did Zelda posess?',
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

// Template generators
// displays question for current page 
function template() { //changed from generateNextQuestion to template()
  currentScore();
  const possibleAnswers = QUESTIONS[STORE.currentIndex].answers.map(function(val, index){
    return `
      <div><input type='radio' name='answer' value='${val}' data-index-attr='${index}' required />
        <span class='possible-answers'>
         ${val}
        </span>
      </div>
    `;
  }).join('');
  return `
      <div class="question-container">
        <h1 class="question-title">${QUESTIONS[STORE.currentIndex].question}</h1>
        <form id="answer-options">
          ${possibleAnswers}
          <div><input type="submit" value="Next"></div>
          <div><input type="reset" value="Reset"></div>
          <div>
          <p>Current Score:${totalCorrect}/${QUESTIONS.length}</p>
          <p>Question:${STORE.currentIndex+1}/${QUESTIONS.length}</p>
      </div>
      </form>
    </div>`;
  
}

function handleStartQuiz() {
  generateNextQuestion();
  $('#start-button').toggleClass('hidden');
  $('#question-page').toggleClass('hidden');
  
  // $('#start-quiz').on('click', function(event) {
  //   event.preventDefault();
}

function generateNextQuestion(){ //changed from userAnswer to generateNextQuestion
  $('#question-page').html(template());
  $('#answer-options').on('submit', function(event){
    event.preventDefault();
    STORE.userAnswerChoice = $('input[name="answer"]:checked').val();
    const answer = $('input[name="answer"]:checked').val();

    ANSWERS.push(answer);
    nextQuestion();
    
  });
  
  function nextQuestion(){
    STORE.currentIndex++;
    generateNextQuestion();
    
  }

  // $('#answer-options').on('submit', function(event){
  //   event.preventDefault();
  //   STORE.userAnswerChoice = $('input[name="answer"]:checked').val();
  //   handleAnswerSubmitted();
  // });
}

// function handleAnswerSubmitted() {
//   let userAnswer = STORE.userAnswerChoice;
//   console.log(userAnswer);
//   let i = STORE.currentIndex.value;
//   for (const currentIndex in STORE) { 
//     if i = i, i++;
//   }
//function that will loop over properties in the STORE.. 
//we can check to see if the object index is = to the index of the shown question.
//increment the current index by 1 
//}


function handleEvaluateAnswer() {
  // Retrieve answer identifier of user-checked radio button
  // Perform check: User answer === Correct answer?
  // Update STORE and render appropriate section
}

//function check answer

function currentScore(){
  ANSWERS.forEach(function(element, index){
    if (element === QUESTIONS[index].correctAnswer) {
      totalCorrect++;
    } 
  });
}


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


function handleAnswer(){}
//if answer correct, display 'congrats message'
//if incorrect, display 'incorrect message' and show correct message

function handleResults(){}
//displays total score and asks to play again

