//------------------------------------------------BÁSICO
// exer 1
for(number = 1; number <= 10; number++)
{
    console.log(number);
}


//exer 2
let numero = prompt("Digite um número:");
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}


//exer 3
let N = prompt("Digite um número:");
let soma = 0;
for (let i = 1; i <= N; i++) {
  soma = soma + i;
}
console.log("A soma de 1 até " + N + " é: " + soma);

// -------------------------------------INTERMEDIÁRIO

// exer 1
for (let i = 2; i <= 50; i = i + 2) {
  console.log(i);
}
