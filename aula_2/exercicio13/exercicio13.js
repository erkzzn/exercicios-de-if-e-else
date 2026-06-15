const compararProducao = (maquina1, maquina2) => {

if(maquina1> maquina2){
    return "Máquina 1 produziu mais"
}

if(maquina2 > maquina1){
    return "Máquina 2 produziu mais"
}

    return "Empate"

}

alert(compararProducao(prompt("Produção da máquina 1"), prompt("Produção da máquina 2")))