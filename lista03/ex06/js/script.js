var numerosMegaSena = [];
var sorteado = 0;

for (var i=0; i<6; i++) {
    sorteado = Math.floor(Math.random()*60)+1;
    if (numerosMegaSena.indexOf(sorteado) == -1) {
        numerosMegaSena.push(sorteado);
    } else {
        i--;
    }
}

document.write(numerosMegaSena);