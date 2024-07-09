let jogosAlugados = 0

function alterarStatus(n){
    jogoEscolhido = document.getElementById(`game-${n}`);
    let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
    let botao = jogoEscolhido.querySelector('.dashboard__item__button');
    let jogo = jogoEscolhido.querySelector('p').textContent;
    let acao = jogoEscolhido.querySelector('a').textContent.toLowerCase();
    let confirmacaoDaAcao = confirm(`Voce tem certeza que deseja ${acao} o jogo ${jogo}?`)
    
    if( confirmacaoDaAcao == true){
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    } 
    else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }}
    else{
        alert(`Voce desistiu de ${acao} o jogo ${jogo}`);
    }

    contarEExibirJogosAlugados();
}

function contarEExibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

document.addEventListener('DOMContentLoaded',function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length; contarEExibirJogosAlugados();
})

function verificarPalindromo(palavra){
    let palavraSoletrada = palavra.split('');
    let palavraInvertida = palavraSoletrada.reverse();
    palavraInvertida = palavraInvertida.join('')

    if (palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palíndromo`);
    }
    else{
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
}

verificarPalindromo('rever');
verificarPalindromo('arvore');