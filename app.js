//define a função Número secreto como gerarnumeroaleatorio e define tentativas para 1
let ListaDeNumerosSorteados = [];
let NumeroLimite = 10;
let NumeroSecreto = GerarNumeroAleatório();
let Tentativas = 1;

//determina a função exibir texto na tela, define a variável do campo com a tag (titulo) e define como texto.
function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Famale", {rate:1.2});
}

//define a função exibirmensageminicial com as mensagens iniciais e exibe na tela
function ExibirMensagemInicial(){
    ExibirTextoNaTela("h1", "Jogo do número secreto");
    ExibirTextoNaTela("p", "Escolha um número entre 1 e 10");   
}

ExibirMensagemInicial()

// define a função de verificar o chute como de input e de valor.s
function VerificarChute() {
    let chute = document.querySelector("input").value;
    // se o chute for igual o numero secreto, então, acertou miseravi
    // define as variações da palavra tentativa(s) e define a mensagem de exito do jogo
    if (chute == NumeroSecreto) {
        ExibirTextoNaTela("h1", "acertou miseravi");
        let PalavraTentativa = Tentativas > 1 ? "tentativas" : "tentativa";
        let MensagemTentativas = `Você descobriu um número secreto ${NumeroSecreto} com ${Tentativas} ${PalavraTentativa}!`;
        //exibe o texto no parágrafo da mensagem de tentativa e êxito
        ExibirTextoNaTela("p", MensagemTentativas);
        document.getElementById("Reiniciar").removeAttribute("disabled");
        //se não | se o chute for maior que o número secreto, então exibir no paragráfo que é maior ou menor que o numero secreto
    } else {
        if (chute > NumeroSecreto) {
            ExibirTextoNaTela("p",`O Número secreto é menor que ${chute}!`);
        } else {
            ExibirTextoNaTela("p",`O Número secreto é maior que ${chute}!`);
        }
        // acrescenta uma tentativa e limpa o campo após o chute
        Tentativas++;
        LimparCampo();
    }
}

//define a função de gerar o numero secreto (não sei pq ela está aqui em baixo nessa porra)
//retorna os valores la para cima na função e faz uns calculos mto lokos para gerar um numero entre 1 e 10
function GerarNumeroAleatório() {
    let NumeroEscolhido = parseInt(Math.random() * NumeroLimite + 1);
    let QuantidadeDeElementosNalista = ListaDeNumerosSorteados.length;

    if (QuantidadeDeElementosNalista== NumeroLimite) {
        ListaDeNumerosSorteados = [];
    }
    if (ListaDeNumerosSorteados.includes(NumeroEscolhido)){
        return GerarNumeroAleatório();
    } else {
        ListaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(ListaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}

//Limpa o campo de chute
function LimparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

//Reinicia o jogo, gera o numero secreto, limpa o campo, define tentativas para 1, exibe a mensagem inicial e desativa o botão de novo jogo até acertar novamente.

function Reiniciarjogo() {
    NumeroSecreto = GerarNumeroAleatório();
    LimparCampo();
    Tentativas = 1;
    ExibirMensagemInicial();
    document.getElementById("Reiniciar").setAttribute("disabled", true)
}