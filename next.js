const questionBank =
[
  // Math Questions
  {
    question: '12 by 12 .....',
    option: ['67', '1212', '144', '0'],
    answer: '144'
  },
  {
    question: 'What is half of 50?',
    option: ['5', '25', '15', '30'],
    answer: '25'
  },
  {
    question: '8 + 7 = .....',
    option: ['14', '15', '16', '17'],
    answer: '15'
  },
  {
    question: 'What is the square root of 81?',
    option: ['8', '9', '10', '7'],
    answer: '9'
  },
  {
    question: 'What is 100 divided by 4?',
    option: ['20', '25', '40', '10'],
    answer: '25'
  },
  {
    question: '5 x 6 = .....',
    option: ['30', '35', '25', '40'],
    answer: '30'
  },
  {
    question: '9 squared is .....',
    option: ['18', '72', '81', '99'],
    answer: '81'
  },

  // Literacy Questions
  {
    question: 'Choose the correct spelling:',
    option: ['definately', 'definitely', 'defanitely', 'difinitely'],
    answer: 'definitely'
  },
  {
    question: 'Which one is a noun?',
    option: ['run', 'blue', 'book', 'quickly'],
    answer: 'book'
  },
  {
    question: 'Antonym of "Happy" is .....',
    option: ['Glad', 'Joyful', 'Angry', 'Sad'],
    answer: 'Sad'
  },
  {
    question: 'The past tense of "go" is .....',
    option: ['goes', 'goed', 'went', 'gone'],
    answer: 'went'
  },
  {
    question: 'Which word is a verb?',
    option: ['play', 'green', 'beautiful', 'table'],
    answer: 'play'
  },
  {
    question: 'Fill in the blank: "She ___ to school every day."',
    option: ['go', 'goes', 'gone', 'going'],
    answer: 'goes'
  },
  {
    question: 'Synonym of "Big" is .....',
    option: ['Tiny', 'Huge', 'Soft', 'Small'],
    answer: 'Huge'
  },

  // General Knowledge Questions
  {
    question: 'What planet do we live on?',
    option: ['Mars', 'Venus', 'Earth', 'Pluto'],
    answer: 'Earth'
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    option: ['Tiger', 'Elephant', 'Lion', 'Cheetah'],
    answer: 'Lion'
  },
  {
    question: 'What color do you get when you mix red and blue?',
    option: ['Purple', 'Green', 'Brown', 'Orange'],
    answer: 'Purple'
  },
  {
    question: 'What is the capital of Nigeria?',
    option: ['Lagos', 'Kano', 'Abuja', 'Ibadan'],
    answer: 'Abuja'
  },
  {
    question: 'Which of these is a fruit?',
    option: ['Carrot', 'Banana', 'Potato', 'Cabbage'],
    answer: 'Banana'
  },
  {
    question: 'How many continents are there?',
    option: ['5', '6', '7', '8'],
    answer: '7'
  },
  {
    question: 'Which ocean is the largest?',
    option: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    answer: 'Pacific'
  }
]

var question = document.getElementById('question');
var next = document.querySelector('.Next');
var i=0;
var previous = document.querySelector('.previous');
var points = document.getElementById('score');
var score=0;

var scoreboard = document.getElementById('scoreboard');                                                                                                          
var span = document.querySelectorAll('span');
var quizContainer = document.getElementById('Quiz-container');

function displayQuestion() {
    // 1. Show the question text with a numbered label (e.g., “Q.1 What is … .....”)
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;

    // 2–5. Fill the four answer buttons (or list items) with that question’s options
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];

    // 6. Update the little “Question x of y” progress indicator
    stat.innerHTML = 'Question ' + (i + 1) + ' of ' + questionBank.length;
}

function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;          // move to the next question index
        displayQuestion();  // refresh the UI with that question
    } else {
        points.innerHTML = score + '/' + questionBank.length;  // show final score
        quizContainer.style.display = 'none';   // hide the quiz interface
        scoreboard.style.display = 'block';     // reveal the results screen
    }
}

// Event listener for Next button
next.addEventListener('click', nextQuestion);

// Function to display all correct answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    
    for (let a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}

function previousQ() {
    if (i<questionBank.length+1) 
    {
       i=i-1;
       displayQuestion();
    }
}

previous.addEventListener('click',previousQ);
function calcScore(e) {
    if (e.innerHTML===questionBank[i].answer && score<questionBank.length) 
    {
     score=score+1;
     score++
     document.getElementById(e.id)
    }
    else{
        document.getElementById(e.id);
    }
    
}
function backToQuiz(){
    location.reload();
}

displayQuestion();