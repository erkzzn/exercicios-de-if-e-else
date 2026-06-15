const verificarMultiplo = (numero) => {

    if(numero % 3 == 0 && numero % 5 == 0){

        return "Múltiplo de 3 e 5"

    }

    if(numero % 3 == 0){
        return "Múltiplo de 3"
    }

    if(numero % 5 == 0){
        return "Múltiplo de 5"
    }

    return "Não é múltiplo de 3 nem de 5"
}

alert(verificarMultiplo(prompt("Informe um número")))
