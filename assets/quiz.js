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
    }
]