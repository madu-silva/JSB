// 2º solução
const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function gerarSenhaForte(tamanho) {
    let senha = '';

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    return senha;
}

const senhaForte = gerarSenhaForte(8);
document.write('Senha criada: ' + senhaForte);


// usando matriz da pra criar os jogos:
// tetrix
// jogo da cobrinha