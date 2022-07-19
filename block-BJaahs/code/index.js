let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;
function isAnswerCorrect(index) {
    return index === correctAnswerIndex;
}
function getCorrectAnswer() {
    return options[correctAnswerIndex];
}

let question = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect: function (index) {
        return index === question.correctAnswerIndex;
    },
    getCorrectAnswer: function () {
        return question.options[question.correctAnswerIndex];
    }
}

function createQuestion (title, options, index) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = index;
    question.isAnswerCorrect = function (index) {
        return index === question.correctAnswerIndex;
    };
    question.getCorrectAnswer = function () {
        return question.options[question.correctAnswerIndex];
    };
    return question;
}
const firstQuestion = createQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 2);

function createQuestion (title, options, index) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = index;
    question.isAnswerCorrect = function (index) {
        return index === this.correctAnswerIndex;
    };
    question.getCorrectAnswer = function () {
        return this.options[this.correctAnswerIndex];
    };
    return question;
}