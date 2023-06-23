function reiniciarJogo() {
    // Obtém a referência ao elemento onde as cartelas estão
    var elementoPai = document.getElementById('area_cartelas_bingo');

    // Remove todas as tabelas dentro do elemento pai
    while (elementoPai.firstChild) {
        elementoPai.removeChild(elementoPai.firstChild);
    }

    // Reinicia o contador de cartelas criadas
    cartelasCriadas = 0;

    // Limpa os números sorteados
    numerosSorteados = [];

    // Limpa a área de números sorteados
    const areaNumerosResultados = document.getElementById("area_numeros_resultados");
    while (areaNumerosResultados.firstChild) {
        areaNumerosResultados.removeChild(areaNumerosResultados.firstChild);
    }

    // Interrompe o sorteio, se estiver ocorrendo
    if (intervalId) {
        clearInterval(intervalId);
    }
}