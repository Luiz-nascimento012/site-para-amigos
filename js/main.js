var inputdin = document.querySelector('input#idin')
var mostra = document.querySelector('p.money')
var containerinput = document.querySelector('section.valor')
var ccontainersacola = document.querySelector('details.comp')
var containermercado = document.querySelector('section.mercado')

window.addEventListener("keydown", (e) => {
    var dinhiero = Number(inputdin.value.replace(",", "."))


    if(e.key === "Enter") {
        if(dinhiero === 0 || dinhiero < 0) {
            window.alert("tá duro? DORME!!!!!!")
            return
        }  else {
            containerinput.style.display = "none"
            ccontainersacola.style.display = "block"
            containermercado.style.display = "block"
            mostra.innerHTML = `<p>Você tem exatos <strong>R$${dinhiero.toFixed(2).replace(".", ",")}</strong> para usar</p>`
        } 
    }
})

var botoesAdd = document.querySelectorAll(".add")
var botoesRem = document.querySelectorAll(".rem")

botoesAdd.forEach((botao) => {

    botao.addEventListener("click", () => {

        var produto = botao.closest(".produto")
        var quantidade = produto.querySelector(".quantidade")

        quantidade.innerText = Number(quantidade.innerText) + 1

    })

})

botoesRem.forEach((botao) => {

    botao.addEventListener("click", () => {

        var produto = botao.closest(".produto")
        var quantidade = produto.querySelector(".quantidade")

        if (Number(quantidade.innerText) > 0) {
            quantidade.innerText = Number(quantidade.innerText) - 1
        }

    })

})

var botoesAddlista = document.querySelectorAll("button.addicionar")

botoesAddlista.forEach((botao) => {
    botao.addEventListener("click", ()=> {
        var produto = botao.closest(".produto")
        var nome = produto.querySelector("h3").textContent
        var und = document.querySelector('span.quantidade').textContent
        var lista = document.querySelector("ul")
        var itemExistente = lista.querySelector(`[data-produto="${nome}"]`)

        if (itemExistente) {
    console.log("Já existe!")
        } else {
            lista.innerHTML += `
            <li class="item-sacola" data-produto="${nome}">
            ${nome} : ${und} und
        </li>
    `
}
    })
})