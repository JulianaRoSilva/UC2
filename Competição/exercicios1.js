const ask = require('readline-sync');

let produtos = [];

function cadastrarProduto(nome, preco, precoFab, qtdEstoque){
    produtos.push([produtos.length + 1, preco, precoFab, qtdEstoque]);
}

let nome = ask.question('nome: ')
let preco = ask.question('preco: ')
let precogab = ask.question('preco gab: ')
let qtdEstoque = ask.question('qtd est: ')

cadastrarProduto(nome, preco, precogab, qtdEstoque);

console.log(produtos);

let nome1 = ask.question('nome2: ')
let preco1 = ask.question('preco: ')
let precogab1 = ask.question('precofab: ')
let qtdEstoque1 = ask.question('qtd estoque: ')

cadastrarProduto(nome1, preco1, precogab1, qtdEstoque1);

console.log(produtos);