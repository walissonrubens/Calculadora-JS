let botoes = document.querySelectorAll(".botao")
let visor = document.querySelector("#visor").value

botoes.forEach(botao =>{
    botao.addEventListener("click", (e) =>{
        e.preventDefault()
        let targetEl = e.target
        let visorValor = document.querySelector("#visor").value

        if(targetEl.classList.contains("numero")){
            valorBotao = targetEl.textContent
            document.querySelector("#visor").textContent += valorBotao
        }

    })
})

// Funções
 
function Delete(){
    document.querySelector("#visor").textContent = ""
}
   