var boy = document.getElementById("boy");
var textBoy = document.getElementById("textBoy");

function changeBoy(source, texto, animate = false, shake = false) {
    boy.src = source;
    textBoy.innerHTML = texto;
    boy.classList.remove("animated", "shake");
    if (animate)
        boy.classList.add("animated");
    if (shake)
        boy.classList.add("shake");
}

boy.addEventListener("mouseenter", function () {
    changeBoy("img/assustado.png", "O que você quer?");
})

boy.addEventListener("mouseout", function () {
    changeBoy("img/pensativo.png", "zzzzzzz!");
})

boy.addEventListener("click", function () {
    var nome = prompt("Qual é o seu nome?");
    (!nome) ? changeBoy("img/nervoso.png", `Não me faça perder o meu tempo!!!`, false, true) : changeBoy("img/alegre.png", `${nome}, seja bem-vindo!`, true);
})

// animacao em css -> keyframes