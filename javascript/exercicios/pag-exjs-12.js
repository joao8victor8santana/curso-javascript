agora = new Date()
hora = agora.getHours()
min = agora.getMinutes()
console.log(`Agora são exatamente ${hora}h e ${min}min.`)
if (hora < 6) 
{
    console.log("Boa madrugada!")
    } else if (hora < 12) {
    console.log("Bom dia!")   
    } else if (hora < 18) {
    console.log("Boa tarde!")
    } else {
    console.log("Boa noite!")
}