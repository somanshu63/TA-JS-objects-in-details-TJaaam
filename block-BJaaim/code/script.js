let form = document.querySelector("form");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let quizElm = document.querySelector(".quiz");
let showResult = document.querySelector(".show-result");
let totalQuestions = document.querySelector(".numOfQuestions");


class Question{
    constructor(title, options, answer){
        this.title = title;
        this.options = options;
        this.correctAnswer = answer;
    }
    isCorrect(answer){
        return this.options[this.correctAnswer] == answer;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswer];
    }
}

class Quiz{
    constructor(list =[]){
        this.questions = list;
        this.activeIndex = 0;
        this.score = 0;
    }
    nextQuestion(){
        this.activeIndex += 1;
        this.createUI();
    }
    prevQuestion() {
        this.activeIndex -= 1;
        this.createUI();
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
    addQuestion(title, options, answer) {
        let question = new Question(
            title, 
            options,
            answer
        );
        this.questions.push(question); 
    }
    handleButtons() {
        if(this.activeIndex === 0){
            prev.style.display = "none";
            showResult.style.display = "none";
        }else if(this.activeIndex === this.questions.length-1){
            next.style.display = "none";
            showResult.style.display = "inline-block";
        }else{
            prev.style.display = "inline-block";
            next.style.display = "inline-block";
            showResult.style.display = "none";
        }
    }
    createUI() {
        quizElm.innerHTML = "";
        let activeQuestion = this.questions[this.activeIndex];
        let form = document.createElement("form");
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = activeQuestion.title;
        let optionsElm = document.createElement("div");
        optionsElm.classList.add("options");
        let buttonWrapper = document.createElement("div");
        let button = document.createElement("button");
        button.innerText = "submit";
        button.type = "submit";
        buttonWrapper.append(button);

        activeQuestion.options.forEach((option, index) => {
            let input = document.createElement("input");
            let div = document.createElement("div");
            input.id = `option-${index}`;
            input.type = `radio`;
            input.name = "options";
            input.value = option;
            let label = document.createElement("label");
            label.for = `option-${index}`;
            label.innerText = option;

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                if(document.querySelector("input:checked")){
                    if(activeQuestion.isCorrect(document.querySelector("input:checked").value)){
                        this.updateScore();
                    }
                }
            });
            div.append(input, label);
            optionsElm.append(div);
        });
        this.handleButtons();

        totalQuestions.innerText = `Total Questions: ${this.questions.length}`;
        fieldset.append(legend, optionsElm, buttonWrapper);
        form.append(fieldset);
        quizElm.append(form);
    }
}

function init() {
    let quiz = new Quiz();
    quizCollection.forEach((question) => {
        quiz.addQuestion(
            question.title,
            question.options,
            question.correctAnswer
        );
    });

    quiz.createUI();

    next.addEventListener("click", quiz.nextQuestion.bind(quiz));

    prev.addEventListener("click", quiz.prevQuestion.bind(quiz));

    showResult.addEventListener("click", () => {
        alert(`your score is ${quiz.score}`);
    });

}

init();