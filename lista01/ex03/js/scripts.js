do
    nome = prompt("Digite seu nome completo: ");
while (nome.trim() == "")

idade = prompt("Qual é a sua idade?");

while ((idade <= 0) || (idade >= 130)) 
    idade = prompt("Informe uma idade entre 1 e 130:");

if (idade >= 18)
    alert(`${nome}, você já POSSUI idade para tirar carteira`);
else
    alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${18-idade} anos.`);
