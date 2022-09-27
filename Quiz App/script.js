const quizData = [
    {
        question: 'In which year did India got its Independence?',
        a: '1945',
        b: '1972',
        c: '1947',
        d: '1951',
        correct : 'c'
    }, {
        question: 'Who is India\'s Father of the Nation?',
        a: 'Jawahar Lal Nehru',
        b: 'Subhash Chandra Bose',
        c: 'Vallabh Bhai Patel',
        d: 'Mohandas Karamchand Gandhi',
        correct : 'd'
    }, {
        question: 'Who wrote India\'s National Anthem?',
        a: 'Bankim Chandra Chatterjee',
        b: 'Rabindranath Thakur',
        c: 'Mahatama Gandhi',
        d: 'Khudiram Bose',
        correct : 'b'
    }
];

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("sub");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
let currentQuestion = 0;
let correctAnswers = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked)
            answer = answerEl.id;
    });

    return answer;
};

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuestion].correct)
            correctAnswers++;
        currentQuestion++;
        if(currentQuestion < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>Total Score: ${correctAnswers} / ${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`
        }
    }    
});


