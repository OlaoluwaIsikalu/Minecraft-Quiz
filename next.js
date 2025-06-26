const questionBank =
[
  {
    question: 'Godspeed made his first appearance in The Flash series during season .....',
    option: ['5', '3', '6', '7'],
    answer: '5'
  },
  {
    question: 'The real identity of the original Godspeed is .....',
    option: ['August Heart', 'Hunter Zolomon', 'Eobard Thawne', 'Jay Garrick'],
    answer: 'August Heart'
  },
  {
    question: 'Godspeed’s costume color is primarily .....',
    option: ['White and Gold', 'Black and Red', 'Blue and Silver', 'Green and Yellow'],
    answer: 'White and Gold'
  },
  {
    question: 'August Heart was a former colleague of Barry Allen at the .....',
    option: ['CCPD', 'Star Labs', 'Iron Heights', 'Jitters'],
    answer: 'CCPD'
  },
  {
    question: 'Godspeed uses clones of himself to .....',
    option: ['Steal speed', 'Travel time', 'Phase through objects', 'Create illusions'],
    answer: 'Steal speed'
  },
  {
    question: 'In Season 7, the “Godspeed War” takes place between Godspeed and .....',
    option: ['His clones', 'Reverse-Flash', 'Barry Allen', 'Zoom'],
    answer: 'His clones'
  },
  {
    question: 'Godspeed’s clones cannot .....',
    option: ['Speak properly', 'Run fast', 'Attack together', 'Create lightning'],
    answer: 'Speak properly'
  },
  {
    question: 'August Heart loses his memories when found in the year .....',
    option: ['2049', '2022', '2019', '2100'],
    answer: '2049'
  },
  {
    question: 'Godspeed’s speed is artificially created using .....',
    option: ['Velocity Formula', 'Dark Matter', 'Tachyons', 'A Speed Stone'],
    answer: 'Velocity Formula'
  },
  {
    question: 'To defeat Godspeed in Season 7, Barry teams up with .....',
    option: ['Reverse-Flash', 'Cisco', 'Wally West', 'Nora Allen'],
    answer: 'Reverse-Flash'
  },
  {
    question: 'Godspeed desires to become the one and only .....',
    option: ['Speedster', 'Flash', 'Time Traveler', 'Scientist'],
    answer: 'Speedster'
  },
  {
    question: 'Godspeed’s lightning color is typically .....',
    option: ['White', 'Red', 'Blue', 'Yellow'],
    answer: 'White'
  },
  {
    question: 'The actor who plays Godspeed/August Heart in the series is .....',
    option: ['Karan Oberoi', 'Teddy Sears', 'Tom Cavanagh', 'Logan Williams'],
    answer: 'Karan Oberoi'
  },
  {
    question: 'Godspeed is introduced as a villain who wants to gain control over .....',
    option: ['The Speed Force', 'Time Travel', 'The Multiverse', 'Dark Matter'],
    answer: 'The Speed Force'
  },
  {
    question: 'One of the major battles between Barry and Godspeed occurs in .....',
    option: ['Central City', 'Gorilla City', 'Keystone City', 'Metropolis'],
    answer: 'Central City'
  },
  {
    question: 'Godspeed views The Flash as his .....',
    option: ['Opposite', 'Friend', 'Mentor', 'Sidekick'],
    answer: 'Opposite'
  },
  {
    question: 'In the CW series, Godspeed’s personality is best described as .....',
    option: ['Obsessive and ruthless', 'Joyful and silly', 'Calm and peaceful', 'Lazy and aloof'],
    answer: 'Obsessive and ruthless'
  },
  {
    question: 'To restore his memories, August Heart uses .....',
    option: ['Advanced tech from Gideon', 'A neural amplifier', 'Speed therapy', 'Time remnants'],
    answer: 'A neural amplifier'
  },
  {
    question: 'Godspeed’s clone problem was solved by merging with the .....',
    option: ['Negative Speed Force', 'Original Speed Force', 'Still Force', 'Time Vault'],
    answer: 'Original Speed Force'
  },
  {
    question: 'Barry creates a lightsaber duel with speed against Godspeed using .....',
    option: ['Speed lightning constructs', 'Time echoes', 'Tachyon blades', 'Vibrational force'],
    answer: 'Speed lightning constructs'
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