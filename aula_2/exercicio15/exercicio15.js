const multiplo3 = 3
const multiplo5 =5

let numero

numero = prompt("Informe um número inteiro")

if(numero % multiplo3 == 0 && numero % multiplo5 == 0){
        alert("Múltiplo de 3 e 5")
}

else if(numero % multiplo3 == 0){
    alert("Múltiplo de 3")
}

else if (numero % multiplo5 == 0){
    alert("Múltiplo de 5")
}

else{
    alert("Não é múltiplo de 3 nem de 5")
}