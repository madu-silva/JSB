function solicitarPassageiros() {
    const passageiros = [];
    let continuar = true;

    while (continuar) {
        const nome = prompt("Digite o nome do passageiro:");
        let sexo;
        do {
            sexo = prompt("Digite o sexo do passageiro (M/F):").toUpperCase();
        } while (sexo !== "M" && sexo !== "F");

        passageiros.push({ nome, sexo });

        continuar = confirm("Deseja adicionar mais um passageiro?");
    }

    return passageiros;
}

function organizarPassageiros(passageiros) {
    const mulheres = passageiros.filter(passageiro => passageiro.sexo === "F").map(passageiro => passageiro.nome).sort();
    const homens = passageiros.filter(passageiro => passageiro.sexo === "M").map(passageiro => passageiro.nome).sort();

    return { mulheres, homens };
}

function renderizarAssentos() {
    const passageiros = solicitarPassageiros();
    const { mulheres, homens } = organizarPassageiros(passageiros);

    const fileiraMulheres = document.getElementById('fileira-mulheres');
    const fileiraHomens = document.getElementById('fileira-homens');

    mulheres.forEach(mulher => {
        const assento = document.createElement('div');
        assento.className = 'assento';
        assento.textContent = mulher;
        fileiraMulheres.appendChild(assento);
    });

    homens.forEach(homem => {
        const assento = document.createElement('div');
        assento.className = 'assento';
        assento.textContent = homem;
        fileiraHomens.appendChild(assento);
    });
}

document.addEventListener('DOMContentLoaded', renderizarAssentos);
