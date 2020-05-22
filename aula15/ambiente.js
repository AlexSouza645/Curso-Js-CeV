let num =[5,8,9,7]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)//usado p/ contar números de variáveis
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)//usado para procurar uma variavel
if (pos == -1 ){
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor 8 esta na posição ${pos}`)
}
