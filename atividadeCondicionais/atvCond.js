//NIVEL BASICO

//exer 1 
function verificarIdade() {
    let idade = Number (document.getElementById("idadeInput").value);
    let mensagem = idade >= 18? "Aprovado!" : "Consulte um responsável";
    console.log(mensagem);
} 

//exer 2
function posOuNeg(){
    let numero = Number (document.getElementById("posOuNegInput").value);
    let verificação = numero > 0? "Número Positivo" : "Número Negativo";
    console.log(verificação);
}

//exer 3 
function verificarNota() {
    let nota = Number (document.getElementById("notaInput").value);
    let mensagem = nota >= 60? "Aprovado!" : "Reprovado";
    console.log(mensagem);
} 
//exer 4
function verificarNumber(){
    let numero = Number (document.getElementById("numberInput").value);
    if(numero > 0){
    console.log("Número Positivo");
    }else if (numero < 0){
        console.log("Número Negativo"); 
    }else{
        console.log("o número é zero");
    }
}
//exer 5
function classificacaoIdade() {
    let idade = Number (document.getElementById("classificacaoInput").value);
   if(idade < 12){
    console.log("Criança");
    }else if (idade < 18){
        console.log("Adolescente"); 
    }else{
        console.log("Adulto");
    }
   
} 
//exer 6
function imparOuPar(){
    const numero = Number (document.getElementById("parImparInput").value);
    const resultado = (numero % 2 === 0) ? "O número é par" : "O número é ímpar";
    console.log(resultado); 
}
