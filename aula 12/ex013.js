var agora = new Date() // var p/ verificar o dia
var diaSem = agora.getDay()// p/ pegar o dia do sistema, dias da semana são de 0 a 5
//console.log(diaSem)
switch (diaSem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta feira')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('[erro] dia invalido')
        break




}