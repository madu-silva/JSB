let codigos = ["P2", "AP", "POO1", "FBD", "JSB"];
let disciplinas = ["Projeto Sistema Web MVC e SQL", "Algoritmos e Programação", "Programação Orientada a Objetos 1", "Fundamentos de Banco de Dados", "JavaScript Básico"];

document.write("<table border='1' align='center'>");
document.write("<tr><th>Código</th><th>Disciplina</th></tr>");
for (let index in codigos) {
    document.write("<tr><td>" + codigos[index] + "</td><td>" + disciplinas[index] + "</td></tr>");
}
document.write("</table>");