var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'what does API stand for?',
        choice1: 'Application programming interface',
        choice2: 'Apple prgramming interface',
        choice3: 'Application potato interface',
        choice4: 'Apple potato interface',
        answer: 1,
    },
    {
        question: 'what does API stand for?',
        choice1: 'Application programming interface',
        choice2: 'Apple prgramming interface',
        choice3: 'Application potato interface',
        choice4: 'Apple potato interface',
        answer: 1,
    },   {
        question: 'what does API stand for?',
        choice1: 'Application programming interface',
        choice2: 'Apple prgramming interface',
        choice3: 'Application potato interface',
        choice4: 'Apple potato interface',
        answer: 1,
    },   {
        question: 'what does API stand for?',
        choice1: 'Application programming interface',
        choice2: 'Apple prgramming interface',
        choice3: 'Application potato interface',
        choice4: 'Apple potato interface',
        answer: 1,
    },
]

var SCORE_POINTS = 100;
var MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
/*calculate what q you are on and correspond that w percent we have left */
        questionCounter++
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
        progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

        var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex]
        question.innerText = currentQuestion.question

        choices.forEach(choice => {
            var number = choice.dataset['number']
            choice.innerText = currentQuestion ['choice' + number]
        })
        availableQuestions.splice(questionsIndex, 1)

        acceptingAnswers = true
   
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        
    })
})