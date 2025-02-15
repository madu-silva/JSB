window.addEventListener("load", function () {
    let tempoInicial = 0;
    let tempoRestante = 0;
    let porcentagemInicial = "0.00%";
    let intervaloTempo;
    let jogoAtivo = false;

    const somAcerto = new Audio('js/som/correct-choice-43861.mp3');
    const somErro = new Audio('js/som/wrong-buzzer-6268.mp3');
    const somPop = new Audio('js/som/pop-268648.mp3');
    const somMr = new Audio('js/som/mr-23142.mp3'); // Adiciona o som mr

    function atualizarTempo() {
        const tempoParaDificuldade = document.getElementById("dificuldade-tempo");
        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;
        tempoParaDificuldade.innerHTML = `${minutos.toString().padStart(2, '0')} : ${segundos.toString().padStart(2, '0')}`;
    }

    atualizarTempo();

    const dificuldadeEscolhida = document.getElementById("dificuldade");
    dificuldadeEscolhida.addEventListener("change", function () {
        const opcaoEscolhida = dificuldadeEscolhida.value;
        somPop.currentTime = 0; // Reinicia o som
        somPop.play(); // Toca o som pop
        switch (opcaoEscolhida) {
            case "facil":
                tempoInicial = 90;
                break;
            case "medio":
                tempoInicial = 75;
                break;
            case "dificil":
                tempoInicial = 30;
                break;
            default:
                tempoInicial = 0;
                break;
        }
        reiniciarJogo();
        tempoRestante = tempoInicial;
        atualizarTempo();
    });

    document.getElementById("btn-iniciar").addEventListener("click", function () {
        if (!jogoAtivo) {
            somPop.currentTime = 0; // Reinicia o som
            somPop.play(); // Toca o som pop
            iniciarJogo();
        }
    });

    document.getElementById("btn-pausar").addEventListener("click", function () {
        if (jogoAtivo) {
            somPop.currentTime = 0; // Reinicia o som
            somPop.play(); // Toca o som pop
            pausarJogo();
        }
    });

    document.getElementById("btn-parar").addEventListener("click", function () {
        somPop.currentTime = 0; // Reinicia o som
        somPop.play(); // Toca o som pop
        reiniciarJogo();
    });

    document.getElementById("btn-sair").addEventListener("click", function () {
        somPop.currentTime = 0; // Reinicia o som
        somPop.play(); // Toca o som pop
        window.open("index.html", "_self");
    });

    let numeroAleatorioTempo;
    document.getElementById("numero-aleatorio").innerHTML = "-";

    function atualizarNumeroVelocidade(dificuldade) {
        switch (dificuldade) {
            case "facil":
                velocidadeNumero = 1000;
                break;
            case "medio":
                velocidadeNumero = 500;
                break;
            case "dificil":
                velocidadeNumero = 300;
                break;
            default:
                velocidadeNumero = 1000;
                break;
        }
    }

    function iniciarJogo() {
        const dificuldadeSelecionada = dificuldadeEscolhida.value;
        if (dificuldadeSelecionada === "selecionado") {
            alert("É necessário selecionar uma dificuldade para iniciar o jogo.");
            return;
        }
        botaoControle(true, false);
        jogoAtivo = true;

        intervaloTempo = setInterval(function () {
            tempoRestante--;
            if (tempoRestante <= 0) {
                stopGame();
            }
            atualizarTempo();
        }, 1000);

        atualizarNumeroVelocidade(dificuldadeSelecionada);
        numeroAleatorioTempo = setInterval(numAleatorio, velocidadeNumero);
    }

    function pausarJogo() {
        botaoControle(false, true);
        jogoAtivo = false;
        clearInterval(numeroAleatorioTempo);
        clearInterval(intervaloTempo);
    }

    function stopGame() {
        botaoControle(false, true);
        jogoAtivo = false;
        clearInterval(intervaloTempo);
        clearInterval(numeroAleatorioTempo);
        tempoRestante = 0;
        atualizarTempo();
    }

    function reiniciarJogo() {
        jogoAtivo = false;
        clearInterval(intervaloTempo);
        clearInterval(numeroAleatorioTempo);
        botaoControle(false, true);
        document.getElementById("pares-sorteados").innerHTML = "0";
        countParesSorteados = 0;
        countAcertos = 0;
        countErros = 0;
        acertosSpan.innerHTML = "0";
        errosSpan.innerHTML = "0";
        document.getElementById("porcentagem-sucesso").innerHTML = "0.00%";
        document.getElementById("numero-aleatorio").innerHTML = "-";
    }

    document.getElementById("pares-sorteados").innerHTML = "0";
    let countParesSorteados = 0;

    function numAleatorio() {
        document.getElementById("numero-aleatorio").innerHTML =
            parseInt(Math.random() * 100) + 1;
        if (document.getElementById("numero-aleatorio").innerHTML % 2 == 0) {
            countParesSorteados++;
        }
        document.getElementById("pares-sorteados").innerHTML = countParesSorteados;
        document.getElementById("numero-aleatorio").style.color = "black";
        atualizarPorcentagem();
    }

    function botaoControle(iniciar, pausar) {
        document.getElementById("btn-iniciar").disabled = iniciar;
        document.getElementById("btn-pausar").disabled = pausar;
    }

    botaoControle(false, true);

    let countAcertos = 0;
    let countErros = 0;

    const acertosSpan = document.getElementById("acertos");
    const errosSpan = document.getElementById("erros");

    acertosSpan.innerHTML = "0";
    errosSpan.innerHTML = "0";

    const numAleatorioContainer = document.getElementById("numero-aleatorio");

    numAleatorioContainer.addEventListener("click", function () {
        if (!jogoAtivo) return; 
        let numAleatorio = numAleatorioContainer.innerHTML;
        if (numAleatorio !== "-") {
            if (numAleatorio % 2 === 0) {
                countAcertos++;
                acertosSpan.innerHTML = countAcertos;
                numAleatorioContainer.style.color = "green";
                somAcerto.currentTime = 0;
                somAcerto.play();
            } else {
                countErros++;
                errosSpan.innerHTML = countErros;
                numAleatorioContainer.style.color = "red";
                numAleatorioContainer.classList.add("shake");
                setTimeout(() => {
                    numAleatorioContainer.classList.remove("shake");
                }, 200);
                somErro.currentTime = 0;
                somErro.play();
            }
            atualizarPorcentagem();
        }
    });

    document.getElementById("porcentagem-sucesso").innerHTML = porcentagemInicial;

    function atualizarPorcentagem() {
        const countAcertoser = parseInt(document.getElementById("acertos").innerHTML);
        const countParesSorteadoser = parseInt(document.getElementById("pares-sorteados").innerHTML);

        if (!isNaN(countAcertoser) && !isNaN(countParesSorteadoser) && countParesSorteadoser !== 0) {
            porcentagemInicial = (countAcertoser / countParesSorteadoser) * 100;
            if (porcentagemInicial > 100) {
                porcentagemInicial = 100;
            }
        }

        document.getElementById("porcentagem-sucesso").innerHTML = porcentagemInicial.toFixed(2) + "%";
    }

    // Play the mr sound when the game starts
    somMr.currentTime = 0;
    somMr.play();
});