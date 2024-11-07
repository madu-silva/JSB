function verificaPalindromo (texto) {
    let textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, '');

    let textoInvertido = textoLimpo.split("").reverse().join("");

    if (textoLimpo === textoInvertido) {
        alert("O texto informado é um palíndromo!");
    } else {
        alert("O texto informado NÃO é um palíndromo.");
    }
}

var texto = prompt("Digite um texto: ", "A Daniela ama a lei? Nada!");
verificaPalindromo(texto);
