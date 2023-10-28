var pp = [
    ["images/medio/p1.jpeg",
        "O que é mitocôndria e qual é a sua função na célula?",
        "Responsável pela produção de energia em forma de ATP.",
        "Transporte de substâncias dentro da célula.",
        "Suporte estrutural da célula e transporte intracelular.",
        "Envolvida na síntese de proteínas.",
        "A mitocôndria é responsável pela produção de energia em forma de ATP na célula."
    ],
    ["images/medio/p2.jpeg",
        "Explique o processo de mitose e sua importância para os organismos multicelulares.",
        "Divisão celular resultando em duas células geneticamente idênticas. Essencial para o crescimento, desenvolvimento e reparo de tecidos em organismos multicelulares.",
        "Forma de reprodução assexuada em células procarióticas.",
        "Transporte ativo de substâncias contra um gradiente de concentração.",
        "Captura de partículas do ambiente em vesículas membranosas.",
        "A mitose é a divisão celular que resulta em duas células geneticamente idênticas. Essencial para o crescimento, desenvolvimento e reparo de tecidos em organismos multicelulares."
    ],
    ["images/medio/p3.jpg",
    "O que é o retículo endoplasmático e qual é a sua função na célula?",
    "Rede de membranas interconectadas presentes no citoplasma. O retículo endoplasmático rugoso possui ribossomos associados e está envolvido na síntese de proteínas. O retículo endoplasmático liso não possui ribossomos e está envolvido na síntese de lipídios e detoxificação de substâncias.",
    "Organela encontrada em células eucarióticas, responsável pela produção de energia em forma de ATP.",
    "Componentes do citoesqueleto formados por proteínas tubulinas. Desempenham papel crucial no suporte estrutural da célula, organização interna e transporte intracelular.",
    "Pequenas vesículas membranosas envolvidas no transporte de substâncias dentro da célula."
    ]
    ["images/medio/p4.jpeg",
        "Explique a diferença entre cromatina e cromossomos.",
        "Cromatina é a forma relaxada do DNA composta por filamentos de DNA e proteínas. Cromossomos são estruturas condensadas de DNA que se formam durante a divisão celular.",
        "Pe quenas vesículas que contêm enzimas digestivas.",
        "Organelas responsáveis pela síntese de lipídios na célula.",
        "Componentes do citoesqueleto formados por proteínas tubulinas.",
        "A cromatina é a forma relaxada do DNA composta por filamentos de DNA e proteínas. Cromossomos são estruturas condensadas de DNA que se formam durante a divisão celular."
    ],
    ["images/medio/p5.jpg",
        "O que é a endocitose e quais são os dois principais tipos?",
        "Processo de captura de partículas ou substâncias do ambiente em vesículas membranosas. Os dois principais tipos são a fagocitose e a pinocitose.",
        "Formação de gametas durante a reprodução celular.",
        "Mecanismo de transporte passivo que permite a saída de substâncias da célula por meio de vesículas.",
        "Mecanismo de transporte ativo que utiliza energia para movimentar substâncias contra um gradiente de concentração.",
        "A endocitose é o processo de captura de partículas ou substâncias do ambiente em vesículas membranosas. Os dois principais tipos são a fagocitose (englobamento de partículas sólidas) e a pinocitose (ingestão de líquidos e solutos dissolvidos)."
    ],
    ["images/medio/p6.jpg",
        "Qual é o papel dos microtúbulos na célula?",
        "Componentes do citoesqueleto formados por proteínas tubulinas. Desempenham papel crucial no suporte estrutural da célula, organização interna e transporte intracelular.",
        "Responsáveis pelo armazenamento de substâncias na célula.",
        "Enzimas digestivas intracelulares.",
        "Produção de energia na forma de ATP.",
        "Os microtúbulos são componentes do citoesqueleto formados por proteínas tubulinas. Desempenham papel crucial no suporte estrutural da célula, na organização interna e no transporte intracelular."
    ],
    ["images/medio/p7.jpg",
        "O que é a meiose e qual é a sua importância na reprodução?",
        "Processo de divisão celular especializado que reduz o número de cromossomos pela metade, resultando em células geneticamente diferentes. Fundamental na produção de gametas para a reprodução sexual.",
        "Forma de reprodução assexuada em células procarióticas.",
        "Processo de divisão celular no qual uma célula-mãe se divide em quatro células geneticamente diferentes.",
        "Produção de energia na forma de ATP em células eucarióticas.",
        "A meiose é um processo de divisão celular especializado que reduz o número de cromossomos pela metade, resultando em células geneticamente diferentes. É fundamental na produção de gametas para a reprodução sexual."
    ],
    ["images/medio/p8.jpg",
        "O que é osmose e como ela afeta as células?",
        "Movimento de água através de uma membrana semipermeável, do meio menos concentrado para o mais concentrado. Isso pode levar à entrada ou saída de água das células, afetando sua forma e função.",
        "Processo de divisão celular no qual uma célula-mãe se divide em quatro células geneticamente diferentes.",
        "Estruturas responsáveis pela produção de energia na forma de ATP em células eucarióticas.",
        "Processo de obtenção de energia a partir de substâncias orgânicas na ausência de oxigênio.",
        "A osmose é o movimento de água através de uma membrana semipermeável, do meio menos concentrado para o mais concentrado. Isso pode levar à entrada ou saída de água das células, afetando sua forma e função."
    ],
    ["images/medio/p9.jpg",
        "O que são ribossomos e qual é o seu papel na síntese de proteínas?",
        "Organelas compostas por RNA ribossômico e proteínas. São os locais de síntese de proteínas na célula, onde a informação genética do RNA mensageiro é traduzida em cadeias de aminoácidos.",
        "Organelas responsáveis pelo armazenamento de substâncias na célula.",
        "Enzimas digestivas intracelulares.",
        "Componentes do citoesqueleto formados por proteínas tubulinas.",
        "Os ribossomos são organelas compostas por RNA ribossômico e proteínas. São os locais de síntese de proteínas na célula, onde a informação genética do RNA mensageiro é traduzida em cadeias de aminoácidos."
    ]
];


let epergunta = []

for(let i = 0; i < pp.length; i++) {
    epergunta[i] = i
}

let pergunta = []
let npergunta = 0
const qntdperguntas = 5
let opc = [1,2,3,4]
let acertos = 0
{ //escolhe pergunta
    for(let i = 0; i < epergunta.length; i++) {
        t = parseInt(Math.random() * epergunta.length)
        aux = epergunta[i]
        epergunta[i] = epergunta[t]
        epergunta[t] = aux
    }

}
function criarPergunta() {
    pergunta = pp[epergunta[npergunta]]
    document.getElementById("titulop").innerHTML = pergunta[1]

for(let i = 0; i <=3; i++) {
   let n = parseInt(Math.random() * 4)
   let temp = opc[i]
   opc[i] = opc[n]
   opc[n] = temp
}

document.getElementById("oxd").src = pergunta[0]
document.getElementById("alt1").innerHTML = pergunta[opc[0]+1]
document.getElementById("alt2").innerHTML = pergunta[opc[1]+1]
document.getElementById("alt3").innerHTML = pergunta[opc[2]+1]
document.getElementById("alt4").innerHTML = pergunta[opc[3]+1]
}

let respondeu = false

function resposta(escolha) {
    if (respondeu == false) {
        for(let i = 1; i <= 4; i ++) {
            let aux = "alt" + i
            if(document.getElementById(aux).innerHTML == pergunta[2]) {
                document.getElementById(aux).style.backgroundColor = "green"
            } else {
                document.getElementById(aux).style.backgroundColor = "red"
            }
            document.getElementById("opacidade").style.display = "flex"
        }
        if(escolha == 1) {
            document.getElementById("acertou?").innerHTML = "Acertou!!!"
            acertos++
        } else {
            document.getElementById("acertou?").innerHTML = "Errou"
        }
        respondeu = true
        document.getElementById("resp").style.display = "flex"
        document.getElementById("explicacao").innerHTML = pergunta[6]
        
    }
    

}

function proxPerg() {
    
    if(npergunta < qntdperguntas - 1) {
        npergunta++
        document.getElementById("alt1").style.backgroundColor = "transparent"
        document.getElementById("alt2").style.backgroundColor = "transparent"
        document.getElementById("alt3").style.backgroundColor = "transparent"
        document.getElementById("alt4").style.backgroundColor = "transparent"
        document.getElementById("opacidade").style.display = "none"

        respondeu = false
    
        criarPergunta()
    } else {
        document.getElementById("divperg").style.display = "none"
        document.getElementById("resp").style.display = "none"
        document.getElementById("fimquiz").style.display = "flex"
        document.getElementById("acertos").innerHTML = "Você Acertou " + acertos

    }

}
criarPergunta()

document.getElementsByTagNameNS
