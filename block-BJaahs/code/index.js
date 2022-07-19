let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;
function isAnswerCorrect(index) {
    if(index == correctAnswerIndex){
        return true;
    }else{
        return false;
    }
}
function getCorrectAnswer() {
    return "Tashkent";
}

let object = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect: function (index) {
        if(index == correctAnswerIndex){
            return true;
        }else{
            return false;
        }
    },
    getCorrectAnswer: function () {
    return "Tashkent";
    }
}

function createObject (title, arrOfOptions, index) {
    let object = {};
    object.title = title;
    object.options = arrOfOptions;
    object.correctAnswerIndex = index;
    object.isAnswerCorrect = function (index) {
        if(index == correctAnswerIndex){
            return true;
        }else{
            return false;
        }
    };
    object.getCorrectAnswer = function () {
    return "Tashkent";
    };
}

function createObject (title, arrOfOptions, index) {
    let object = {};
    object.title = title;
    object.options = arrOfOptions;
    object.correctAnswerIndex = index;
    this.isAnswerCorrect = function (index) {
        if(index == correctAnswerIndex){
            return true;
        }else{
            return false;
        }
    };
    this.getCorrectAnswer = function () {
    return "Tashkent";
    };
}