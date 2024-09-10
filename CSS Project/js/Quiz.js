let Questions = [
    {question: "What is the real capital of Ireland?", answer1: "Dublin", answer2: "Cork", answer3: "Galway", answer4: "Limerick", correctAnswer: "Cork"},
    {question: "What club has won the Champions League the most times?", answer1: "Real Madrid", answer2: "Ac Milan", answer3: "Bayern Munich", answer4: "Liverpool", correctAnswer: "Real Madrid"},
    {question: "How many league titles have Internazionale won through court cases?", answer1: "0", answer2: "1", answer3: "2", answer4: "17", correctAnswer: "1"},
    {question: "What year did FK Crvena zvezda win the Champions League?", answer1: "2022", answer2: "1955", answer3: "1969", answer4: "1991", correctAnswer: "1991"},
    {question: "Which one between these clubs have won the Champions league the most?", answer1: "Atletico Madrid", answer2: "Steaua Bucuresti", answer3: "Paris Saint-Germain", answer4: "Arsenal", correctAnswer: "Steaua Bucuresti"},
    {question: "Which of these Countries has had clubs that won the least amount of Champions League trophies?", answer1: "France", answer2: "Portugal", answer3: "Germany", answer4: "Spain", correctAnswer: "France"},
    {question: "Which out of these Countries have won the least European championships?", answer1: "England", answer2: "Soviet Union", answer3: "West Germany", answer4: "Czechoslovakia", correctAnswer: "England"},
    {question: "Who has won the most amount of Premier League titles in their career?", answer1: "Steven Gerrard", answer2: "Harry Kane", answer3: "Adam Johnson", answer4: "Luis Suarez", correctAnswer: "Adam Johnson"},
    {question: "Which anual event has the highest viewership?", answer1: "The Superbowl", answer2: "The World Series", answer3: "The Champions League Final", answer4: "The Masters Tournament", correctAnswer: "The Champions League Final"},
    {question: "Which of these atheletes has more followers on Instagram?", answer1: "Patrick Mahomes", answer2: "Tom Brady", answer3: "Nikola Jokic", answer4: "Mahendra Singh Dhoni", correctAnswer: "Mahendra Singh Dhoni"}
]

let i=0;
let j=0;
let QuestionCounter = 1;
let QuestionsAsked = [];
let UserAnswers = [];
let QuestionsAskedQuestion = [];
let QuestionsAskedCorrectAnswer = [];

while(i<5){
    let randomQuestion = Questions[Math.floor(Math.random()*Questions.length)];
    if(randomQuestion != QuestionsAsked[0] && randomQuestion != QuestionsAsked[1] && randomQuestion != QuestionsAsked[2] &&
        randomQuestion != QuestionsAsked[3] && randomQuestion != QuestionsAsked[4]){
        QuestionsAsked[i] = randomQuestion;
        i++;
    }
}

for(i=0; i<5; i++){
    QuestionsAskedQuestion[i] = QuestionsAsked[i].question;
    QuestionsAskedCorrectAnswer[i] = QuestionsAsked[i].correctAnswer;   
}

showQuestions();

function showQuestions(){
    let para1 = document.createElement("p");
    let node1 = document.createTextNode("Question " + QuestionCounter + "/5: *"); 

    let para2 = document.createElement("p");
    let node2 = document.createTextNode(QuestionsAsked[j].question);
    para2.appendChild(node2);

    let parent = document.getElementById("div1"); 
    parent.appendChild(para1);
    parent.appendChild(para2);

    let form = document.createElement("form");
    form.setAttribute("id","Questions");
    document.body.appendChild(form);
    
    answer1Input = document.createElement("input");
    answer1Input.setAttribute("type", "radio");
    answer1Input.setAttribute("value", QuestionsAsked[j].answer1);
    answer1Input.setAttribute("id", "r1");
    answer1Input.setAttribute("name", "answer");
    form.appendChild(answer1Input);
    
    let label1 = document.createElement("label");
    label1.setAttribute("id", "l1");
    label1.innerHTML = QuestionsAsked[j].answer1 + "<br>";
    form.appendChild(label1);
    
    answer2Input = document.createElement("input");
    answer2Input.setAttribute("type", "radio");
    answer2Input.setAttribute("value", QuestionsAsked[j].answer2);
    answer2Input.setAttribute("id", "r2");
    answer2Input.setAttribute("name", "answer");
    form.appendChild(answer2Input);
    
    let label2 = document.createElement("label");
    label2.setAttribute("id", "l2");
    label2.innerHTML = QuestionsAsked[j].answer2 + "<br>";
    form.appendChild(label2);

    answer3Input = document.createElement("input");
    answer3Input.setAttribute("type", "radio");
    answer3Input.setAttribute("value", QuestionsAsked[j].answer3);
    answer3Input.setAttribute("id", "r3");
    answer3Input.setAttribute("name", "answer");
    form.appendChild(answer3Input);
    
    let label3 = document.createElement("label");
    label3.setAttribute("id", "l3");
    label3.innerHTML = QuestionsAsked[j].answer3 + "<br>";
    form.appendChild(label3);

    answer4Input = document.createElement("input");
    answer4Input.setAttribute("type", "radio");
    answer4Input.setAttribute("value", QuestionsAsked[j].answer4);
    answer4Input.setAttribute("id", "r4");
    answer4Input.setAttribute("name", "answer");
    form.appendChild(answer4Input);
    
    let label4 = document.createElement("label");
    label4.setAttribute("id", "l4");
    label4.innerHTML = QuestionsAsked[j].answer4 + "<br>";
    form.appendChild(label4);

    if(j<=3){
        let nextButton = document.createElement("input");
        nextButton.setAttribute("type", "button");
        nextButton.setAttribute("id", "next");
        nextButton.setAttribute("value", "Next Question");
        form.appendChild(nextButton);

        let ConfirmAnswerButton = document.getElementById("next");
        ConfirmAnswerButton.addEventListener("click", ConfirmAnswer, false);
        ConfirmAnswerButton.addEventListener("click", DisplayNewQuestion, false);
    }

    else{
        let finishButton = document.createElement("input");
        finishButton.setAttribute("type", "button");
        finishButton.setAttribute("id", "finish");
        finishButton.setAttribute("value", "Finish");
        form.appendChild(finishButton);

        let ConfirmFinishButton = document.getElementById("finish");
        ConfirmFinishButton.addEventListener("click", ConfirmAnswer, false);
        ConfirmFinishButton.addEventListener("click", FinishQuiz, false);
    }

    let para3 = document.createElement("p"); 
    para3.setAttribute("id", "help");
    para3.style.visibility = "hidden";
    let node3 = document.createTextNode("Click the radio buttons to select an answer!");
    para3.appendChild(node3);
    document.body.appendChild(para3);

    para1.appendChild(node1);
    para1.addEventListener("mouseover", function(){
        document.getElementById("help").style.visibility = "visible"
    })
    para1.addEventListener("mouseout", function(){
        document.getElementById("help").style.visibility = "hidden"
    })

    function ConfirmAnswer(){
        if(document.getElementById("r1").checked || document.getElementById("r2").checked || 
            document.getElementById("r3").checked || document.getElementById("r4").checked){
            let tempAnswer = document.getElementsByName("answer");
            for(i=0; i<tempAnswer.length; i++){
                if(tempAnswer[i].checked){
                    UserAnswers[j]=tempAnswer[i].value;
                }
            }
        }
        else{
            window.alert("You must select an answer before you continue!");
        }
    }
    
    function DisplayNewQuestion(){
        if(document.getElementById("r1").checked || document.getElementById("r2").checked || 
        document.getElementById("r3").checked || document.getElementById("r4").checked){
            parent.removeChild(para1);
            parent.removeChild(para2);
            document.body.removeChild(para3);
            document.body.removeChild(form);
            j++;
            QuestionCounter++;
            showQuestions();
        }
    }

    function FinishQuiz(){
        if(document.getElementById("r1").checked || document.getElementById("r2").checked || 
        document.getElementById("r3").checked || document.getElementById("r4").checked){
            localStorage.setItem("UserAnswersArray", JSON.stringify(UserAnswers));
            localStorage.setItem("QuestionsAskedArray", JSON.stringify(QuestionsAskedQuestion));
            localStorage.setItem("CorrectAnswerArray", JSON.stringify(QuestionsAskedCorrectAnswer));
            let winHeight = 810;
            let winWidth = screen.width/2;
            let topPos = (screen.height-winHeight)/2; 
            let leftPos = (screen.width-winWidth)/2;
            let mesurements = "width=" + winWidth + ",height=" + winHeight + ",left=" + leftPos + ",top=" +topPos;
            window.open("results.html", "Results", mesurements);
        }
    }

    let SelectedButton = document.querySelectorAll("[name = 'answer']");
    SelectedButton[0].addEventListener("click", function(){
        if(document.getElementById("r1").checked){
            document.getElementById("l1").style.backgroundColor = "#ff5fde7d";
            document.getElementById("l2").style.backgroundColor = "#FFFFFF00";
            document.getElementById("l3").style.backgroundColor = "#FFFFFF00";
            document.getElementById("l4").style.backgroundColor = "#FFFFFF00";
        }
    });
    SelectedButton[1].addEventListener("click", function(){
        if(document.getElementById("r2").checked){
            document.getElementById("l2").style.backgroundColor = "#ff5fde7d";
            document.getElementById("l1").style.backgroundColor = "#FFFFFF00";
            document.getElementById("l3").style.backgroundColor = "#FFFFFF00";
            document.getElementById("l4").style.backgroundColor = "#FFFFFF00";
        }
    });
    SelectedButton[2].addEventListener("click", function(){
        if(document.getElementById("r3").checked){
            document.getElementById("l3").style.backgroundColor = "#ff5fde7d";
            document.getElementById("l1").style.backgroundColor = "#FFFFFF00";
            document.getElementById("l2").style.backgroundColor = "#FFFFFF00";
            document.getElementById("l4").style.backgroundColor = "#FFFFFF00";
        }
    });
    SelectedButton[3].addEventListener("click", function(){
        if(document.getElementById("r4").checked){
            document.getElementById("l4").style.backgroundColor = "#ff5fde7d";
            document.getElementById("l1").style.backgroundColor = "#FFFFFF00";
            document.getElementById("l2").style.backgroundColor = "#FFFFFF00";
            document.getElementById("l3").style.backgroundColor = "#FFFFFF00";
        }
    });
}