var agora = new Date()
var hora = agora.getHours()+":"+agora.getMinutes()
console.log(`agora são exatamente ${hora} horas`)
if(hora<=12) {
    console.log('bom dia')
}else if ( hora <= 18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}