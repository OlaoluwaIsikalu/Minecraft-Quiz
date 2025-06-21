const questionBank = [
    {
        question : 'The year Minecraft was made in was .....',
        option : ['2011', '1000', '1239', '1102'],
        answer : '2011'
    },
    {
        question : 'The name of the new pale garden mob is .....',
        option : ['The Weaking', 'The Creaking', 'The Zeclin', 'The Xenomorph'],
        answer : 'The Creaking'
    }
    ,{
        question: 'The year Minecraft was made in was .....',
        option: ['2011', '1000', '1239', '1102'],
        answer: '2011'
    },
    {
        question: 'The creator of Minecraft is .....',
        option: ['Markus Persson', 'Bill Gates', 'Elon Musk', 'Steve Jobs'],
        answer: 'Markus Persson'
    },
    {
        question: 'The name of the explosive mob is .....',
        option: ['Zombie', 'Skeleton', 'Creeper', 'Ghast'],
        answer: 'Creeper'
    },
    {
        question: 'Minecraft\'s default player character is named .....',
        option: ['Alex', 'Steve', 'Bob', 'Notch'],
        answer: 'Steve'
    },
    {
        question: 'Which material is needed to craft a Nether Portal .....',
        option: ['Stone', 'Wood', 'Obsidian', 'Iron'],
        answer: 'Obsidian'
    },
    {
        question: 'The boss mob found in The End is the .....',
        option: ['Wither', 'Ender Dragon', 'Ghast', 'Blaze'],
        answer: 'Ender Dragon'
    },
    {
        question: 'To craft a bed you need wool and .....',
        option: ['Iron', 'String', 'Wood Planks', 'Leaves'],
        answer: 'Wood Planks'
    },
    {
        question: 'Which tool is used to chop wood the fastest .....',
        option: ['Pickaxe', 'Shovel', 'Axe', 'Hoe'],
        answer: 'Axe'
    },
    {
        question: 'The Nether dimension is mainly filled with .....',
        option: ['Water', 'Ice', 'Lava', 'Slime'],
        answer: 'Lava'
    },
    {
        question: 'The item used to light a Nether Portal is .....',
        option: ['Torch', 'Flint and Steel', 'Firework', 'Lava Bucket'],
        answer: 'Flint and Steel'
    },
    {
        question: 'Cows in Minecraft drop leather and .....',
        option: ['Feathers', 'Milk', 'Wool', 'Porkchop'],
        answer: 'Milk'
    },
    {
        question: 'Which of these ores is green .....',
        option: ['Iron', 'Diamond', 'Emerald', 'Coal'],
        answer: 'Emerald'
    },
    {
        question: 'Wolves can be tamed with .....',
        option: ['Meat', 'Fish', 'Bone', 'String'],
        answer: 'Bone'
    },
    {
        question: 'Which mob lives underwater .....',
        option: ['Zombie', 'Squid', 'Blaze', 'Enderman'],
        answer: 'Squid'
    },
    {
        question: 'The game mode where players cannot die is .....',
        option: ['Survival', 'Adventure', 'Creative', 'Hardcore'],
        answer: 'Creative'
    },
    {
        question: 'Which item restores health when eaten .....',
        option: ['Diamond', 'Book', 'Apple', 'Stick'],
        answer: 'Apple'
    },
    {
        question: 'The plant used to craft paper is .....',
        option: ['Cactus', 'Sugar Cane', 'Vines', 'Melon'],
        answer: 'Sugar Cane'
    },
    {
        question: 'A mob that can teleport and pick up blocks is .....',
        option: ['Creeper', 'Skeleton', 'Enderman', 'Spider'],
        answer: 'Enderman'
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
    setTimeout(nextQuestion,3000);
}
function backToQuiz(){
    location.reload();
}

displayQuestion();