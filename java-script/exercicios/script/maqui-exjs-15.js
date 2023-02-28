ver = document.querySelector("input#ver")

bo1 = document.querySelector("mark#bo1")
bo2 = document.querySelector("mark#bo2")
bo3 = document.querySelector("mark#bo3")

oma = document.querySelector("input#oma")
ofe = document.querySelector("input#ofe")
onb = document.querySelector("input#onb")

bt1 = document.querySelector("label#bt1")
bt2 = document.querySelector("label#bt2")
bt3 = document.querySelector("label#bt3")



ver.addEventListener("mouseenter", entrara)
ver.addEventListener("mouseout", saira)

bo1.addEventListener("mouseenter", entrar1)
bo1.addEventListener("mouseout", sair1)
bo2.addEventListener("mouseenter", entrar2)
bo2.addEventListener("mouseout", sair2)
bo3.addEventListener("mouseenter", entrar3)
bo3.addEventListener("mouseout", sair3)

bt1.addEventListener("mouseenter", entrar1)
bt1.addEventListener("mouseout", sair1)
bt2.addEventListener("mouseenter", entrar2)
bt2.addEventListener("mouseout", sair2)
bt3.addEventListener("mouseenter", entrar3)
bt3.addEventListener("mouseout", sair3)

oma.addEventListener("mouseenter", entra1)
oma.addEventListener("mouseout", sair1)
ofe.addEventListener("mouseenter", entrar2)
ofe.addEventListener("mouseout", sair2)
onb.addEventListener("mouseenter", entrar3)
onb.addEventListener("mouseout", sair3)



function entrara() {ver.style.background = "#252525"}

function entrar1() {bo1.style.background = "#252525"}
function entrar2() {bo2.style.background = "#252525"}
function entrar3() {bo3.style.background = "#252525"}


function saira() {ver.style.background = "#a9a9a9"}

function sair1() {bo1.style.background = "#a9a9a9"}
function sair2() {bo2.style.background = "#a9a9a9"}
function sair3() {bo3.style.background = "#a9a9a9"}



function verificar() {
    res = document.querySelector("div#res")
    nas = document.querySelector("input#nas")
    data = new Date()
    ano = data.getFullYear()
    ah = Number(ano)
    an = Number(nas.value)
    idade = ah - an
    img = document.createElement("img")

    if ( an==0 || an>ah ) { 
        alert("[ERRO] Verifique as informações.")

        } else if ( oma.checked && idade<12 ) { // masculino criança
                res.innerHTML = `Você é um garoto de ${idade} anos!`
                img.setAttribute("src", "conteudo/h1 imagem .png")
            } else if ( oma.checked && idade<18 ) { // masculino jovem
                res.innerHTML = `Você é um jovem de ${idade} anos!`
                img.setAttribute("src", "conteudo/h2 imagem .png")
            } else if ( oma.checked && idade<50 ) { // masculino adulto
                res.innerHTML = `Você é um homem de ${idade} anos!`
                img.setAttribute("src", "conteudo/h3 imagem .png")
            } else if ( oma.checked && idade<=120) { // masculino idoso
                res.innerHTML = `Você é um idoso de ${idade} anos!`
                img.setAttribute("src", "conteudo/h4 imagem .png")
            } else if ( oma.checked && idade>120) { // mumia
                res.innerHTML = `Você tem ${idade} anos e com certeza é brocha.`
                img.setAttribute("src", "conteudo/mumi .png")


        } else if ( ofe.checked && idade<12 ) { // feminio criança
                res.innerHTML = `Você é uma garota de ${idade} anos!`
                img.setAttribute("src", "conteudo/m1 imagem .png")
            } else if ( ofe.checked && idade<18 ) { // feminino jovem
                res.innerHTML = `Você é uma jovem de ${idade} anos!`
                img.setAttribute("src", "conteudo/m2 imagem .png")
            } else if ( ofe.checked && idade<50 ) { // feminino mulher
                res.innerHTML = `Você é uma mulher de ${idade} anos!`
                img.setAttribute("src", "conteudo/m3 imagem .png")
            } else if ( ofe.checked && idade<=120) { // feminino idosa
                res.innerHTML = `Você é uma idosa de ${idade} anos!`
                img.setAttribute("src", "conteudo/m4 imagem .png")
            } else if ( ofe.checked && idade>120) { // mumia
                res.innerHTML = `Você tem ${idade} anos! Um feito extraordinário!`
                img.setAttribute("src", "conteudo/mumi .png")


        } else if ( onb.checked && idade<12 ) { // não-binário criança
                res.innerHTML = `Você é uma criança de ${idade} anos!`
                img.setAttribute("src", "conteudo/nb1 imagem .png")
            } else if ( onb.checked && idade<18 ) { // não-binário jovem
                res.innerHTML = `Você tem ${idade} anos e uma vida inteira pela frente!`
                img.setAttribute("src", "conteudo/nb2 imagem .png")
            } else if ( onb.checked && idade<50 ) { // não-binário maior de idade
                res.innerHTML = `Você tem muitas responsabilidades, boletos pra pagar e ${idade} anos de idade!`
                img.setAttribute("src", "conteudo/nb3 imagem .png")
            } else if ( onb.checked && idade<=120 ) { // não-binário coroa
                res.innerHTML = `Você tem ${idade} anos e provavelmente muitas dores na costas!`
                img.setAttribute("src", "conteudo/nb4 imagem .png")
            } else if ( onb.checked && idade>120 ) { // mumia
                res.innerHTML = `Você tem ${idade} e é provavel que tenha ajudado nas construções das pirâmides.`
                img.setAttribute("src", "conteudo/mumi .png")}
    res.appendChild(img)
    }