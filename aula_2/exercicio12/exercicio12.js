const verificarNumero = (numero) => {

if(numero > 0){
    return "Positivo"
}

if(numero <0){
    return "Negativo"
}

return "Igual a zero"

}

alert(verificarNumero(prompt("Informe um número")))