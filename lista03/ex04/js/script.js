var n = parseInt(prompt("Digite o valor inicial do intervalo (N):"));
var m = parseInt(prompt("Digite o valor final do intervalo (M):"));

var numAleatorio = parseInt(Math.random() * (m - n + 1) + n);
document.write(`${numAleatorio}`);
