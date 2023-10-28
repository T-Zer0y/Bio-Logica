var pp = [
    ["images/facil/p1.jpeg","O que estuda a citologia?", "O estudo das células e seus componentes", "A origem das células", "A reprodução celular", "A evolução das células", "A citologia, também conhecida como biologia celular, é o ramo da biologia que se dedica ao estudo das células, suas estruturas, funções, composições e processos metabólicos."],
    ["images/facil/p2.jpg","O que é uma célula eucarionte?", "Uma célula com núcleo definido", "Uma célula sem núcleo", "Uma célula vegetal", "Uma célula animal", "Uma célula eucarionte é um tipo de célula que possui um núcleo definido, separado do citoplasma por uma membrana nuclear. Além do núcleo, apresenta diversas organelas membranosas, cada uma com funções específicas."],
    ["images/facil/p3.jpeg","Qual é a função do núcleo celular?", "Controlar as atividades celulares e conter o material genético", "Realizar a fotossíntese", "Produzir energia", "Sintetizar proteínas", "O núcleo celular é responsável por conter o material genético da célula, o DNA, que contém as instruções necessárias para o funcionamento e desenvolvimento da célula. Ele também controla as atividades celulares."],
    ["images/facil/p4.jpg"," O que faz o retículo endoplasmático?", "Sintetiza e transporta proteínas e lipídios", "Realiza a fotossíntese", "Produzir energia", "Sintetizar proteínas", "O retículo endoplasmático é uma rede de membranas que está envolvida na síntese, transporte e processamento de proteínas e lipídios na célula. Existem dois tipos principais: o retículo endoplasmático rugoso (com ribossomos) e o retículo endoplasmático liso (sem ribossomos), cada um com funções distintas."],
    ["images/facil/p5.jpg","Onde ocorre a produção de energia na célula?", "Nas mitocôndrias", "No núcleo", "No complexo de Golgi", "No retículo endoplasmático", "A produção de energia na célula ocorre nas mitocôndrias através de um processo chamado respiração celular. Elas são conhecidas como as 'usinas de energia' da célula, pois produzem adenosina trifosfato (ATP), a principal molécula de energia utilizada pelas células."],
    ["images/facil/p6.jpg","O que faz o complexo de Golgi?", "Modifica, empacota e distribui proteínas e lipídios", "Produz ATP", "Realiza a digestão intracelular", "Sintetiza carboidratos", "O complexo de Golgi é uma organela responsável por modificar, empacotar e distribuir as proteínas e lipídios produzidos no retículo endoplasmático. Ele atua como um centro de processamento e distribuição de materiais dentro da célula."],
    ["images/facil/p7.jpg","O que são lisossomos?", "Vesículas com enzimas digestivas", "Vesículas de armazenamento", "Vesículas de secreção", "Vesículas de energia", "Lisossomos são pequenas vesículas membranosas que contêm enzimas digestivas. Sua função primária é a digestão intracelular de partículas estranhas, organelas envelhecidas e materiais complexos, contribuindo para a reciclagem de componentes celulares."],
    ["images/facil/p8.jpg","Qual é a função do citoesqueleto?", "Manter a forma da célula e permitir movimentos celulares", "Produzir proteínas", "Armazenar energia", "Controlar a divisão celular", "O citoesqueleto é uma rede de filamentos e microtúbulos que confere forma, suporte e permite movimentos celulares. Ele está envolvido na manutenção da forma da célula, na divisão celular, no transporte intracelular e em movimentos como a locomoção."],
    ["images/facil/p9.jpg"," O que fazem os centríolos?", "Organizam os microtúbulos durante a mitose", "Sintetizam lipídios", "Armazenam nutrientes", "Realizam a fotossíntese", "Os centríolos são estruturas cilíndricas envolvidas na divisão celular. Eles organizam os microtúbulos durante a mitose e são essenciais para a formação dos cílios e flagelos em algumas células animais."],
    ["images/facil/p10.jpg","O que é a membrana celular?", "A membrana celular é a camada que envolve a célula, controlando a entrada e saída de substâncias.", "A membrana celular é uma organela responsável pelo armazenamento de substâncias.", "A membrana celular é uma estrutura responsável pela produção de energia na célula.", "A membrana celular é uma rede de filamentos e microtúbulos que dá suporte estrutural à célula.", "A membrana celular é a camada que envolve a célula e controla a entrada e saída de substâncias."],
]

let epergunta = []

for(let i = 0; i < pp.length; i++) {
    epergunta[i] = i
}

let pergunta = []
let npergunta = 0
const qntdperguntas = 5 //coloque o valor exato de perguntas que o quiz deve ter!
let opc = [1,2,3,4]
let acertos = 0
{ //escolhendo pergunta
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
