var joquempô = ["pedra", "papel", "tesoura"];
var opJogador1 = parseInt(Math.random() * 3);
var opJogador2 = parseInt(Math.random() * 3);

function determinarVencedor(opJogador1, opJogador2) {
    if (opJogador1 === opJogador2) {
        return "Empate";
    }

    if (
        (opJogador1 === 0 && opJogador2 === 2) || // Pedra vence Tesoura
        (opJogador1 === 1 && opJogador2 === 0) || // Papel vence Pedra
        (opJogador1 === 2 && opJogador2 === 1)    // Tesoura vence Papel
    ) {
        return "Jogador 1 venceu";
    } else {
        return "Jogador 2 venceu";
    }
}

var resultado = determinarVencedor(opJogador1, opJogador2);


document.write(`
    <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
        <div style="text-align: center;">
            <p>Jogador 1</p>
            <img src="img/jogador1-${joquempô[opJogador1]}.png">
        </div>
        <div style="text-align: center;">
            <p>Jogador 2</p>
            <img src="img/jogador2-${joquempô[opJogador2]}.png">
        </div>
    </div>
    <div style="text-align: center; margin-top: 20px; color:red">
        <p><strong>${resultado}</strong></p>
    </div>
`);