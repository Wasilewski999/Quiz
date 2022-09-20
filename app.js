var game = [
    {
        question: "Name of main hero:",
        answers: [
            {answer:"Naru",correct: "true"},
            {answer:"Jason",correct: "false"},
            {answer:"Sabal",correct: "false"},
            {answer:"Kate",correct: "false"},
        ]
    },
    {
        question: "What animal has Naru:",
        answers: [
            {answer:"Bear",correct: "false"},
            {answer:"Snake",correct: "false"},
            {answer:"Dog",correct: "true"},
            {answer:"Cat",correct: "false"},
        ]
    },
    {
        question: "Why Naru fights with Predator: ",
        answers: [
            {answer:"She wants to be a hunter",correct: "true"},
            {answer:"He killed her dog",correct: "false"},
            {answer:"She wants revenge",correct: "false"},
            {answer:"He killed her father",correct: "false"},
        ]
    },
    {
        question: "Actress who plays Naru:",
        answers: [
            {answer:"Amber Mithunder",correct: "true"},
            {answer:"Elizabeth Olsen",correct: "false"},
            {answer:"Brie Larson",correct: "false"},
            {answer:"Scarlett Johansson",correct: "false"},
        ]
    },
    {
        question: "Name of director:",
        answers: [
            {answer:"Dan",correct: "true"},
            {answer:"Kyle",correct: "false"},
            {answer:"Chris",correct: "false"},
            {answer:"Albert",correct: "false"},
        ]
    },
    {
        question: "Where was premiere:",
        answers: [
            {answer:"In theaters",correct: "false"},
            {answer:"On Hulu",correct: "true"},
            {answer:"On Disney Plus",correct: "true"},
            {answer:"Netflix",correct: "false"},
        ]
    },
    {
        question: "Who helped Naru defeat Predator:",
        answers: [
            {answer:"No one",correct: "false"},
            {answer:"Brother",correct: "false"},
            {answer:"Father",correct: "false"},
            {answer:"Dog",correct: "true"},
        ]
    }
];
const opacity = [
    {opacity: 0},
    {opacity: 0.5},
    {opacity: 1}
]
const time = {
    duration: 2000,
    iterations: 1
}
var startBtn = document.querySelector(".startBtn");
var nextBtn = document.querySelector(".nextBtn");
var question = document.querySelector(".question");
var answersContainer = document.querySelector(".answersContainer");
var restart = document.querySelector(".restart");
var container = document.querySelector(".container");
var index = 0, numCorrect = 0, numIncorrect = 0;
const set = () => {
    answersContainer.classList.remove("hide")
    for(let i = 0; i<game[index].answers.length; i++){
            var btn = document.createElement("button");
            question.innerHTML = game[index].question;
            question.animate(opacity, time);
            answersContainer.appendChild(btn);
            btn.innerHTML = game[index].answers[i].answer;
            btn.classList.add("btn");
            answersContainer.animate(opacity, time);
            if(game[index].answers[i].correct=="true"){
                btn.classList.add("correct");
            }
        }
    var buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            if(btn.classList.contains("correct")){
                btn.style.backgroundColor = "green";
                for(let i = 0; i<buttons.length; i++){
                    buttons[i].disabled = "true";
                }
                numCorrect++;
            }
            else{
                btn.style.backgroundColor = "#990000";
                for(let i = 0; i<buttons.length; i++){
                    buttons[i].disabled = "true";
                }
                numIncorrect++;
            }
            nextBtn.classList.remove("hide");
            nextBtn.animate(opacity, time);
        });
    });
}
const startGame = () => {
    startBtn.classList.add("hide");
    set();
}
const restartGame = () => {
    restart.classList.add("hide");
    index = 0;
    numCorrect = 0;
    numIncorrect = 0;
    set();
}
const nextQuestion = () => {
    var buttons = document.querySelectorAll(".btn");
    buttons.forEach(element => {
        element.remove();
    });
    if(game.length > index+1){
        nextBtn.classList.add("hide");
        index++;
        set();
    }
    else{
        var p = document.createElement("p");
        question.appendChild(p);
        buttons.forEach(btn => {
            btn.classList.add("hide");
        });
        question.textContent = "";
        nextBtn.classList.add("hide");
        restart.classList.remove("hide");
        p.innerHTML = "Correct: " + numCorrect + "<br>" + "Incorrect: " + numIncorrect + "<br>" + "Result: " + Math.floor((numCorrect / game.length)*100) + "%";
    }
}
nextBtn.addEventListener("click", nextQuestion);
restart.addEventListener("click", restartGame);
startBtn.addEventListener("click", startGame);
