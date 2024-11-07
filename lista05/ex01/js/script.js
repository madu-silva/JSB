primeiroNome = prompt("Qual o seu primeiro nome?");
sobrenome = prompt("Qual o seu sobrenome?");

num = prompt("Quantas vezes deseja exibir seu nome?");
cor = prompt("Qual a cor que seu nome será exibido? (digite a cor em inglês por gentileza)");

for (i=1; i<=num; i++) {
    if (i % 2 === 0) {
        document.write(`<p>${i} - <span style="color: ${cor}">${primeiroNome} ${sobrenome}</span></p>`);
    } else {
        document.write(`<p>${i} - <span style="color: black">${primeiroNome} ${sobrenome}</span></p>`);
    }
}
