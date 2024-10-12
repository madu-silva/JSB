var passageiros = [];
var somaIdades = 0;
var numPassageiros = parseInt(prompt("Digite a quantidade de passageiros:"));

for (var i=0; i<numPassageiros; i++) {
    passageiros.push(prompt("Digite o nome do passageiro:"));
    idade = parseInt(prompt("Digite a idade do passageiro:"));
    somaIdades += idade;
}

var mediaIdades = Math.floor(somaIdades/numPassageiros);
var passageiroSorteado = Math.floor(Math.random()*numPassageiros);

document.write(`Idade média dos passageiros: ${mediaIdades} anos<br>`);
document.write(`Passageiro sorteado: ${passageiros[passageiroSorteado]}`);
