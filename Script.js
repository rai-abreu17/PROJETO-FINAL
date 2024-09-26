

const quizData = [
    // fase 1 (8 perguntas)

    {
        question: "Qual foi o primeiro Shichibukai derrotado por Luffy?",
        answers: [
            { text: "Crocodile", correct: true },
            { text: "Gecko Moriah", correct: false },
            { text: "Donquixote Doflamingo", correct: false },
            { text: "Bartholomew Kuma", correct: false }
        ],

        level: 1
    },
    {
        question: "O Itadori é hospedeiro de qual desses?",
        answers: [
            { text: "Kurama", correct: false },
            { text: "Ryomen Sukuna", correct: true },
            { text: "Momoshiki Otsutsuki", correct: false },
            { text: "Jinchuuriki", correct: false }

        ],
        level: 1
    },

    {
        question: "Quem é o personagem principal de Demon Slayer? ",
        answers: [
            { text: "Tomioka", correct: false },
            { text: "Zenitsu", correct: false },
            { text: "Tanjiro", correct: true },
            { text: "Nezuko", correct: false }
        ],
        level: 1
    },

    {
        question: "Qual o nome da técnica que permite ao usuário transferir sua própria vida para outra pessoa? ",
        answers: [
            { text: "Izanagi", correct: false },
            { text: "Izanami", correct: false },
            { text: "Shiki Fujin", correct: true },
            { text: "Kuchiyose: No Jutsu", correct: false }
        ],
        level: 1
    },
    {
        question: "Qual foi o Yonkou que morreu na guerra de Marineford?",//Fácil
        answers: [
            { text: "Barba Negra", correct: false },
            { text: "Shanks", correct: false },
            { text: "Big Mom", correct: false },
            { text: "Barba Branca", correct: true }
        ],
        level: 1
    },

    {
        question: "Qual desses é o pai de Megumi Fushiguro?",
        answers: [
            { text: "Toji", correct: true },
            { text: "Satoru Gojo", correct: false },
            { text: "Yuta Okkotsu", correct: false },
            { text: "Gabimaru", correct: false }
        ],
        level: 1
    },

    {
        question: "Qual destes Jinchuuriki não foi capturado pela Akatsuki? ",
        answers: [
            { text: "Gaara", correct: false },
            { text: " Yagura", correct: false },
            { text: "Roshi", correct: true },
            { text: "Han", correct: false }
        ],
        level: 1
    },

    {
        question: "Qual jutsu de Naruto Uzumaki foi inspirado em um animal? ",
        answers: [
            { text: "Rasengan ", correct: true },
            { text: "Rasenshuriken", correct: false },
            { text: "Onda Trovejante", correct: false },
            { text: "Multi-clones das Sombras", correct: false }
        ],
        level: 1
    },


    //fase 2 (8 perguntas)

    {
        question: "Qual é o Hashira mais forte?",
        answers: [
            { text: "Rengoku", correct: false },
            { text: "Tomioka", correct: false },
            { text: "Obanai", correct: false },
            { text: "Gyomei Himejima", correct: true }
        ],
        level: 2
    },

    {
        question: "Qual é o nome da técnica que Goku usou para derrotar o Majin Boo?",
        answers: [
            { text: "Genki Dama", correct: true },
            { text: "Kamehameha", correct: false },
            { text: "Kaio-ken", correct: false },
            { text: "Super Saiyajin 3", correct: false }
        ],
        level: 2
    },

    {
        question: "Quantos anos se passaram entre o fim da saga de Majin Boo e o começo do Torneio do Poder?",
        answers: [
            { text: "5 Anos", correct: false },
            { text: "3 Anos", correct: false },
            { text: "10 Anos", correct: true },
            { text: "1 ano", correct: false }
        ],
        level: 2
    },


    {
        question: "Qual o nome da maldição que Yuta Okkotsu carrega? ",
        answers: [
            { text: "Rika Orimoto", correct: true },
            { text: "Kyubi", correct: false },
            { text: "Hanami", correct: false },
            { text: "Dagon", correct: false }
        ],
        level: 2
    },
    {
        question: "Qual o nome do navio do considerado rei dos piratas?",
        answers: [
            { text: "Moby Dick", correct: false },
            { text: "Oro Jackson", correct: true },
            { text: "Going Merry", correct: false },
            { text: "Red Force", correct: false }
        ],
        level: 2
    },
    {
        question: "Qual é o nome do planeta onde Goku treinou com o Senhor Kaioh? ",
        answers: [
            { text: " Namekusei", correct: false },
            { text: "Planeta Vegeta", correct: false },
            { text: "Planeta Kaioh", correct: true },
            { text: "Terra", correct: false }
        ],
        level: 2
    },
    {
        question: "Qual é a técnica amaldiçoada de Satoru Gojo? ",
        answers: [
            { text: "Controle de Fogo", correct: false },
            { text: "Expansão de Domínio: Infinito Vazio", correct: true },
            { text: "Manipulação de Sombras", correct: false },
            { text: "Controle de Raio", correct: false }
        ],
        level: 2
    },

    {
        question: "Qual o nome do mestre dos Hashiras? ",
        answers: [
            { text: "Muzan", correct: false },
            { text: "Urokodaki", correct: true },
            { text: "Genya", correct: false },
            { text: "Kanroji", correct: false }
        ],
        level: 2
    },

    //fase 3 (8 perguntas)


    {
        question: "Qual é a técnica de expansão de domínio de Satoru Gojo?  ",
        answers: [
            { text: "Jardim dos Espinhos", correct: false },
            { text: "Mar de Areia e Sangue", correct: false },
            { text: "Céu Sem Limites", correct: false },
            { text: "Infinito Vazio", correct: true }
        ],
        level: 3
    },

    {
        question: "O poder da fruta Ope Ope no Mi pertence a qual personagem?",
        answers: [
            { text: "Donquixote Doflamingo", correct: false },
            { text: "Monkey D. Luffy", correct: false },
            { text: "Trafalgar Law", correct: true },
            { text: "Eustass Kid", correct: false }
        ],
        level: 3
    },
    {
        question: "Qual é o nome do anjo que serve como mentor de Goku e Vegeta durante o Torneio do Poder?",
        answers: [
            { text: "Whis", correct: true },
            { text: "Vados", correct: false },
            { text: "Beerus", correct: false },
            { text: "Kami", correct: false }
        ],
        level: 3
    },

    {
        question: "Quantos irmão Tanjiro tinha? ",
        answers: [
            { text: "3 irmãos", correct: false },
            { text: "8 irmãos", correct: false },
            { text: "Nenhum", correct: false },
            { text: "5 irmãos", correct: true }
        ],
        level: 3
    },

    {
        question: "Qual o nome da ilha que guarda o tesouro One Piece?",
        answers: [
            { text: "Laugh Tale", correct: true },
            { text: "Ruluka Island", correct: false },
            { text: "Hyokaido", correct: false },
            { text: "Green Bit", correct: false }
        ],
        level: 3
    },

    {
        question: "Qual é o Lua Superior mais forte? ",
        answers: [
            { text: "Kokushibou", correct: true },
            { text: "Doma", correct: false },
            { text: "Akaza", correct: false },
            { text: "Kaigaku", correct: false }
        ],
        level: 3
    },

    {
        question: "Qual é a técnica que permite a Goku e outros Saiyajins transformarem-se em Super Saiyajin Blue?",
        answers: [
            { text: "Kamehameha", correct: false },
            { text: "Super Saiyajin Deus", correct: true },
            { text: "Kaio-ken", correct: false },
            { text: "Genki Dama", correct: false }
        ],
        level: 3
    },

    {
        question: "Qual é o nome do clã que possui a Técnica Amaldiçoada Manipulação das Dez Sombras, utilizada por Megumi Fushiguro em Jujutsu Kaisen ? ",
        answers: [
            { text: "Clã Kamo ", correct: false },
            { text: "Clã Gojo ", correct: false },
            { text: "Clã Zen'in ", correct: true },
            { text: "Clã Inumaki", correct: false }
        ],
        level: 3
    }
];
let nome = prompt("Qual seu nome de jogador(a)?")

let currentQuestionIndex = 0; // Índice para rastrear a pergunta atual
let currentPhase = 1; // começar na fase 1
let incorrectAnswers = 0; //rastreiar o numero de erros 

const maxIncorrectAnswers = 1; //limite de erro por fase
const questionsPerPhase = 8; //numeros de perguntas por fase



// Função para carregar a pergunta atual
function loadQuestion() {

    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = "";

    if (currentPhase === 1) {
        const bolinha = document.createElement('div');
        bolinha.className = "green"
        quizContainer.appendChild(bolinha);
    } if (currentPhase === 2) {
        const bolinha = document.createElement('div');
        bolinha.className = "orange"
        quizContainer.appendChild(bolinha);
    } if (currentPhase === 3) {
        const bolinha = document.createElement('div');
        bolinha.className = "red"
        quizContainer.appendChild(bolinha);
    }

    // Pega a pergunta atual com base no índice
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.createElement('p');
    questionElement.id = "idQuestion"
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = "idButtonsContainer"

    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    quizContainer.appendChild(questionElement);

    // Cria botões para as respostas
    currentQuestion.answers.forEach((answerData, index) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answerData.text;
        answerButton.className = "answer";
        answerButton.onclick = () => checkAnswer(answerData.correct, index);
        buttonsContainer.appendChild(answerButton);
    });

    quizContainer.appendChild(buttonsContainer);
}

// Função para verificar a resposta
function checkAnswer(isCorrect, index) {

    const button = document.getElementsByClassName('answer')

    if (isCorrect) {

        button[index].style.backgroundColor = "green";


        // Espera um momento antes de carregar a próxima pergunta
        setTimeout(() =>
            nextQuestion(), 1000);

    } else {
        incorrectAnswers++
        button[index].style.backgroundColor = "red";
        setTimeout(() =>
            nextQuestion(), 1000);




    }



}

//função para avançar para a proxima fase
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex % questionsPerPhase === 0) {
        showPhaseCompletionMessage();
    } else {
        if (incorrectAnswers < maxIncorrectAnswers) {
            loadQuestion();
        } else {
            currentQuestionIndex = 0
            incorrectAnswers = 0
            loadQuestion();
            window.alert(`Que pena ${nome}, você errou a pergunta. Tente novamente!`)
        }

    }
}

//mensagem se a pessoa  vencer a fase
function showPhaseCompletionMessage() {
    const quizContainer = document.getElementById('quiz');
    let message = "";

    switch (currentPhase) {
        case 1:
            message = `Parabéns jogador(a) ${nome} Você passou pela primeira fase!!! Se prepare para a próxima fase.`
            break;
        case 2:
            message = `Você passou pela segunda fase jogador(a) ${nome}!!! Está quase chegando lá.`
            break;
        case 3:
            message = `Você é um mestre dos animes jogador(a) ${nome}!!! Completou todas as fases`
            break;
    }
    quizContainer.innerHTML = `<p>${message}</p>`;
    currentPhase++;
    incorrectAnswers = 0; // reiniciar os erros na proxima fase

    //avançar para a proxima fase
    if (currentPhase <= 3) {
        setTimeout(() =>
            loadQuestion(), 3000);
    }
}

// menssagem caso a pessoa seja derrotada
function showDeFeatMessage() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<P>Você errou mais de 3 respostas (|︵|)! Foi derrotado na fase ${currentPhase}!</p>`;
}

// Função para exibir a mensagem final ao término do quiz
function showFinalMessage() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = "<p>Parabéns! Você completou o quiz.</p>";

}

// Carrega a primeira pergunta ao iniciar
loadQuestion();

//exibir mensagem ao passa o mouse em cima do circle
const tooltip = document.getElementById('tooltip');
const greenCircle = document.querySelector('.green');

greenCircle.addEventListener('mouseenter', (event) => {
    tooltip.innerText = event.target.getAttribute('data-tooltip');
    tooltip.style.display = 'block';
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
});

greenCircle.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});

const orangeCircle = document.querySelector('.orange');

orangeCircle.addEventListener('mouseenter', (event) => {
    tooltip.innerText = event.target.getAttribute('data-tooltip');
    tooltip.style.display = 'block';
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
});

greenCircle.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});

const redCircle = document.querySelector('.red');
redCircle.addEventListener('mouseenter', (event) => {
    tooltip.innerText = event.target.getAttribute('data-tooltip');
    tooltip.style.display = 'block';
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
});

greenCircle.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});

