// id
res = document.querySelector("p#res")
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


// function clicar
function clicar1() {
  pais = "Brasil"
  
}
function clicar2() {
  pais = "Estados Unidos"
}
function clicar3() {
  pais = "Japão"
}
function clicar4() {
  pais = "Russia"
}
function clicar5() {
  pais = "Espanha"
}
function clicar6() {
  pais = "Alemanha"
}
function clicar7() {
  pais = "Argentina"
}
function clicar8() {
  pais = "Jamaica"
}
function clicar9() {
  pais = "Países Baixos"
}
function clicar10() {
  pais = "Ucrânia"
}
function clicar11() {
  pais = "Chile"
}
function clicar12() {
  pais = "China"
}


function selecionar() {
  res.innerHTML = `Você está vivendo em ${pais}`
    if ( pais == "Brasil" ) { 
    res.innerHTML += `<p>Você é Brasileiro!</p>`
    } else { 
    res.innerHTML += `<p>Você é Estrangeiro!</p>`}
}
