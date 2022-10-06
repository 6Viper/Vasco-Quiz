const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('.scores');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which player has scored the most goals playing for Vasco da Gama?',
        choice1: 'Romario',
        choice2: 'Edmundo',
        choice3: 'Vava',
        choice4: 'Roberto Dinamite',
        answer: 4,
    },
    {
        question: 'Q2?',
        choice1: 'Romario',
        choice2: 'Edmundo',
        choice3: 'Vava',
        choice4: 'Roberto Dinamite',
        answer: 4,
    },
    {
        question: 'Q3?',
        choice1: 'Romario',
        choice2: 'Edmundo',
        choice3: 'Vava',
        choice4: 'Roberto Dinamite',
        answer: 4,
    },
    {
        question: 'Q4?',
        choice1: 'Romario',
        choice2: 'Edmundo',
        choice3: 'Vava',
        choice4: 'Roberto Dinamite',
        answer: 4,
    },
    {
        question: 'Q5?',
        choice1: 'Romario',
        choice2: 'Edmundo',
        choice3: 'Vava',
        choice4: 'Roberto Dinamite',
        answer: 4,
    }

]

const MAX_QUESTIONS = 5

startGame = () => {
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

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(option => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedOption = e.target
        const selectedAnswer = selectedOption.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedOption.parentElement.classList.Add
    })
})