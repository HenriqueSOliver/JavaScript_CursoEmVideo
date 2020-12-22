function carregar (){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'

    }else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'

    }else if (hora > 18 && hora <= 23) {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'

    }else {
        //Boa Madrugda!
        img.src = 'fotomadruga.png'
        document.body.style.background = '#1F1F1F'
    }
        
    
}