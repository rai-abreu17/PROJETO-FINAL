// Array com as perguntas e respostas
// Array com as perguntas e respostas
// ensinando commit
// teste

const quizData = [
    //faceis 
    {
        question: "Qual foi o primeiro Shichibukai derrotado por Luffy?",//fácil
        answers: [
            { text: "Crocodile", correct: true },
            { text: "Gecko Moriah", correct: false },
            { text: "Donquixote Doflamingo", correct: false },
            { text: "Bartholomew Kuma", correct: false }
        ],
        //fazer lá embaixo if level == 1 então mostrar bolinha  
        level: 1
    },
    {
        question: "O Itadori é hospedeiro de qual desses?", //fácil
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

    {
        question: "Qual é o Hashira mais forte?",
        answers: [
            { text: "Rengoku", correct: false },
            { text: "Tomioka", correct: false },
            { text: "Obanai", correct: false },
            { text: "Gyomei Himejima", correct: true }
        ],
        level: 1
    },

    {
        question: "Qual é o nome da técnica que Goku usou para derrotar o Majin Boo?",
        answers: [
            { text: "Genki Dama", correct: true },
            { text: "Kamehameha", correct: false },
            { text: "Kaio-ken", correct: false },
            { text: "Super Saiyajin 3", correct: false }
        ],
        level: 1
    },

    {
        question: "Quantos anos se passaram entre o fim da saga de Majin Boo e o começo do Torneio do Poder?",
        answers: [
            { text: "5 Anos", correct: false },
            { text: "3 Anos", correct: false },
            { text: "10 Anos", correct: true },
            { text: "1 ano", correct: false }
        ],
        level: 1
    },

    //media
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

    //dificil
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
//definir qual o nivel da pergunta 
//if (level == 1) {

//mostrar bolinha verde  
//}
/*elseif (level == 2){
    //mostrar bolinha laranja 
}
else {
    //mostrar bolinha vermelha  
}*/

//let nome = prompt("Bem vindo ao Quiz, qual seu nome? ")

let currentQuestionIndex = 0; // Índice para rastrear a pergunta atual

// Função para carregar a pergunta atual
function loadQuestion() { //Função principal

    const quizContainer = document.getElementById('quiz'); //pega a div que tem id quiz
    quizContainer.innerHTML = ""; // Limpa o conteúdo anterior (importante pra segunda pergunta em diante)

    // Pega a pergunta atual com base no índice
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.createElement('p');
    questionElement.id = "idQuestion"
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



