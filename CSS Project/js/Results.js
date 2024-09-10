let AllQuestionsAsked = JSON.parse(localStorage.getItem("QuestionsAskedArray"));
let AllCorrectAnswers = JSON.parse(localStorage.getItem("CorrectAnswerArray"));
let AllUserAnswers = JSON.parse(localStorage.getItem("UserAnswersArray"));
let QuizScore = 0;
let i=0;
let para1 = document.createElement("p");
let parent = document.getElementById("div2");

while(i<AllQuestionsAsked.length){
    if(AllUserAnswers[i]==AllCorrectAnswers[i]){
        para1.innerHTML += "Question: " + AllQuestionsAsked[i] + "<br>Correct answer!<br>Your answer: " + AllUserAnswers[i] + "<br><br>";
        parent.appendChild(para1);

        QuizScore++;
        i++;
    }
    else{
        para1.innerHTML += "Question: " + AllQuestionsAsked[i] + "<br>Incorrect answer!<br>Your answer: " + AllUserAnswers[i] + "<br>Correct answer: " + AllCorrectAnswers[i] + "<br><br>";
        parent.appendChild(para1);

        i++;
    }
}

let para2 = document.createElement("p");
para2.innerHTML = "<br>Your score is " + QuizScore + "/5";

parent.appendChild(para2);