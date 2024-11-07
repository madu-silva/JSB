var nome = prompt("Digite o seu nome completo:");

var vetPartesNome = nome.split(" ");

var primeiroNome = vetPartesNome[0].toUpperCase();
var restanteNome = vetPartesNome.slice(1).join(" ").toLowerCase();

alert(primeiroNome.concat(" ", restanteNome));
