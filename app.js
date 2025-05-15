function sortear() {
    
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('até').value);

    let sorteados = [];

    if (quantidade > (ate - de + 1)) {
        alert(`Não é possível sortear ${quantidade} números distintos no intervalo de ${de} a ${ate}.`);
        return;
    } 

    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('até').value = '';
    document.getElementById('btn-reiniciar').classList.remove('container__botao');
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
}