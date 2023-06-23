var intervalId;

window.GerarResultados = function () {
    let numerosSorteados = [];
    let divIndex = 1;
    const areaNumerosResultados = document.getElementById("area_numeros_resultados");

    const intervalId = setInterval(() => {
        let numeroAleatorio = obterNumeroAleatorio();

        while (numerosSorteados.includes(numeroAleatorio)) {
            // Número já sorteado, sorteia novamente
            numeroAleatorio = obterNumeroAleatorio();
        }

        numerosSorteados.push(numeroAleatorio);
        criarDivNumeroBolinha(numeroAleatorio, divIndex, areaNumerosResultados);

        divIndex++;

        const cartelas = document.querySelectorAll('.cartela');
        cartelas.forEach(cartela => {
            if (verificarCartelaVencedora(cartela)) {
                // Jogador venceu o jogo
                if (numerosSorteados.length === 75) {
                    // Último número sorteado
                    clearInterval(intervalId);
                    const jogador = cartela.querySelector('h1').textContent;
                    setTimeout(() => {
                        alert(`Parabéns! O jogador ${jogador} ganhou o jogo!`);
                    }, 1000);
                }
            }
        });

        // Pinta o número sorteado de verde na tabela
        pintarNumeroSorteado(numeroAleatorio);

        if (numerosSorteados.length === 75) {
            // Todos os números foram sorteados e nenhum jogador venceu
            clearInterval(intervalId);
        }
    }, 1000);
}

function criarDivNumeroBolinha(numero, index, parentElement) {
    const numeroBolinha = document.createElement("div");
    numeroBolinha.classList.add("numero_bolinha");

    const h1Element = document.createElement("h1");
    h1Element.innerText = numero;

    numeroBolinha.appendChild(h1Element);
    parentElement.appendChild(numeroBolinha);
}

function pintarNumeroSorteado(numero) {
    const cartelas = document.querySelectorAll('.cartela');

    cartelas.forEach(cartela => {
        const numeros = cartela.querySelectorAll('td');

        numeros.forEach(numeroElement => {
            if (Number(numeroElement.textContent) === numero) {
                numeroElement.classList.add('numero-sorteado');
            }
        });
    });
}

function verificarCartelaVencedora(cartela) {
    const numerosSorteados = Array.from(document.querySelectorAll('.numero-sorteado'));
    const numerosCartela = Array.from(cartela.querySelectorAll('td'));

    return numerosCartela.every(numeroElement => numerosSorteados.includes(numeroElement));
}

function obterNumeroAleatorio() {
    return Math.floor(Math.random() * 75) + 1;
}
