const livros = require('./listaLivros.js') // buscando precosLivros de listaLivros

function menorValor(arrProdutos, posicaoInicial){
    let posicaoMaisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[posicaoMaisBarato].preco){
            posicaoMaisBarato = [atual]
        }
    }
    return posicaoMaisBarato;

}



module.exports = menorValor;