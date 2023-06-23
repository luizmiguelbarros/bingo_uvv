var cartelasCriadas = 0;

function gerarNumeros(colunaInicial, colunaFinal) {
    var numeros = [];

    
    while (numeros.length < 5) {
        var numero = Math.floor(Math.random() * (colunaFinal - colunaInicial + 1)) + colunaInicial;

        
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    return numeros;
}

function gerarCartela() {
    var cartela = [];

    
    cartela.push(gerarNumeros(1, 15));
    cartela.push(gerarNumeros(16, 30));
    cartela.push(gerarNumeros(31, 45));
    cartela.push(gerarNumeros(46, 60));
    cartela.push(gerarNumeros(61, 75));

    return cartela;
}

function criarCartela() {
   
    if (cartelasCriadas >= 6) {
        alert('Atenção! O jogo suporta apenas 6 cartelas por jogo.');
        return;
    }

   
    var nomeJogador = prompt('Qual o nome do jogador?');


    if (!nomeJogador) {
        alert('Por favor, insira um nome válido.');
        return;
    }

    
    var divCartela = document.createElement('div');
    divCartela.classList.add('cartela');

    
    var titulo = document.createElement('h1');
    titulo.textContent = nomeJogador;

   
    var botaoConfirmar = document.createElement('button');
    botaoConfirmar.textContent = 'Confirmar';
    botaoConfirmar.addEventListener('click', function () {
        var nome = inputNomeJogador.value;
        if (nome) {
            alert(nome);
        }
    });

    
    var tabela = document.createElement('table');

    
    var letras = ['B', 'I', 'N', 'G', 'O'];
    var colunas = gerarCartela();

    
    var cabecalho = document.createElement('tr');

    for (var i = 0; i < letras.length; i++) {
        var th = document.createElement('th');
        th.textContent = letras[i];
        cabecalho.appendChild(th);
    }

    tabela.appendChild(cabecalho);

   
    for (var i = 0; i < letras.length; i++) {
        var linha = document.createElement('tr');

        for (var j = 0; j < 5; j++) {
            var td = document.createElement('td');
            td.textContent = colunas[j][i];
            linha.appendChild(td);
        }

        tabela.appendChild(linha);
    }

 
    divCartela.appendChild(titulo);
    divCartela.appendChild(botaoConfirmar);
    divCartela.appendChild(tabela);

   
    var elementoPai = document.getElementById('area_cartelas_bingo');

    
    elementoPai.appendChild(divCartela);

  
    cartelasCriadas++;
}