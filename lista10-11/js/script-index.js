window.addEventListener("load", function () {
    document.getElementById("btnEntrar").addEventListener("click", verificarLogin);

    const somDigitacao = new Audio('js/som/pressing-buttons-on-a-joystick-90718.mp3');
    const somMr = new Audio('js/som/mr-23142.mp3');

    function playSomDigitacao() {
        somDigitacao.currentTime = 0;
        somDigitacao.play();
    }

    function stopSomDigitacao() {
        somDigitacao.pause();
    }

    function playSomMr() {
        somMr.currentTime = 0;
        somMr.play();
    }

    const txtUser = document.getElementById("txtUser");
    const txtPwd = document.getElementById("txtPwd");

    txtUser.addEventListener("input", playSomDigitacao);
    txtPwd.addEventListener("input", playSomDigitacao);

    txtUser.addEventListener("blur", stopSomDigitacao);
    txtPwd.addEventListener("blur", stopSomDigitacao);

    document.getElementById("btnEntrar").addEventListener("click", playSomMr);

    function verificarLogin() {
        let user = txtUser.value;
        let pwd = txtPwd.value;
        let vetUsuarios;

        if (user == "" || pwd == "") {
            alertWifi("Preencha todos os campos", false, 0, "", 30, "");
        } else {
            vetUsuarios = localStorage.getItem("usuarios");

            if (!vetUsuarios) {
                alertWifi("Ainda não há nenhum usuário cadastrado", false, 0, "", 40, "");
            } else {
                vetUsuarios = JSON.parse(vetUsuarios);
                let achou = false;
                for (const usuario of vetUsuarios) {
                    if (usuario.nome == user && usuario.senha == pwd) {
                        achou = true;
                        break;
                    }
                }

                if (achou) {
                    alertWifi("Usuário encontrado", false, 0, "", 30, "");
                    window.open("jogo.html", "_self");
                } else {
                    alertWifi("Usuário não encontrado", false, 0, "", 40, "");
                }
            }
        }
    }
});