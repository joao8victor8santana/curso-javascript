
// id
res = document.querySelector("main#res")
sel = document.querySelector("input#sel")
b1 = document.querySelector("input#b1")
b2 = document.querySelector("input#b2")
b3 = document.querySelector("input#b3")
b4 = document.querySelector("input#b4")
b5 = document.querySelector("input#b5")
b6 = document.querySelector("input#b6")
b7 = document.querySelector("input#b7")
b8 = document.querySelector("input#b8")
b9 = document.querySelector("input#b9")
b10 = document.querySelector("input#b10")
b11 = document.querySelector("input#b11")
b12 = document.querySelector("input#b12")





// clicar
sel.addEventListener("click", selecionar)
b1.addEventListener("click", clicar1)
b2.addEventListener("click", clicar2)
b3.addEventListener("click", clicar3)
b4.addEventListener("click", clicar4)
b5.addEventListener("click", clicar5)
b6.addEventListener("click", clicar6)
b7.addEventListener("click", clicar7)
b8.addEventListener("click", clicar8)
b9.addEventListener("click", clicar9)
b10.addEventListener("click", clicar10)
b11.addEventListener("click", clicar11)
b12.addEventListener("click", clicar12)

// entrar
sel.addEventListener("mouseenter", entrar0)
b1.addEventListener("mouseenter", entrar1)
b2.addEventListener("mouseenter", entrar2)
b3.addEventListener("mouseenter", entrar3)
b4.addEventListener("mouseenter", entrar4)
b5.addEventListener("mouseenter", entrar5)
b6.addEventListener("mouseenter", entrar6)
b7.addEventListener("mouseenter", entrar7)
b8.addEventListener("mouseenter", entrar8)
b9.addEventListener("mouseenter", entrar9)
b10.addEventListener("mouseenter", entrar10)
b11.addEventListener("mouseenter", entrar11)
b12.addEventListener("mouseenter", entrar12)

// sair
sel.addEventListener("mouseout", sair0)
b1.addEventListener("mouseout", sair1)
b2.addEventListener("mouseout", sair2)
b3.addEventListener("mouseout", sair3)
b4.addEventListener("mouseout", sair4)
b5.addEventListener("mouseout", sair5)
b6.addEventListener("mouseout", sair6)
b7.addEventListener("mouseout", sair7)
b8.addEventListener("mouseout", sair8)
b9.addEventListener("mouseout", sair9)
b10.addEventListener("mouseout", sair10)
b11.addEventListener("mouseout", sair11)
b12.addEventListener("mouseout", sair12)





// function entrar
function entrar0() { sel.style.background = "#8c8c8c" }
function entrar1() { b1.style.background = "#8c8c8c" }
function entrar2() { b2.style.background = "#8c8c8c" }
function entrar3() { b3.style.background = "#8c8c8c" }
function entrar4() { b4.style.background = "#8c8c8c" }
function entrar5() { b5.style.background = "#8c8c8c" }
function entrar6() { b6.style.background = "#8c8c8c" }
function entrar7() { b7.style.background = "#8c8c8c" }
function entrar8() { b8.style.background = "#8c8c8c" }
function entrar9() { b9.style.background = "#8c8c8c" }
function entrar10() { b10.style.background = "#8c8c8c" }
function entrar11() { b11.style.background = "#8c8c8c" }
function entrar12() { b12.style.background = "#8c8c8c" }

// function sair
function sair0() { sel.style.background = "#e0e0e0" }
function sair1() { b1.style.background = "#e0e0e0" }
function sair2() { b2.style.background = "#e0e0e0" }
function sair3() { b3.style.background = "#e0e0e0" }
function sair4() { b4.style.background = "#e0e0e0" }
function sair5() { b5.style.background = "#e0e0e0" }
function sair6() { b6.style.background = "#e0e0e0" }
function sair7() { b7.style.background = "#e0e0e0" }
function sair8() { b8.style.background = "#e0e0e0" }
function sair9() { b9.style.background = "#e0e0e0" }
function sair10() { b10.style.background = "#e0e0e0" }
function sair11() { b11.style.background = "#e0e0e0" }
function sair12() { b12.style.background = "#e0e0e0" }

// function clicar
function clicar1() {país = "Brasil"}
function clicar2() {país = "Estados&nbsp;Unidos"}
function clicar3() {país = "Japão"}
function clicar4() {país = "Russia"}
function clicar5() {país = "Espanha"}
function clicar6() {país = "Alemanha"}
function clicar7() {país = "Argentina"}
function clicar8() {país = "Jamaica"}
function clicar9() {país = "Países&nbsp;Baixos"}
function clicar10() {país = "Ucrânia"}
function clicar11() {país = "Chile"}
function clicar12() {país = "China"}

function selecionar() {
    res.innerHTML = `<p>Você está vivendo em ${país}</p>`
        if (país == "Brasil") { 
        res.innerHTML += `<p>Você é Brasileiro!</p>`
        } else { 
        res.innerHTML += `<p>Você é Estrangeiro!</p>`} }
