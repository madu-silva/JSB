var texto = prompt("Digite um texto: ", "O carro quebrou na estrada de São Paulo. O carro foi levado para a oficina.");
var palVelha = prompt("Digite a palavra que deseja substituir no texto: ", "carro");
var palNova = prompt("Digite a nova palavra: ", "caminhão");

document.write(`<p>${texto.replaceAll(palVelha, palNova)}</p>`);