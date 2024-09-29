var r = prompt("Informe um valor entre 0 e 255 para o primeiro valor do RGB:");
while ((r < 0) || (r > 255) || isNaN(r)) 
    r = prompt("Informe um valor entre 0 e 255:");

var g = prompt("Informe um valor entre 0 e 255 para o segundo valor do RGB:");
while ((g < 0) || (g > 255) || isNaN(g)) 
    g = prompt("Informe um valor entre 0 e 255:");

var b = prompt("Informe um valor entre 0 e 255 para o terceiro valor do RGB:");
while ((b < 0) || (b > 255) || isNaN(b)) 
    b = prompt("Informe um valor entre 0 e 255:");

document.write(`<p style="color:rgb(${r}, ${g}, ${b})">Fundamentos de Web Design II</p>`)
