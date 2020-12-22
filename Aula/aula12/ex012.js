var hora = 6
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <6 ){
    console.log(`Boa Madrugada!`)
}else if (hora >=12 && hora <=18){
    console.log(`Boa tarde!`)
}else if (hora >=19 && hora <=24 ){
    console.log (`Boa Noite!`)
}else {
    console.log(`Bom dia!`)
}
