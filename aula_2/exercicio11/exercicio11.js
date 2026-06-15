const resultadoEscolar = (nota) => {

if(nota>= 7){
    return "Aprovado"
}

if(nota>= 5){
    return "Recuperação"
}

return "Reprovado"

}

alert(resultadoEscolar(prompt("Informe a nota final")))