let botoes = document.querySelectorAll(".botao")

botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
        e.preventDefault()
        let targetEl = e.target

        let valorBotao = targetEl.textContent
        document.querySelector("#visor").textContent += valorBotao
    })
})

// Funções
function Calcular() {
    let resultado = document.querySelector("#visor").textContent
    let resultadoNumerico = eval(resultado)
    if (!isNaN(resultadoNumerico)) {
        if (Number.isInteger(resultadoNumerico)) {
            document.querySelector("#visor").textContent = resultadoNumerico
        } else {
            document.querySelector("#visor").textContent = resultadoNumerico.toFixed(2)
        }
    } else {
        document.querySelector("#visor").textContent = "erro"
    }

}

function Back() {
    var resultado = document.querySelector("#visor").textContent
    document.querySelector("#visor").textContent = resultado.substring(0, resultado.length - 1)
}

function Delete() {
    document.querySelector("#visor").textContent = ""
}