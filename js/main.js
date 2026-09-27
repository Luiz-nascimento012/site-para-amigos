var inputdin = document.querySelector('input#idin')
var mostra = document.querySelector('div.title')
var containerinput = document.querySelector('section.valor')
var ccontainersacola = document.querySelector('details.comp')
var containermercado = document.querySelector('section.mercado')
var dinhiero = 0

window.addEventListener("keydown", (e) => {

    if(e.key === "Enter") {
        
        dinhiero = Number(inputdin.value.replace(",", "."))

        if(dinhiero === 0 || dinhiero < 0) {
            window.alert("tá duro? DORME!!!!!!")
            return
        }  else {
            containerinput.style.display = "none"
            ccontainersacola.style.display = "block"
            containermercado.style.display = "block"
            mostra.innerHTML += `<p class="money">Você tem exatos <strong>R$${dinhiero.toFixed(2).replace(".", ",")}</strong> para usar</p>`
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

            quantidade.innerText = Number(quantidade.innerText) - 1
    })

})

var botoesAddlista = document.querySelectorAll("button.addicionar")

botoesAddlista.forEach((botao) => {
    botao.addEventListener("click", ()=> {
        var produto = botao.closest(".produto")
        var nome = produto.querySelector("h3").textContent
        var und = Number(produto.querySelector('.quantidade').textContent)
        var lista = document.querySelector("ul")
        var itemExistente = lista.querySelector(`[data-produto="${nome}"]`)
        var valor = Number(produto.querySelector(".custo").innerText.replace(",", "."))
        var ValorTotal = valor * und

        if (itemExistente) {
            console.log("Já existe!")
            return window.alert('produto já existente')
        } else {
            dinhiero -= valor * und




            mostra.innerHTML = `<p class="money">Agora você tem exatos <strong>R$${dinhiero.toFixed(2).replace(".", ",")}</strong> para usar</p>`
            lista.innerHTML += `
            <li class="item-sacola" data-produto="${nome}">${nome} : ${und} und - R$${ValorTotal.toFixed(2).replace(".", ",")}</li>`
        }
    })
})


