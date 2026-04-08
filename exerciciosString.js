// LISTA DE EXERCÍCIOS - STRINGS EM JAVASCRIPT
// Utilize o pacote readline-sync para entrada de dados quando necessário.
// Resolva cada exercício separadamente.
const ask = require('readline-sync');

// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável.
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome

let name = ask.question('Qual eh o seu nome? ');
console.log(`Nome digitado: ${name}`);
console.log(`Tamanho do nome digitado: ${name.length}`);

// 2)
// Peça para o usuário digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas

let frase = ask.question('Digite uma frase: ');
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços

let frase2 = '  Socorram-me! Subi no onibus em Marrocos!      ';
console.log(frase2);
console.log(frase2.trim());
console.log(`Tamanho da frase original ${frase2.length} e sem os espaços ${frase2.trim().length}`)

// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.

// let fruit = ask.question('Digite 5 frutas: ').toLowerCase();
let fruit = 'maça pera melancia kiwi melao'
console.log(`Sua lista de frutas: ${fruit}`);
let verFruit = ask.question('Digite uma fruta qualquer: ').toLowerCase();
console.log(`Essa fruta existe na lista? ${fruit.includes(verFruit)}`);

// 5)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.

let frase3 = ask.question('Digite uma frase: ');
let substitua = ask.question(`Digite uma palavra que quer subtituir na frase "${frase3}": `);
let subtituta = ask.question(`Digite a palavra que vai ser substituir a anterior: `);
console.log(`${frase3.replaceAll(substitua,subtituta)}`);

// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string

let num1, num2;
num1 = 10;
num2 = 10;

console.log(num1 + num2);
console.log(`Soma de ${num1} com ${num2} eh ${num1 + num2}`);

// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof


let value = ask.question('Digite qualquer coisa: ');
console.log(`Tipo do que voce digitou: ${typeof value}`)

// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase

console.log('Digite duas palavras: ');
let palavra1 = ask.question();
let palavra2 = ask.question();

console.log(`${palavra1} ${palavra2}`);

// 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.

let frase4 = ask.question('Digite uma frase: ');
let letra = ask.question('Digite uma letra: ');

console.log(frase4.toUpperCase());
console.log(frase4.replaceAll(letra, '*'));

