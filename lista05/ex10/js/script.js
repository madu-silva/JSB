var numero = parseInt(prompt("Digite um valor inteiro positivo maior ou igual a 2:"));

document.write("<table border='1'>");
document.write("<tr><th>Base decimal</th><th>Base binária</th><th>Base hexadecimal</th></tr>");

for (let i = 0; i <= numero; i++) {
    document.write("<tr>");
    document.write(`<td>${i}</td>`);
    document.write(`<td>${i.toString(2)}</td>`);
    document.write(`<td>${i.toString(16)}</td>`);
    document.write("</tr>");
}

document.write("</table>");