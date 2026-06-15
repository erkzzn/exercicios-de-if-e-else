const processoSeletivo = (nota1, nota2) => {

    if(nota1> nota2){
        return "Candidato 1 possui melhor desempenho"
    }

    if(nota2 > nota1){
        return "Candidato 2 possui melhor desempenho"
    }

    return "Empate"
}

alert(processoSeletivo(prompt("Nota do candidato 1"),
prompt("Nota do candidato 2")))