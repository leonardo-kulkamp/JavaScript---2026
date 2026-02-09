let nota1 = 8;
let nota2 = 9;
let nota3 = 9;
let nota4 = 10;

const nomeAluno = "Olliver";

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7){
    console.log ("O aluno Olliver está Aprovado.")
}
if (media >= 5 && media < 7){
    console.log ("O aluno Olliver está de Se Liga.")
}
if (media < 5){
    console.log ("O aluno Olliver está Reprovado")
}

console.log ("O aluno: " + nomeAluno);
console.log ("Tem a média: " + media);