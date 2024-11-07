const texto = prompt("Digite um texto: ");
const palavras = texto.split(' ');

const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
const palavrasPorLetra = letras.map(() => []);

palavras.forEach(palavra => {
    const letraInicial = palavra[0].toLowerCase();
    const index = letras.indexOf(letraInicial);
    if (index !== -1) {
        palavrasPorLetra[index].push(palavra);
    }
});

letras.forEach((letra, index) => {
    if (palavrasPorLetra[index].length > 0) {
        document.write(`<p>Palavras iniciadas com a letra ${letra}:</p>`);
        palavrasPorLetra[index].sort().forEach(palavra => {
            document.write(`<p>- ${palavra}</p>`);
        });
    }
});