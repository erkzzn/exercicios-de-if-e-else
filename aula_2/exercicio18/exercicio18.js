const zero = 0

let resultado

resultado = prompt("Informe o resultado financeiro")

if(resultado > zero){
    alert("Houve lucro")
}

else if(resultado < zero){
    alert("Houve prejuízo")
}

else{
    alert("Empate financeiro")
}