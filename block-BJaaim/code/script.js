class Question{
    constructor(title, options, answer){
        this.title = title;
        this.options = options;
        this.correctAnswer = answer;
    }
    isCorrect(answer){
        if(answer == this.correctAnswer){
            return true;
        }else{
            return false;
        }
    }
    getCorrectAnswer(){
        return this.correctAnswer;
    }
    createUI(){
        let ul = document.createElement("ul");
        let question = document.createElement("li");
        question.innerText = this.title;
        let options = document.createElement("li");
        options.innerText = this.options;
        ul.append(question, options);
        return ul;
    }
}

class Quiz{
    constructor(root, list =[]){
        this.questionsList = list;
        this.activeIndex = 0;
        this.root = root;
        this.score = 0;
    }
    nextQuestion(){
        return this.questionsList[index + 1];
    }
    createUI(){
        this.root.innerHTML = "";
        this.questionsList.forEach((question) => {
            question.createUI();
        });
    }
    updateScore() {
        this.score += 1;
    }
}

let form = document.querySelector("form");
let myQuestions;
let quiz = new Quiz;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    quiz.questionsList.push(new Question(title.value, options.value, correctAnswer.value));
    title.value = "";
    options.value = "";
    correctAnswer.value = "";
});