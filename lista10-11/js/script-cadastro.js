window.addEventListener("load", function () {
    document.getElementById("btnCadastrar").addEventListener("click", validarCadastro);

    function validarCadastro() {
        let user = document.getElementById("txtUser").value;
        let pwd = document.getElementById("txtPwd").value;
        let checkPwd = document.getElementById("txtCheckPwd").value;

        if (!user || !pwd || !checkPwd) {
            alertWifi("Preencha todos os campos!", false, 0, "", 30, "");
        } else if (pwd !== checkPwd) {
            alertWifi("Senha e confirmar senha diferentes. Tente novamente!", false, 0, "", 30, "");
        } else if (!validarUsuario(user)) {
            alertWifi("Nome de usuário inválido. Informe um usuário com pelo menos 5 caracteres", false, 0, "", 30, "");
        } else if (!validarSenha(pwd)) {
            alertWifi("Senha inválida. Informe uma senha contendo pelo menos 6 caracteres, incluindo uma letra maiúscula e um caractere especial", false, 0, "", 30, "");
        } else {
            cadastrarUsuario(user, pwd);
        }
    }

    function validarUsuario(usuario) {
        let regexUsuario = /^[a-zA-Z0-9]{5,20}$/;
        return regexUsuario.test(usuario);
    }

    function validarSenha(senha) {
        let regexSenha = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        return regexSenha.test(senha);
    }

    function cadastrarUsuario(user, pwd) {
        let usuario = { nome: user, senha: pwd };

        let usuarios = localStorage.getItem("usuarios");

        if (!usuarios) {
            usuarios = [usuario];
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            alertWifi("Usuário cadastrado com sucesso!", false, 0, "", 30, "");
        } else if (podeCadastrar(user)) {
            usuarios = JSON.parse(usuarios);
            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            alertWifi("Usuário cadastrado com sucesso!", false, 0, "", 30, "");
        } else {
            alertWifi("Usuário já existe. Tente novamente!", false, 0, "", 30, "");
        }
    }

    function podeCadastrar(user) {
        let usuarios = localStorage.getItem("usuarios");
        usuarios = JSON.parse(usuarios);
        let achou = false;
        for (const usuario of usuarios) {
            if (usuario.nome == user) {
                achou = true;
                break;
            }
        }
        return !achou;
    }
});