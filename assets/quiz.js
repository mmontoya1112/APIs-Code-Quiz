const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('#choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

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
        question: 'what does hjgjhghj stad for?',
        choice1: 'Applicatin programming interface',
        choice2: 'Apple prgraming interface',
        choice3: 'Application potato interface',
        choice4: 'Apple potto interface',
        answer: 1,
    },   
    {
        question: 'what does PI stand for?',
        choice1: 'Application programmig interface',
        choice2: 'Apple prgramming intrface',
        choice3: 'Application potao interface',
        choice4: 'Apple potato inerface',
        answer: 1,
    },   
    {
        question: 'what does API sand for?',
        choice1: 'Appliation programming interface',
        choice2: 'Appl prgramming interface',
        choice3: 'Appication potato interface',
        choice4: 'Aple potato interface',
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startQuiz = () => {
    questionCounter = 0
    score = 0
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

        const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex]
/* knows what question is being asked */
        question.innerText = currentQuestion.question
console.log(choices)
        choices.forEach(choice => {
            const number = choice.dataset['number']
            choice.innerText = currentQuestion['choice' + number]
            console.log(currentQuestion['choice' + number])
        })
        availableQuestions.splice(questionsIndex, 1)

        acceptingAnswers = true


}
console.log(choices.forEach)
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)  
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startQuiz()