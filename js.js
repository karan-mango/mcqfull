var questions = [
    {
        question: "Excel is a ____ program developed by Microsoft.",
        answers: [
            { text: "Spreadsheet", correct: true },
            { text: "Document", correct: false },
            { text: "Data management", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "What is the extension of a Microsoft Excel file?",
        answers: [
            { text: "msxcl", correct: false },
            { text: "xcl", correct: false },
            { text: "xlsx", correct: true },
            { text: "xlsm", correct: false }
        ]
    },
    {
        question: "Shortcut key CTRL+D is used to ____.",
        answers: [
            { text: "Open font dialog box", correct: false },
            { text: "Open format cells dialog box", correct: false },
            { text: "Shift current cell's value in the right cell", correct: false },
            { text: "Fill down in the selection", correct: true }
        ]
    },
    {
        question: "Which logical function returns TRUE if all arguments evaluate TRUE; FALSE if not?",
        answers: [
            { text: "OR", correct: false },
            { text: "AND", correct: true },
            { text: "IF", correct: false },
            { text: "ANDIF", correct: false }
        ]
    },
    {
        question: "Which logical function returns TRUE if one or more arguments evaluate to TRUE; FALSE if all arguments evaluate to FALSE?",
        answers: [
            { text: "OR", correct: true },
            { text: "AND", correct: false },
            { text: "IF", correct: false },
            { text: "ANDIF", correct: false }
        ]
    },
    {
        question: "Which function is used to create a date with year, month, and day?",
        answers: [
            { text: "DATE()", correct: true },
            { text: "DATEDIF()", correct: false },
            { text: "DATEVALUE()", correct: false },
            { text: "CURDATE()", correct: false }
        ]
    },
    {
        question: "What is the keyboard shortcut to insert a SUM formula in MS Excel?",
        answers: [
            { text: "CTRL+=", correct: false },
            { text: "ALT+=", correct: true },
            { text: "ALT+S", correct: false },
            { text: "CTRL+ALT+=", correct: false }
        ]
    },
    {
        question: "Which feature is used to wrap extra-long text into multiple lines?",
        answers: [
            { text: "WordWrap", correct: false },
            { text: "Letter Wrap", correct: false },
            { text: "TextWrap", correct: false },
            { text: "WrapText", correct: true }
        ]
    },
    {
        question: "Which feature is used to rotate the text diagonally or vertically of the selected cells in MS Excel?",
        answers: [
            { text: "Orientation", correct: true },
            { text: "Text Layout", correct: false },
            { text: "TextFlip", correct: false },
            { text: "CellOrientation", correct: false }
        ]
    }
];




const start = document.querySelector('.start-quiz');
const ques_cont = document.querySelector('.ques-cont');
let score = 0; // Initialize score variable
let ques_index = 0;

const qe = document.querySelector('#ques');
const next = document.querySelector('#next');
const option_cont = document.querySelector('.options-cont');
const scoreDisplay = document.createElement('div'); // Create score display element

scoreDisplay.classList.add('score');
ques_cont.appendChild(scoreDisplay); // Append score display to question container

function start_quiz() {
    score = 0; // Reset score
    ques_index = 0; // Reset question index
    start.style.display = 'none';
    ques_cont.style.display = 'block';
    render_ques();
}

function render_ques() {
    if (ques_index >= questions.length) {
        // Show score when quiz is completed
        showScore();
        return;
    }
    
    option_cont.innerHTML = '';
    let q = questions[ques_index];
    qe.textContent = `Question ${ques_index + 1}: ${q.question}`;
    
    q.answers.forEach((element, index) => {
        let btn = document.createElement('button');
        btn.classList.add('options');
        btn.textContent = `${index + 1} : ${element.text}`;
        option_cont.appendChild(btn);
        btn.dataset.correct = element.correct;

        btn.addEventListener('click', () => {
            checkans(btn);
            disableopt();
        });
    });
}

function disableopt() {
    var optionButtons = document.querySelectorAll('.options');
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('green');
        } else {
            button.classList.add('red');
        }
    });
}

function checkans(btn) {
    if (btn.dataset.correct === 'true') {
        btn.classList.add('green');
        score++; // Increase score for correct answer
    } else {
        btn.classList.add('red');
    }
}

next.addEventListener('click', () => {
    ques_index++;
    render_ques();
});

function showScore() {
    console.log(score)
    ques_cont.style.display = 'none'; // Hide questions
    scoreDisplay.textContent = `Your score is: ${score} out of ${questions.length}`; // Display score
    scoreDisplay.style.display = 'block'; // Show score
}