const form = document.querySelector('form')
const quantidadeInput = document.querySelector('#quantidade')
const precoInput = document.querySelector('#preco')
const button = document.querySelector('button')

let quantidade, preco, total

button.addEventListener('click', (event)=>{
    event.preventDefault()
    quantidade = quantidadeInput.value
    preco = precoInput.value
    total = quantidade * preco
    
    form.innerHTML = `
        
        <h1> 
             Valor total da compra: <//br>
             <span>R$ ${total.toFixed(2)}</span
                    


        </h1>

        
        `

})