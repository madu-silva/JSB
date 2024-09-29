do
    num = prompt("Informe um número inteiro positivo maior que 0:");
while ((num <= 0) || isNaN(num)) 

do
    nome = prompt("Digite seu nome completo: ");
while (nome.trim() == "")

for(i=0; i<num; i++)
    document.write(`<p>${nome}</p>`);