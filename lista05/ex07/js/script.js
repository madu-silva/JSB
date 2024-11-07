const texto = prompt("Digite um texto: ");
const letra = prompt("Digite uma letra:").toLowerCase();
const palavras = texto.split(' ');

const palavrasFiltradas = palavras.filter(palavra => palavra.toLowerCase().startsWith(letra));
document.write(palavrasFiltradas.join(' '));