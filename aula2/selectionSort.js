const livros = require('../aula1/listaLivros.js');
const menorValor = require('../aula1/menorValor.js');

for(let atual = 0; atual < livros.length - 1; atual++){

    let menor = menorValor(livros, atual);
    let livroAtual = livros[atual];
    console.log('posicao atual ', atual);
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    console.log('livro atual', livros[atual])
    livros[menor] = livroAtual;
    console.log('livro menor preco', livros[menor])

}
console.log(livros);