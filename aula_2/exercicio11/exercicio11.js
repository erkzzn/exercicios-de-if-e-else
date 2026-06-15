const notaAprovacao = 7
const notaRecuperacao = 5

let nota
nota = prompt("Informe a nota final do aluno")

if(nota>= notaAprovacao){
    alert("aprovado")
}

else if(nota >= notaRecuperacao){
    alert("Recuperação")

}

else{
    alert("Reprovado")
}