
function contar() {
    let inic = window.document.getElementById ('txtinic')
    let fim = window.document.getElementById ('txtfim')
    let pass = window.document.getElementById ('txtpass')
    let res = window.document.getElementById('res')

    if (inic.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossivel de contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if(p <= 0) {
            window.alert('Passo inválido!  Considerando PASSO 1')
            p = 1
        }
        if (i < f) { 
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{270D}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{270D}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`       
    } 
        
}




