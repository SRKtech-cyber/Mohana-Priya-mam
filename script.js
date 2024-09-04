document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "What is the atomic number of Carbon?",
            options: ["6", "12", "14"],
            answer: "6"
        },
        {
            lesson: "Which of the following is an example of a covalent bond?",
            options: ["H₂O", "NaCl", "MgO"],
            answer: "H₂O"
        },
        {
            lesson: "What is the pH value of a neutral solution?",
            options: ["7", "0", "14"],
            answer: "7"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
