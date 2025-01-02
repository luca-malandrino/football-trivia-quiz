const quiz = {
    question1: {
        question: "Which country won the 2014 FIFA World Cup?",
        answers: {
            a: "Argentina",
            b: "Brazil",
            c: "Germany",
            d: "France"
        },
        correctAnswer: "c",
    },
    question2: {
        question: "Who is known as \"The Egyptian King\" in football?",
        answers: {
            a: "Trezeguet",
            b: "Mohamed Salah",
            c: "Ahmed Hegazi",
            d: "Amr Zaki"
        },
        correctAnswer: "b",
    },
    question3: {
        question: "Which player holds the record for most goals in a single World Cup?",
        answers: {
            a: "Miroslav Klose",
            b: "Ronaldo Nazario",
            c: "Just Fontaine",
            d: "Lionel Messi"
        },
        correctAnswer: "c",
    },
    question4: {
        question: "Which club is known as \"The Red Devils\"?",
        answers: {
            a: "Manchester City",
            b: "Manchester United",
            c: "Liverpool",
            d: "Arsenal"
        },
        correctAnswer: "b",
    },
    question5: {
        question: "Who won the Ballon d'Or in 2019?",
        answers: {
            a: "Lionel Messi",
            b: "Cristiano Ronaldo",
            c: "Virgil van Dijk",
            d: "Luka Modric"
        },
        correctAnswer: "a",
    },
    question6: {
        question: "Which country hosted the 2010 FIFA World Cup?",
        answers: {
            a: "Brazil",
            b: "South Africa",
            c: "Germany",
            d: "France"
        },
        correctAnswer: "b",
    },
    question7: {
        question: "Who is the all-time top scorer in the Premier League?",
        answers: {
            a: "Sergio Aguero",
            b: "Alan Shearer",
            c: "Wayne Rooney",
            d: "Thierry Henry"
        },
        correctAnswer: "b",
    },
    question8: {
        question: "Which team won the UEFA Champions League in 2020?",
        answers: {
            a: "Barcelona",
            b: "Paris Saint-Germain",
            c: "Bayern Munich",
            d: "Liverpool"
        },
        correctAnswer: "c",
    },
    question9: {
        question: "Which footballer is famously known as \"CR7\"?",
        answers: {
            a: "Raúl",
            b: "Lionel Messi",
            c: "Cristiano Ronaldo",
            d: "Neymar"
        },
        correctAnswer: "c",
    },
    question10: {
        question: "Which country won the most Copa América titles?",
        answers: {
            a: "Argentina",
            b: "Brazil",
            c: "Uruguay",
            d: "Chile"
        },
        correctAnswer: "a",
    }
}

let chosen = false;

function checkAnswer(event, question) {

    let score = Number(localStorage.getItem("score"));

    if(!chosen) {
        let choice = event.target;

        if(choice.textContent === question.answers[question.correctAnswer]) {
            choice.style.backgroundColor = "green";
            score++;
        } else {
            let correctAnswer = document.querySelector(".correct");
            choice.style.backgroundColor = "red";
            correctAnswer.style.backgroundColor = "green";
        }

        chosen = true;
        localStorage.setItem("score", score.toString());
    }
}

let finalScore = document.getElementById("score");

function getScore() {
    let score = localStorage.getItem("score");
    finalScore.textContent = `${score}/10`;
    localStorage.removeItem("score");
    finalScore.style.pointerEvents = "none";
    finalScore.style.backgroundColor = "rgb(24, 24, 24)";
    finalScore.style.fontSize = "5em";
}