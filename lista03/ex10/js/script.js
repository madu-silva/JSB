document.write(`<h2>Carta sorteada:</h2>`);

var cartaSorteada = parseInt(Math.random()*27)+1; // 1 a 27
document.write(`<img src="cartas/carta${cartaSorteada}.png">`)
