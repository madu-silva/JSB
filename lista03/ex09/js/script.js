function obterPessoas() {
    var numPessoas = parseInt(prompt("Digite o número de pessoas: "));
    var nomes = [];

    for(var i = 0; i < numPessoas; i++){
        nomes.push(prompt(`Digite o nome da pessoa ${i+1}: `));
    }

   return nomes;
}

function sortearOrdemDeApresentacao(nomes) {
    var ordemApresentacao = [];
    var nomesRestantes = [...nomes]; // Cria uma cópia do array nomes

    while (nomesRestantes.length > 0) {
        var sorteado = Math.floor(Math.random() * nomesRestantes.length);
        ordemApresentacao.push(nomesRestantes.splice(sorteado, 1)[0]);
    }

    return ordemApresentacao;
}

function exibirOrdemDeApresentacao(ordemApresentacao) {
    document.write("<h2>Ordem de apresentação:</h2>");
    for (var k = 0; k < ordemApresentacao.length; k++) {
        document.write(`${k + 1}º - ${ordemApresentacao[k]}<br>`);
    }
}

var nomePessoas = obterPessoas();
var ordemApresentacao = sortearOrdemDeApresentacao(nomePessoas);
exibirOrdemDeApresentacao(ordemApresentacao);