function verificar(){
    //window.alert (`Funcionou!!!! Zé Ruela`) sempre fazer teste
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Favor, preencher os dados corretamente!')
    } else {
        //window.alert('Acertou meu jovem, juvial!!!') realizei teste para validação do script
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade} anos!` mais outro exemplo de validação   
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','homem1-crop.jpeg')
                img.setAttribute('width', '50%')

            }else if(idade < 20){
                //adolescente
                img.setAttribute('src','homem12-crop.jpg')
                img.setAttribute('width', '50%')
            }else if(idade < 30){
                //adolescente
                img.setAttribute('src','homem26-crop.PNG')
                img.setAttribute('width', '50%')
            }else if(idade < 40){
                //homem1
                img.setAttribute('src','homem30-crop.PNG')
                img.setAttribute('width', '50%')
            }else if(idade < 50){
                //homem2
                img.setAttribute('src','homem40-crop.PNG')
                img.setAttribute('width', '50%')
            }else if(idade < 60){
                //homem3
                img.setAttribute('src','homem58-crop.PNG')
                img.setAttribute('width', '50%')
            }else if(idade <100){
                //idoso 90
                img.setAttribute('src','homem80-crop.JPEG')
                img.setAttribute('width','50%')
            }else {
                img.setAttribute('src','RIP.JPG')
                img.setAttribute('width', '50%')
            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','mulher1-crop.jpeg')
                img.setAttribute('width', '50%')

            }else if(idade < 20){
                //adolescente
                img.setAttribute('src','mulher12-crop.jpeg')
                img.setAttribute('width', '50%')
            }else if(idade < 30){
                //adolescente
                img.setAttribute('src','mulher23-crop.PNG')
                img.setAttribute('width', '50%')

            }else if(idade<35){
                img.setAttribute('src','mulher30-crop.png')
                img.setAttribute('width','50%')

            }else if(idade < 40){
                //mulher1
                img.setAttribute('src','mulher36.PNG')
                img.setAttribute('width', '50%')
            }else if(idade < 50){
                //mulher2
                img.setAttribute('src','mulher40-crop.jpeg')
                img.setAttribute('width', '50%')
            }else if(idade < 60){
                //mulher3
                img.setAttribute('src','mulher50-crop.jpg')
                img.setAttribute('width', '50%')
            }else if(idade <100){
                //mulher80
                img.setAttribute('src','mulher80-crop.jpeg')
                img.setAttribute('width','50%')
            }else {
                //idoso
                img.setAttribute('src','RIP.JPG')
                img.setAttribute('width', '50%')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
