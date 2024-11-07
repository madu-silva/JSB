var texto = prompt("Digite um texto:");

var vetPartesTexto = texto.split(" ");

var primeiraPalavra = vetPartesTexto[0];
var ultimaPalavra = vetPartesTexto[vetPartesTexto.length-1]

var primeiroUltPalavra = `${primeiraPalavra} ${ultimaPalavra}`;

document.write(`<p>${primeiroUltPalavra}</p>`);