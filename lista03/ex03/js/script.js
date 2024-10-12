var numero = parseInt(prompt("Digite um número: "));

var numSorteado = parseInt(Math.random() * numero) + 1;
document.write(`${numSorteado}`)