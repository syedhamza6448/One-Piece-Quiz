const questions = [
    {
        question: "Who is Luffy's first main opponent?",
        answers: [
            {text: "Don Krieg", correct: false},
            {text: "Alvida", correct: true},
            {text: "Crocodile", correct: false},
            {text: "Buggy", correct: false},
        ],
        img: "luffy's-opponents.png",
    },
    {
        question: "What is the name of the village Luffy was born in?",
        answers: [
            {text: "Cocoyasi", correct: false},
            {text: "Shimotsuki", correct: false},
            {text: "Syrup", correct: false},
            {text: "Foosha", correct: true},
        ],
        img: "luffy's-village.png",
    },
    {
        question: "What is the name Luffy uses to enter the Colosseum in Dressrosa?",
        answers: [
            {text: "Lucy", correct: true},
            {text: "Lucci", correct: false},
            {text: "Luffy", correct: false},
            {text: "Luci", correct: false},
        ],
        img: "lucy.jpg",
    },
    {
        question: "Who sucks all of the poison out of Luffy's body?",
        answers: [
            {text: "Hancock", correct: false},
            {text: "Reiju", correct: true},
            {text: "Nami", correct: false},
            {text: "Robin", correct: false},
        ],
        img: "Luffy-Poisonous.png",
    },
    {
        question: "Who was the first marine Admiral to be shown in the series?",
        answers: [
            {text: "Akainu", correct: false},
            {text: "Kizaru", correct: false},
            {text: "Aokiji", correct: true},
            {text: "Morgany", correct: false},
        ],
        img: "Admirals.png",
    },
    {
        question: "Where is Dr. Hiruluk originally from?",
        answers: [
            {text: "New World Island", correct: false},
            {text: "Sakura", correct: false},
            {text: "West Blue", correct: false},
            {text: "Drumm", correct: true},
        ],
        img: "hiriluk.png",
    },
    {
        question: "What is the money in Skypia called?",
        answers: [
            {text: "Skyberry", correct: false},
            {text: "Extol", correct: true},
            {text: "Berry", correct: false},
            {text: "Rubins", correct: false},
        ],
        img: "berry.png",
    },
    {
        question: "What is the name of the mushroom that Dr. Hiruluk was given by Chopper?",
        answers: [
            {text: "Waraidake", correct: false},
            {text: "Poidake", correct: false},
            {text: "Amiudake", correct: true},
            {text: "Fugo-Fugo", correct: false},
        ],
        img: "chopper-mushroom.png",
    },
    {
        question: "What is the name of Zoro’s childhood friend?",
        answers: [
            {text: "Kuina", correct: true},
            {text: "Kairen", correct: false},
            {text: "Kaya", correct: false},
            {text: "Tashigi", correct: false},
        ],
        img: "zoro's-friend.png",
    },
    {
        question: "What is Usopp’s official role within the Straw Hat Pirates?",
        answers: [
            {text: "Storyteller", correct: false},
            {text: "Captain", correct: false},
            {text: "Prankster", correct: false},
            {text: "Sniper", correct: true},
        ],
        img: "usopp.png",
    },
    {
        question: "What is Sanji's ultimate dream?",
        answers: [
            {text: "To marry Nami", correct: false},
            {text: "To master Observation Haki", correct: false},
            {text: "To find All Blue", correct: true},
            {text: "To become the greatest chef in the world", correct: false},
        ],
        img: "sanji.png",
    },
    {
        question: "Which part of the ocean does the series start in?",
        answers: [
            {text: "West Blue", correct: false},
            {text: "East Blue", correct: true},
            {text: "North Blue", correct: false},
            {text: "South Blue", correct: false},
        ],
        img: "one-piece-map.png",
    },
    {
        question: "What is the name of the sword that Zoro uses with his mouth?",
        answers: [
            {text: "Yubashiri", correct: false},
            {text: "Wado Ichimonji", correct: true},
            {text: "Sandai Kitetsu", correct: false},
            {text: "Enma", correct: false},
        ],
        img: "zoro-swords.png",
    },
    {
        question: "Who is the Helmsman of Straw Hat Pirates",
        answers: [
            {text: "Jinbei", correct: true},
            {text: "Franky", correct: false},
            {text: "Zoro", correct: false},
            {text: "Usopp", correct: false},
        ],
        img: "thousandsunny.png",
    },
    {
        question: "What is Sanji's preferred fighting style?",
        answers: [
            {text: "Swordfighting", correct: false},
            {text: "Shooting a slingshot", correct: false},
            {text: "Kicking", correct: true},
            {text: "Punching", correct: false},
        ],
        img: "sanji2.png",
    },
    {
        question: "What is the name of the dog that defends his late owner's shop in Orange Town?",
        answers: [
            {text: "Lassoo", correct: false},
            {text: "Chouchou", correct: true},
            {text: "Linlin", correct: false},
            {text: "Sodom", correct: false},
        ],
        img: "chouchou.png",
    },
    {
        question: "What was Vivi's name while she was in Baroque Works?",
        answers: [
            {text: "Miss Wednesday", correct: true},
            {text: "Miss Valentine", correct: false},
            {text: "Miss Merry Christmas", correct: false},
            {text: "Miss Goldenweek", correct: false},
        ],
        img: "vivi.png",
    },
    {
        question: "What is the first round of the Davy Back Fight?",
        answers: [
            {text: "Donut Race", correct: false},
            {text: "Groggy Ring", correct: false},
            {text: "Run Roller Around", correct: true},
            {text: "Hit and Dead Ball", correct: false},
        ],
        img: "Davy_Back_Fight_.png",
    },
    {
        question: "What is the name of Water 7's annual storm?",
        answers: [
            {text: "Aqua Laguna", correct: true},
            {text: "Knockup Stream", correct: false},
            {text: "Buster Call", correct: false},
            {text: "Reverie", correct: false},
        ],
        img: "Water_7.png",
    },
    {
        question: "What is the name of Ryuma's sword?",
        answers: [
            {text: "Sandai Kitetsu", correct: false},
            {text: "Wado Ichimonji", correct: false},
            {text: "Enma", correct: false},
            {text: "Shusui", correct: true},
        ],
        img: "ryuma.png",
    },
]

questionElement = document.getElementById("question");
answerButton = document.getElementById("answerButtons");
nextButton = document.getElementById("nextBtn");
previewImg = document.getElementById("previewImg");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        previewImg.src = currentQuestion.img;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}


startQuiz();