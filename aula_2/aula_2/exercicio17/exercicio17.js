let nota1
let nota2

nota1 = prompt("Informe a nota do candidato 1")
nota2 = prompt("Informe a nota do candidato 2")

if(nota1 > nota2){
    alert("Candidato 1 possui melhor desempenho")
}

else if(nota2 > nota1){
    alert("Candidato 2 teve melhor desempenho")
}

else{
    alert("Empate")
}