nota1 = parseFloat(prompt('Informe a sua nota do 1º bimestre [0 - 50]:'));
nota2 = parseFloat(prompt('Informe a sua nota do 2º bimestre [0 - 50]:'));

notaFinal = nota1 + nota2;

if (notaFinal >= 60) 
    alert(`Você está APROVADO. \nSua nota final = ${notaFinal} pontos`);
else 
    alert(`Você está REPROVADO. \nFaltaram ${60-notaFinal} pontos`);