// 1º solução
const matriz = [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9']
];

function gerarSenha(tamanho) {
    let senha = '';

    for (let i = 0; i < tamanho; i++) {
        const linha = Math.floor(Math.random() * matriz.length);
        const coluna = Math.floor(Math.random() * matriz[linha].length);
        senha += matriz[linha][coluna];
    }

    return senha;
}

const senhaForte = gerarSenha(8);
document.write('Senha criada: ' + senhaForte);
