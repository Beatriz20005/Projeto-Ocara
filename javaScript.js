// Array com as perguntas, imagens e respostas
const perguntas = [
    {
        pergunta: "Qual gás compõe a maior parte da atmosfera da Terra??",
        imagem: "gás.png",
        alternativas: ["Nitrogênio", "Oxigênio", "Dióxido de carbono"],
        respostaCerta: 0
    },
    {
        pergunta: "Qual é o maior oceano do mundo??",
        imagem: "oceano-terra.png",
        alternativas: ["Oceano Glacial Ártico", "Oceano Atlântico ", "Oceano Pacífico"],
        respostaCerta: 2
    },
    {
        pergunta: "Em que ano começou a Segunda Guerra Mundial?",
        imagem: "segunda-guerra-mundial-causas-paises-envolvidos-e-consequencias.png",
        alternativas: ["1938", "1940", "1939"],
        respostaCerta: 2
    },
    {
        pergunta: "Quantos planetas existem no Sistema Solar?",
        imagem: "ss_formation-1.png",
        alternativas: ["10", "8", "7"],
        respostaCerta: 1
    },
    {
        pergunta: "Qual elemento químico tem o símbolo “Au”?",
        imagem: "tabela-periodica-ouro-300x300.jpg",
        alternativas: ["Ouro", "Alumínio", "Prata"],
        respostaCerta: 0
    },
    {
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        imagem: "presidente-brasil.jpg.webp",
        alternativas: ["Floriano Peixoto", "Deodoro da Fonseca", "Getúlio Vargas"],
        respostaCerta: 1
    },
    {
        pergunta: "Qual é o maior órgão do corpo humano?",
        imagem: "ossos_destaque.jpg.webp",
        alternativas: ["Pele", "Cérebro", "Pulmões"],
        respostaCerta: 0
    },
    {
        pergunta: "Em que ano foi proclamada a independência do Brasil?",
        imagem: "fg273336.png",
        alternativas: ["1830", "1815", "1822"],
        respostaCerta: 2
    },
    {
        pergunta: "Qual gás as plantas absorvem durante a fotossíntese?",
        imagem: "fotossintese.webp",
        alternativas: ["Dióxido de carbono (CO₂)", "Oxigênio", "Hidrogênio"],
        respostaCerta: 0
    },
    {
        pergunta: "Quantos ossos tem o corpo humano adulto?",
        imagem: "corpo-humano-e-formado-de-atomos-1599222824908_v2_1x1.jpg",
        alternativas: ["206", "214", "196"],
        respostaCerta: 0
    },
    // Adicione mais perguntas aqui
];

// Variáveis globais
let pontuacao = 0;
let perguntaAtual = 0;

// Inicia o jogo
function iniciarJogo() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    mostrarPergunta();
}

// Mostra a pergunta atual
function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = pergunta.pergunta;
    document.getElementById("imagem").src = pergunta.imagem;

    const botoes = document.querySelectorAll("#alternativas button");
    botoes.forEach((botao, index) => {
        botao.innerText = pergunta.alternativas[index];
    });

    document.getElementById("mensagem").innerText = "";
}

// Verifica a resposta do jogador
function responder(indice) {
    const pergunta = perguntas[perguntaAtual];
    const mensagem = document.getElementById("mensagem");

    if (indice === pergunta.respostaCerta) {
        mensagem.innerText = "Resposta correta!";
        pontuacao += 10;
    } else {
        mensagem.innerText = "Resposta incorreta!";
    }

    document.getElementById("pontuacao").innerText = pontuacao;

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        setTimeout(mostrarPergunta, 2000);
    } else {
        finalizarJogo();
    }
}

// Finaliza o jogo e mostra o resultado
function finalizarJogo() {
    document.getElementById("jogo").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    const mensagemFinal = pontuacao >= 60 ? "Você conseguiu!" : "Tente novamente!";
    document.getElementById("resultadoMensagem").innerText = 
        `Sua pontuação final é: ${pontuacao}. ${mensagemFinal}`;
}

// Reinicia o jogo
function reiniciarJogo() {
    pontuacao = 0;
    perguntaAtual = 0;
    document.getElementById("resultado").style.display = "none";
    document.getElementById("inicio").style.display = "block";
}
