const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
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
        option1: 'Romario',
        option2: 'Edmundo',
        option3: 'Vava',
        option4: 'Roberto Dinamite',
        answer: 4,
    },
    {
        question: 'Which player has scored the most goals playing for Vasco da Gama?',
        option1: 'Romario',
        option2: 'Edmundo',
        option3: 'Vava',
        option4: 'Roberto Dinamite',
        answer: 4,
    },
    {
        question: 'Which player has scored the most goals playing for Vasco da Gama?',
        option1: 'Romario',
        option2: 'Edmundo',
        option3: 'Vava',
        option4: 'Roberto Dinamite',
        answer: 4,
    },
    {
        question: 'Which player has scored the most goals playing for Vasco da Gama?',
        option1: 'Romario',
        option2: 'Edmundo',
        option3: 'Vava',
        option4: 'Roberto Dinamite',
        answer: 4,
    },
    {
        question: 'Which player has scored the most goals playing for Vasco da Gama?',
        option1: 'Romario',
        option2: 'Edmundo',
        option3: 'Vava',
        option4: 'Roberto Dinamite',
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

    options.forEach(option => {
        const number = option.dataset['number']
        option.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

options.forEach(choice => {
    option.addEventListener('click', e => {
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