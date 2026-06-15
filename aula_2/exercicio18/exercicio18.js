const lucroPrejuizo = (resultado) => {

    if(resultado > 0){
        return "Lucro"
    }

    if(resutado < 0){
        return "Prejuízo"
    }

    return "Empate financeiro"
}

alert(lucroPrejuizo(prompt("Informe o resultado financeiro")))