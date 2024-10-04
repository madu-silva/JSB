// a)
let diaSemana = new Date().getDay();
let dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
document.write("Hoje é " + dias[diaSemana] + "<br>");

// b)
let diaSemana2 = new Date().getDay();
switch (diaSemana2) {
    case 0:
        document.write("Hoje é domingo");
        break;
    case 1:
        document.write("Hoje é segunda-feira");
        break;
    case 2:
        document.write("Hoje é terça-feira");
        break;
    case 3:
        document.write("Hoje é quarta-feira");
        break;
    case 4:
        document.write("Hoje é quinta-feira");
        break;
    case 5:
        document.write("Hoje é sexta-feira");
        break;
    case 6:
        document.write("Hoje é sábado");
        break;
}