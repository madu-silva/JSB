let email = document.getElementById("email");
let senha = document.getElementById("senha");
let btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", function() {
    let newUser = {email:email.value, password:senha.value};

    if (!newUser.email || !newUser.password) {
        alert("Email e senha são obrigatórios.");
        return;
    }

    if (newUser.password.length < 5) {
        alert("Senha inválida. Informe uma senha contendo pelo menos 5 caracteres.");
        return;
    }

    let users = localStorage.getItem("users");

    if (!users) 
        localStorage.setItem("users", JSON.stringify([newUser]))
    else {
        users = JSON.parse(users);
        if(!checkUser(users, newUser.email)) {
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
        } else
            alert("Usuário já existente. Tente outro.");
    }

});

function checkUser(vetUsers, user) {
    for (const element of vetUsers) {
        if (element.email == user)
            return true;
    }
    return false;   
}
