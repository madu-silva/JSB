function criarBaralho() {
    var baralho = [];
    for (var i = 1; i <= 27; i++) {
        baralho.push(i);
    }
    return baralho;
}

function sortearCarta(baralho) {
    var indice = Math.floor(Math.random() * baralho.length);
    return baralho.splice(indice, 1)[0];
}

function exibirCartasDoJogador(jogador, baralho) {
    document.write(`<h2>Cartas do jogador ${jogador}:</h2>`);
    for (var i = 0; i < 3; i++) {
        var cartaSorteada = sortearCarta(baralho);
        document.write(`<img src="cartas/carta${cartaSorteada}.png">`);
    }
    document.write('<br>');
}

function sortearCartasParaJogadores() {
    var baralho = criarBaralho();
    document.write(`<h2 style="text-align: center;">JOGUE TRUCO</h2>`);    
    document.write(`<span style="color: red; font-weight: bold; text-align: center; display: block; font-size: 20px">Cartas sorteadas</span>`);    
    for (var jogador = 1; jogador <= 4; jogador++) {
        exibirCartasDoJogador(jogador, baralho);
    }
}

sortearCartasParaJogadores();