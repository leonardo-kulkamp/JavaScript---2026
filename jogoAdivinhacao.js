const readline = require('readline-sync');

console.log("Jogo da adivinhação, chute um número de 1 a 10: ")

const numeroSecreto = Math.floor(Math.random()*10 + 1);

let palpite = readline.questionInt("Qual é o seu papite? ")
let tentativas = 1;

while(palpite != numeroSecreto){
    if (palpite < numeroSecreto){
        console.log("O número secreto é maior do que o seu chute.");
    }
    else{
        console.log("O número secreto é menor do que o seu chute.")
    }

    palpite = readline.questionInt("Tente de novo. ");
    tentativas ++;
}
console.log(`Parabéns, você acertou o ${numeroSecreto} em ${tentativas} tentativas`)