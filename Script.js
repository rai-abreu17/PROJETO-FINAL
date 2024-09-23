// Array com as perguntas e respostas
// Array com as perguntas e respostas
// ensinando commit
// teste

const quizData = [
    {
        question: "O poder da fruta Ope Ope no Mi pertence a qual personagem?",
        answers: [
            { text: "Donquixote Doflamingo", correct: false },
            { text: "Monkey D. Luffy", correct: false },
            { text: "Trafalgar Law", correct: true },
            { text: "Eustass Kid", correct: false }
        ]
    },

    {
        question: "Qual o nome da ilha que guarda o tesouro One Piece?",
        answers: [
            { text: "Laugh Tale", correct: true },
            { text: "Ruluka Island", correct: false },
            { text: "Hyokaido", correct: false },
            { text: "Green Bit", correct: false }
        ]
    },
    {
        question: "Qual o nome do navio do considerado rei dos piratas?",
        answers: [
            { text: "Moby Dick", correct: false },
            { text: "Oro Jackson", correct: true },
            { text: "Going Merry", correct: false },
            { text: "Red Force", correct: false }
        ]
    },
    {
        question: "Qual foi o primeiro Shichibukai derrotado por Luffy?",
        answers: [
            { text: "Crocodile", correct: true },
            { text: "Gecko Moriah", correct: false },
            { text: "Donquixote Doflamingo", correct: false },
            { text: "Bartholomew Kuma", correct: false }
        ]
    },
    {
        question: "Qual foi o Yonkou que morreu na guerra de Marineford?",
        answers: [
            { text: "Barba Negra", correct: false },
            { text: "Shanks", correct: false },
            { text: "Big Mom", correct: false },
            { text: "Barba Branca", correct: true }
        ]
    },
    {
        question: "O Itadori é hospedeiro de qual desses?",
        answers: [
            { text: "Kurama", correct: false },
            { text: "Ryomen Sukuna", correct: true }
        ]
    }
];

let currentQuestionIndex = 0; // Índice para rastrear a pergunta atual

// Função para carregar a pergunta atual
function loadQuestion() { //Função principal

    const quizContainer = document.getElementById('quiz'); //pega a div que tem id quiz
    quizContainer.innerHTML = ""; // Limpa o conteúdo anterior (importante pra segunda pergunta em diante)

    // Pega a pergunta atual com base no índice
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.createElement('p');
    questionElement.id = "idPergunta"
    const buttonsContainer = document.createElement('div');  //div somente dos botões
    buttonsContainer.id = "idButtonsContainer" // caso precise alterar a div dos botões pegar por esse id

    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    quizContainer.appendChild(questionElement);

    // Cria botões para as respostas
    currentQuestion.answers.forEach((answerData, index) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answerData.text;
        answerButton.className = "answer"; /* class do botão -> usado para alterar css do botão */
        answerButton.onclick = () => checkAnswer(answerData.correct, index);
        buttonsContainer.appendChild(answerButton);
    });

    quizContainer.appendChild(buttonsContainer); //Insere div de botões dentro da div "mãe" (quiz)
}

// Função para verificar a resposta
function checkAnswer(isCorrect, index) {
    //const feedback = document.getElementById('feedback');
    const button = document.getElementsByClassName('answer')

    if (isCorrect) {
        //feedback.textContent = "Resposta correta!";
        //feedback.style.color = "green";
        button[index].style.backgroundColor = "green";
        // Espera um momento antes de carregar a próxima pergunta
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion(); // Carrega a próxima pergunta
                feedback.textContent = ""; // Limpa o feedback
            } else {
                showFinalMessage(); // Exibe mensagem final ao término do quiz
            }
        }, 1000); // Atraso de 1 segundo antes de passar para a próxima pergunta
    } else {
        button[index].style.backgroundColor = "red";
        setTimeout(() => {

            loadQuestion();

        }, 1000);

    }
    //button[index].style.backgroundColor = "#F0F0F0";


}

// Função para exibir a mensagem final ao término do quiz
function showFinalMessage() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = "<p>Parabéns! Você completou o quiz.</p>";
    //document.getElementById('feedback').textContent = ""; // Limpa o feedback
}

// Carrega a primeira pergunta ao iniciar
loadQuestion();



/*
   <div id="quiz">
        <p id="idPergunta"> pergunta </p>
        <div id="idButtonsContainer">
            <button className="answer"></button>
            <button className="answer"></button>
            <button className="answer"></button>
        </div>
    </div>
*/