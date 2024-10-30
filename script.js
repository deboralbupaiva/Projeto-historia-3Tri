const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um gato doméstico que possui consciência, porém um dia seu dono morre e agora você tem que investigar quem matou o seu dono. Você foi levado para a casa da filha de seu antigo dono, você já conhecia ela, mas ela está sempre muito ocupada com o trabalho, o que é bom levando em consideração que você está no meio de uma investigação. A casa é bem moderna e cheia de tecnologias, o que lembra sua antiga morada, já que seu dono era dono de uma empresa relacionada a tecnologia. Você escuta um som estranho atrás de você, quando se vira encontra um pequeno robô te encarando.",
        alternativas: [
            {
                texto: "Você reage de forma agressiva e rosna para o robô, rejeitando o desconhecido.",
                afirmacao: "Ao chegar na sua nova casa, você estranhou o ambiente e a tecnologia desconhecidos no início."
            },
            {
                texto: "Você mia com curiosidade, mas se esfrega no robô como forma de amizade",
                afirmacao: "Você foi curioso, mas amigável com a tecnologia no início."
            }
        ]
    },
    {
        enunciado: "O robô não parece entender o que você quis dizer, mas antes que ele mostrasse uma resposta a sua nova dona aparece e briga com você alertando para ficar longe da máquina para não estragar, ela é bem diferente do pai, ele era mais gentil. Você fica com raiva e sai correndo pela porta aproveitando a deixa para dar início a investigação. Você vai até a casa de seu antigo dono para coletar informações e possíveis provas, ao chegar você percebe que foi seguido pelo robô, então você",
        alternativas: [
            {
                texto: "Tem a ideia de usar ele para coletar informações já que nunca fez isso antes.",
                afirmacao: "Ao investigar a casa do antigo dono, você usou a tecnologia como uma aliada para conseguir fazer algo novo, e conseguiu coletar informações para a sua investigação rapidamente, mas nem todas elas estavam certas."
            },
            {
                texto: "Investiga por conta própria, pois não precisa de ajuda de um robô.",
                afirmacao: "Ao investigar a casa do antigo dono, você teve dificuldades para obter informações por conta própria e demorou um pouco, mas conseguiu se virar."
            }
        ]
    },
    {
        enunciado: "Após uma breve observação nos dados coletados, percebe que não é o suficiente para chegar a uma conclusão, a única coisa que chamou sua atenção foi uma foto antiga de duas crianças, uma delas parece ser seu dono quando quando mais novo, algo parece está faltando na casa, mas você não sabe o que, então resolve interrogar possíveis suspeitos ou testemunhas. Quando um passarinho que o seu antigo dono alimentava aparece na janela, você o interroga, ele não sabia de muita coisa, mas te lembra sobre o novo vizinho de seu antigo dono, que trabalhava com ele e vivia visitando a sua casa com frequência e parecia estar sempre por perto. Você então decide",
        alternativas: [
            {
                texto: "Confrontar o vizinho, mesmo sem provas.",
                afirmacao: "Após o aparecimento de um possível suspeito, você teve coragem em querer enfrentar o vizinho, mas foi arriscado fazer isso sem provas e isso podia revelar que você não é um gato comum."
            },
            {
                texto: "Observar cuidadosamente o vizinho e tentar obter informações.",
                afirmacao: "Após o aparecimento de um possível suspeito, você foi cuidadoso e optou por observar o vizinho para tentar obter informações para poder concluir algo."
            }
        ]
    },
    {
        enunciado: "Você vai até a casa do vizinho, mas ao chegar lá se depara com uma casa vazia, ao vasculhar a casa você encontra a mesma foto de antes, mas com o rosto da criança que parecia ser seu dono riscado, o que torna o vizinho ainda mais suspeito, mas com falta de provas não foi possível seguir adiante. Você volta andar pelo bairro, e para na frente da casa da vizinha fofoqueira, ela sabe tudo de todo mundo, mas nem tudo é verdade. Você então decide",
        alternativas: [
            {
                texto: "Tentar coletar informações da vizinha fofoqueira, mesmo não sendo uma fonte confiável. ",
                afirmacao: " Ao chegar na frente da casa da vizinha fofoqueira, você optou por obter mais informações, o que é bom em uma investigação, mas não levar a fonte em consideração pode ser arriscado."
            },
            {
                texto: "Seguir em frente, pois informações falsas só iriam atrapalhar.",
                afirmacao: "Ao chegar na frente da casa da vizinha fofoqueira, você optou por não obter informações de uma fonte não confiável, o que foi bom."
            }
        ]
    },
    {
        enunciado: "Antes que você se movesse ouve a vizinha exclamando:”A ITS está torturando pessoas em experimentos tecnológicos! Que absurdo!” ITS é o nome da empresa do seu antigo dono, você então olha pela janela e vê a vizinha lendo uma notícia no computador, então logo percebe que se trata de uma fake news, pois a fonte é suspeita e a empresa e seu dono acreditavam que a tecnologia deve ajudar os seres humanos, e se ela oferece risco não deve ser utilizada. Você estranha a notícia, pois a empresa nunca tinha sido alvo de notícias como essa, pois rapidamente conseguiam apagar elas e processar os responsáveis.",
        alternativas: [
            {
                texto: "Duvidar da empresa e de seu dono, pois se a notícia ainda está na internet pode ser que seja verdade, e se foi por está envolvido nisso que ele morreu?",
                afirmacao: "Ao ser confrontado por notícias duvidosas, você chegou a acreditar nelas, as fake news são realmente poderosas e fizeram até mesmo quem conhece a verdade duvidar dela."
            },
            {
                texto: "Confiar que a empresa e o seu dono são inocentes.",
                afirmacao: "Ao ser confrontado por notícias duvidosas, você acreditou no que sabia que era verdade apesar das mentiras."
            }
        ]
    },
    {
        enunciado: "Então você resolve ir para a sua nova casa. Chegando lá sua nova cuidadora parece estar procurando algo e quando olha na sua direção fica brava e briga com você, você nota que o robô ainda estava te seguindo o tempo todo e conclui que a briga é pela advertência de antes. Mas então você percebe que uma possível suspeita está na  sua frente, afinal ela seria a única, possível herdeira da fortuna do seu dono então",
        alternativas: [
            {
                texto: "Reagir de maneira agressiva demonstrando que você não gosta dela pois ela é uma possível suspeita.",
                afirmacao: "Ao suspeitar da filha do seu antigo dono, você enfrentou ela de forma agressiva, por causa disso ela ficou chateada."
            },
            {
                texto: "Ficar calado evitando mais problemas e continuar a investigação silenciosamente.",
                afirmacao: "Ao suspeitar da filha do seu antigo dono, você ficou em silêncio e escolheu continuar investigando, ela te observou e ficou calada."
            }
        ]
    },
    {
        enunciado: "Ela te olha em silêncio, dá um longo suspiro e fala:”Eu sei que não tá sendo fácil para você, também não está para mim, então por favor não complique as coisas e seja bonzinho!”. Ela sai da sala, você fica chateado, como ela pode parecer tão calma com a situação?! Dois dias se passam e sua investigação não evolui muito, você está andando perto da sua antiga casa ainda buscando por pista, e acaba esbarrando com um homem na sua frente, e quando olha para o rosto dele vê que é o vizinho suspeito sorrindo para você",
        alternativas: [
            {
                texto: "Você fica assustado.",
                afirmacao: "Ao ser encarado pelo vizinho estranho, você ficou com medo."
            },
            {
                texto: "Você fica bravo.",
                afirmacao: "Ao ser se deparar com o vizinho estranho, você ficou bravo."
            }
        ]
    },
    {
        enunciado: "Ele te agarra e fala: “Você é o bichinho de estimação dele né?” Ele parece esta falando consigo mesmo e continua “Eu sempre odiei esse lado dele, sempre sendo o bom moço, sempre conseguindo tudo de mão beijada, sei que no fundo ele se sentia superior. A tecnologia era a única coisa que eu era bom, e ele conseguiu me superar, eu sempre fui a sombra do meu irmão, mas não mais, por isso eu vou destruir tudo que ele construiu e me livrar de tudo que ele tinha, isso inclui você!”. Desesperado você: ",
        alternativas: [
            {
                texto: "Tenta fugir.",
                afirmacao: "Ao ser pego pelo vizinho estranho, você tentou fugir."
            },
            {
                texto: "Arranhar ele com toda força.",
                afirmacao: "Ao ser pego pelo vizinho estranho, você ficou bravo e arranhou ele."
            }
        ]
    },
    {
        enunciado: "Ele então vai atrás  você no meio da rua, mas no meio da sua fuga você escuta uma buzina e logo em seguida o som de algo batendo, tudo fica escuro. Você acorda em um quarto que parece ser uma clínica, o seu corpo dói, mas finalmente encontrou o culpado do assassinato do seu dono",
        alternativas: [
            {
                texto: "Você levanta rapidamente para tentar avisar que o responsável pela morte do seu antigo cuidador foi o vizinho.",
                afirmacao: "Você descobriu que o responsável pela morte do seu antigo cuidador foi o vizinho, mas você foi atropelado e foi parar no hospital, mesmo depois de acordar você se manteve focado em revelar a verdade."
            },
            {
                texto: "Permanece deitado na cama e coloca os pensamentos no lugar.",
                afirmacao: "Você descobriu que o responsável pela morte do seu antigo cuidador foi o vizinho, mas você foi atropelado e foi parar no hospital, mas depois de acordar você se manteve calma e pensou sobre a situação."
            }
        ]
    },
    {
        enunciado: "Sua dona entra na sala e senta ao lado da sua cama e fala:”Me desculpe, você não entende pq é um gato, mas eu tava tentando te manter seguro pois estava investigando a morte do meu pai, foi tudo culpa do meu tio, ele se aproximou do papai e subiu na empresa ITS pra poder destruir ela de dentro pra fora, espalhando fake news e impedindo ela de rebater, isso tudo depois de já ter se livrado do meu pai, tudo por causa da inveja, mas graças a você a gente conseguiu pegar ele e coletar a confissão através do robô que vivia te seguindo. Bom garoto” Ela acaricia a sua cabeça.",
        alternativas: [
            {
                texto: "Você aceita o carinho e ronrona.",
                afirmacao: "Sua nova dona revela que também estava investigando o assassinato e as inteções do assassino, e mesmo depois de tudo ela se preocupou com você e te agradeceu por ajudar na investigação, ela te acaricia e você aceita amigavelmente."
            },
            {
                texto: "Você agradece ela por pegar o culpado e se preocupar com você.",
                afirmacao: "Sua nova dona revela que também estava investigando o assassinato e as inteções do assassino, e mesmo depois de tudo ela se preocupou com você e te agradeceu por ajudar na investigação, ela te acaricia e você agradece, porem ao falar sua dona se assusta e te abandona com medo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua investigação...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
