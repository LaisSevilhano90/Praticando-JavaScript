// let nome = "Diogo";
// let idade = 30;

// // -----------------------------------------------------------CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

// //------------------------------------------------------------INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3; // 53
// let sub = "5" - 3; // 2

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// ---------------------------------------------------------convertendo valores
// let numero = "ab" // string

// let convertido = Number(numero) // converte o valor para number

// console.log(typeof convertido);


//----------------------------------------------- OPERADORES RELACIONAIS

//-- VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true

//--VALIDO IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false


// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1:
//         hgdhasghd
//         break;
//     case 2:
// }


// //---------------------------------------------------------- ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


// ----------------------------------------------------------FUNÇÕES NATIVAS JS

// ------FUNÇÃO MAP()
// Percorre uma lista e cria uma nova lista com base em uma condição

/*let numeros = [1, 2, 3, 4]

let numerosDobrados = numeros.map(function(num) {
    return num * 2
})

// numerosDobrados = [2, 4, 6, 8]
console.log(numerosDobrados);

// ou assim:
// Arrow function com retorno implícito

let numerosDobradosArrow = numeros.map(num => num * 2);*/

/*let numeros = [5,10,15,20];

let maiorQueDez = numeros.filter(num => num > 10);

console.log(maiorQueDez);*/

// ------------------------------------------------------------------FILTER
// Filtra os elementos com base em uma condição

// let numeros = [5, 10, 15, 20];

// let maioresQueDez = numeros.filter(num => num > 10);

// // maioresQueDez = [15, 20]
// console.log(maioresQueDez);

//-------------------------------------------------------------------REDUCE
// reduz os valores de um array para um único valor
/*let numeros = [1,2,3,4];
let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
console.log(soma);*/

//--------------------------------------------------------------------FIND
//retorna o primeiro elemento que atende a condição
// let pordutos = [
//     {id:1, nome: "teclado", preco:50}, //produto
//     {id:2, nome: "Mouse", preco:30}
// ]
// let item = pordutos.find(produto => produto.id === 2);
// console.log(item);

// //DIFERENÇA ENTRE FIND E FILTER
// //find -> retorna somente o primeiro elemento que ele econtra com a condição
// //filter -> retorna todos os elementos que encontra com a condição
// let itemFiltrado = produtos.filter(produto => produto.id === 2);
// console.log(itemFiltrado);

// ------------------------------------------------------------------SPLIT 
//divide a string em partes,transformando em um array
// let frase = "JS é top";
// let palavras = frase.split(" ");
// console.log(palavras);

//-----------------------------------------------------------------TRIM
//trim remove espaços no inicio e final de string
// let nome = "      paulo";
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);
//--------------------------------------------------------------------INCLUDES
//Verifica se existe um valor dentro de uma lista e retorna um booleano
//verdadeiro ou falso
// let frutas = ["maçã", "banana"];
// let frutasIncludes = frutas.includes("maçã");
// console.log(frutasIncludes);//true
//----------------------------------------------------------toUpperCase e ToLowerCase
// let nome = "lais";
// let cargo = "aluna";
// console.log(nome.toLowerCase());//transforma em minusculo
// console.log(cargo.toUpperCase());//transforma em maiusculo
//-------------------------------------------------------------------FOREACH
// let nomes = ["Guilherme", "joão", "Ada"];
// nomes.forEach(nome => console.log(nome));
//------------------------------------------------------------------SOME
//verifica se pelo menos um item atende a uma condição
//retorna boleano
// let numeros = [1, 3, 5, 8];
// let temPar= numeros.some (num => num %2 === 0);
// console.log(temPar);
// // -------------------------------------------------------------EVERY
// //Verifica se todos os elementos atendem a condição
// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares);//false
//------------------------------------------------------------------SORT
//ordena os elementos do array
// let numeros = [3, 10, 5, 2, 4];
// let letras =["c", "a", "x", "h"];
// //para letras
// letras.sort();
// console.log(letras);
// //para numeros
// numeros.sort((a,b) => a - b);
// console.log(numeros);
//-----------------------------------------------------------------REVERSE
//inverte a ordem dos elementos do array
// let numeros = [1, 2, 3];
// numeros.reverse();
// console.log(numeros);//3,2,1
//-------------------------------------------------------------------JOIN
//junta os elementos de um array em uma string
// let palavras = ["js", "é", "top"];
// let frase = palavras.join(" ");
// console.log(frase);


//---------------------------------------- adicionando e removendo elementos do array
//push
//pop
//shift
///unshift
// let lista = ["a", "b"];
// //PUSH -> Adiciona elementos no final do array
// lista.push("C");//adicionando
// console.log(lista);

// //POP -> Remove os elementos no final da lista
// lista.pop();//removendo
// console.log(lista);

// //SHIFT -> Remove elemento no começo da lista
// lista.shift();// remove
// console.log(lista);

// //UNSHIFT -> Adicionar elementos no inicio da lista
// lista.unshift();
// console.log(lista);

//--------------------------------------------------------------------------SLICE
//cria uma copia de uma parte do array

/*
array.slice(inicial,final)
inicial -> onde começa
final -> onde termina (não inclui a posição/indice/index)
 */
// let numeros = [1 , 2, 3, 4];
// let parte = numeros.slice(1, 3);//posições do array
// console.log(parte);//[2, 3]
//----------------------------------------------------------------------SPLICE
//remove ou adiciona elementos em qualquer posição
// let numeros = [1, 2, 3, 4];
// //removendo elementos, sem adicionar
// numeros.splice(1, 1);
// console.log(numeros);

// //removendo elementos e adicionando mais dois elementos 
// let frutas = ["banana", "laranja", "maçã", "manga"];
// // frutas.splice(0, 3, "limão", "kiwi");
// // console.log(frutas);//[limao,kiwi,manga]

// //adicionando elementos sem remover
// frutas.splice(2, 0, "limão", "kiwi");
// console.log(frutas);//[banana, laranja, limao, kiwi, maça, manga]
//----------------------------------------------------------------------REPLACE
//substitui uma parte da string
/*
replace(valorProcurado, "valorQueSubstitui")
*/
// let texto = "olá, mundo!";
// let novoTexto = texto.replace("mundo", "cliente");
// console.log(novoTexto);
//----------------------------------------------------------------NOSSAS FUNÇÕES

//---------função comum

// function exibirMensagem(){
//     console.log("BEM-VINDO(A)!");
// }
// exibirMensagem();

// //---------função com parâmetros

// function cumprimentar (nome){
//     console.log(`Olá, ${nome}`);
// }

// cumprimentar("Ana");
// cumprimentar("Carlos");

//-----------------função com mais de um parâmetro

// function somar(n1, n2){
//     let soma = n1 + n2
//     console.log(soma)
// }

// somar(2, 3);
// const somar = (n1,n2) => n1 + n2;
// console.log(somar(1,2));
//------------------------------------------------------------ PROMPT
//recebe/solicita uma informação do usuário
//o valor recebido pelo promp geralmente é string
// let nome = prompt("digite seu nome: ")
// console.log(nome)
// alert (nome)

// //recebendo um número e convertendo
// //Number() -> converte de forma genérica
// let idade = Number(prompt("digite seu idade: "))

// //ParseInt() -> converte o valor para um numero inteiro
// idade = parseInt(prompt("digite sua idade:"))

// //parseFloat() -> converte o valor para número decimal/ponto flutuante
// idade = parseFloat(prompt("digite sua idade:"))