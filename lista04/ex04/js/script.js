var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (var i=0; i<4; i++) {
    var numero = parseInt(Math.random()*26);
    document.write(`${alfabeto[numero]} <br>`);  
}