const classificarTriangulo = (lado1, lado2, lado3) => {

if( lado1 + lado2 > lado3 && 
    lado1 + lado3 > lado2 &&
    lado2 + lado3 > lado1){

        if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
            return "Triângulo Isósceles"
        }
        return "Triângulo Escaleno"

        }

        return "Não forma um triângulo"

    }

    alert(classificarTriangulo(
        Number(prompt("Primeiro lado")), 
        Number(prompt("Segundo lado")),
        Number(prompt("Terceiro lado"))
        ))
    