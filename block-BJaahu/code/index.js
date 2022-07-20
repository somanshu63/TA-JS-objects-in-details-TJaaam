function createQuestion(title, options, correctAnswerIndex) {
    let question = Object.create(createMethods);
    question.title = title;  
    question.options = options;    
    question.correctAnswerIndex = correctAnswerIndex; 
    return question; 
}
let createMethods =  {
    isAnswerCorrect: function (index) {
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function () {
        return this.options[this.correctAnswerIndex];
    }
}

function CreateQuestion(title, options, correctAnswerIndex) {
    this.title = title;  
    this.options = options;    
    this.correctAnswerIndex = correctAnswerIndex; 
}
CreateQuestion.prototype = {
    isAnswerCorrect: function (index) {
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function () {
        return this.options[this.correctAnswerIndex];
    }
}


class question {
    constructor(title, options, correctAnswerIndex){
        this.title = title;  
        this.options = options;    
        this.correctAnswerIndex = correctAnswerIndex; 
    }
    isAnswerCorrect (index) {
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer () {
        return this.options[this.correctAnswerIndex];
    }
}

let firstQuestion = new question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );