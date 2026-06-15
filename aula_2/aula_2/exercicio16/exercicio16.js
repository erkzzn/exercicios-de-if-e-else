const usuarioCorreto = "admin"
const senhaCorreta = "1234"

let usuario
let senha

usuario = prompt("Informe o usuário")
senha = prompt ("Informe a senha")

if (usuario == usuarioCorreto && senha == senhaCorreta){
    alert("Acesso permitido")
}

else{
    alert("Acesso negado")
}