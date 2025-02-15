let txtEmail = document.getElementById("email");
let txtSenha = document.getElementById("senha");
let btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function () {

    let user = { email: txtEmail.value, password: txtSenha.value };

    if (!user.email || !user.password) {
        alert("Email e senha são obrigatórios.");
        return;
    }

    if (user.password.length < 5) {
        alert("Senha inválida. Informe uma senha contendo pelo menos 5 caracteres.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users"));

    if (!checkUser(users, user.email))
        alert("Usuário inexistente. Tente outro usuário.");
    else if (!checkPwd(users, user.password))
        alert("Senha incorreta. Tente outra senha")
    else {
        alert("Login realizado com sucesso!");
        window.location.href = "jogo.html";
    }
});

function checkUser(vetUsers, user) {
    for (const element of vetUsers) {
        if (element.email === email && element.password === password) {
            return true;
        }
        return false;
    }
}
