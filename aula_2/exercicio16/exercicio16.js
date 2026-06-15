const autenticar = (usuarioCorreto, senhaCorreta) => {

    let usuario = prompt("Informe o usuário")
    let senha = prompt("Informe a senha")

    if(usuario == usuarioCorreto && senha == senhaCorreta){
        return "Acesso permitido"

}

return "Acesso negado"

}

alert(autenticar("admin", "1234"))
