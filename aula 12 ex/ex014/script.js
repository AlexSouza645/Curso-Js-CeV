function carregar() {
    var data = new Date()
    var hora =13//data.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    msg.innerHTML = `agora são ${hora} hrs`

    if (hora >= 0 && hora < 12) {

        img.src = "manha.jpg"//bom dia 
        document.body.style.background='#a6c2ab'
    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.jpg"
        //boa tarde
        document.body.style.background='#fe8709'
    }
    else {//boa noite! 
        img.src = "noite.jpg"
        document.body.style.background='#0c4f7c'
    }
}

