// Array com as perguntas, imagens e respostas
const perguntas = [
    {
        pergunta: "Qual gás compõe a maior parte da atmosfera da Terra??",
        imagem: "https://i.postimg.cc/G3zpQT7h/g-s.jpg",
        alternativas: ["Nitrogênio", "Oxigênio", "Dióxido de carbono"],
        respostaCerta: 0
    },
    {
        pergunta: "Qual é o maior oceano do mundo??",
        imagem: "https://i.postimg.cc/g2LkmSYn/oceano-terra.jpg",
        alternativas: ["Oceano Glacial Ártico", "Oceano Atlântico ", "Oceano Pacífico"],
        respostaCerta: 2
    },
    {
        pergunta: "Em que ano começou a Segunda Guerra Mundial?",
        imagem: "https://i.postimg.cc/rp6ym1mg/segunda-guerra-mundial-causas-paises-envolvidos-e-consequencias.jpg",
        alternativas: ["1938", "1940", "1939"],
        respostaCerta: 2
    },
    {
        pergunta: "Quantos planetas existem no Sistema Solar?",
        imagem: "https://i.postimg.cc/9fGmqDw2/ss-formation-1.jpg",
        alternativas: ["10", "8", "7"],
        respostaCerta: 1
    },
    {
        pergunta: "Qual elemento químico tem o símbolo “Au”?",
        imagem: "https://i.postimg.cc/bJgq34RF/tabela-periodica-ouro-300x300.jpg",
        alternativas: ["Ouro", "Alumínio", "Prata"],
        respostaCerta: 0
    },
    {
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        imagem: "https://i.postimg.cc/C5KStJPM/presidente-brasil-jpg.webp",
        alternativas: ["Floriano Peixoto", "Deodoro da Fonseca", "Getúlio Vargas"],
        respostaCerta: 1
    },
    {
        pergunta: "Qual é o maior órgão do corpo humano?",
        imagem: "https://i.postimg.cc/6q1tNRgr/ossos-destaque-jpg.webp",
        alternativas: ["Pele", "Cérebro", "Pulmões"],
        respostaCerta: 0
    },
    {
        pergunta: "Em que ano foi proclamada a independência do Brasil?",
        imagem: "https://i.postimg.cc/kMjn83G2/fg273336.jpg",
        alternativas: ["1830", "1815", "1822"],
        respostaCerta: 2
    },
    {
        pergunta: "Qual gás as plantas absorvem durante a fotossíntese?",
        imagem: "https://i.postimg.cc/Fs8NWyjm/fotossintese.webp.webp",
        alternativas: ["Dióxido de carbono (CO₂)", "Oxigênio", "Hidrogênio"],
        respostaCerta: 0
    },
    {
        pergunta: "Quantos ossos tem o corpo humano adulto?",
        imagem: "https://i.postimg.cc/qMMNVxh3/corpo-humano-e-formado-de-atomos-1599222824908-v2-1x1.jpg",
        alternativas: ["206", "214", "196"],
        respostaCerta: 0
    },
    // Adicione mais perguntas aqui
];

let pontuacao = 0;
let perguntaAtual = 0;

function iniciarJogo() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("jogo").style.display = "flex";
    mostrarPergunta();
}

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = pergunta.pergunta;
    document.getElementById("imagem").src = pergunta.imagem;

    const botoes = document.querySelectorAll(".alternativas button");
    botoes.forEach((botao, index) => {
        botao.innerText = pergunta.alternativas[index];
    });

    document.getElementById("mensagem").innerText = '';
}

function responder(respostaEscolhida) {
    const pergunta = perguntas[perguntaAtual];
    if (respostaEscolhida === pergunta.respostaCerta) {
        document.getElementById("mensagem").innerText = "Resposta correta!";
        document.getElementById("mensagem").style.color = "green";
        pontuacao += 10;
    } else {
        document.getElementById("mensagem").innerText = "Resposta incorreta!";
        document.getElementById("mensagem").style.color = "red";
    }

    document.getElementById("pontuacao").innerText = pontuacao;

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        setTimeout(mostrarPergunta, 1000);
    } else {
        finalizarJogo();
    }
}

function finalizarJogo() {
    document.getElementById("jogo").style.display = "none";
    document.getElementById("resultado").style.display = "flex";

    const mensagem = pontuacao >= 60 ? "Você conseguiu!" : "Tente novamente!";
    document.getElementById("resultadoMensagem").innerText = `Pontuação Final: ${pontuacao}. ${mensagem}`;
}

function reiniciarJogo() {
    pontuacao = 0;
    perguntaAtual = 0;
    document.getElementById("resultado").style.display = "none";
    document.getElementById("inicio").style.display = "flex";
}
