//////////VARIÁVEIS\\\\\\\\\\

let níveis = ('Abaixo do peso',
              'Peso saudável',
              'Sobrepeso',
              'Obeso',
              'Obesidade I')
            



let pessoas = ['Luiz']

let massas = [90]
let alturas = [1.80]

//////////FUNÇÕES\\\\\\\\\\

function calcularIMC (massa,altura){

let IMC = massa/(altura **2)

return IMC 
}



function VerificarNível(IMC){

let nível = 0

if (IMC < 18.4){
nível = 0

}else if (IMC < 24.9){
    nível = 1

}else if (IMC < 29.9){
    nível = 2

}else if (IMC < 40){
    nível = 3

}else if (IMC > 40){
    nível = 4

}


return nível 

}



//////////EXECUÇÃO\\\\\\\\\\
for(let índice =0; índice < pessoas.length; índice++){

let índice = 0
let pessoa = pessoas[índice]
let massa = massas[índice]
let altura = alturas[índice]


let IMC = calcularIMC (massa,altura)
let nível = VerificarNível(IMC)

console.log('nome:'+pessoa)
console.log('KG:'+massa)
console.log('altura:'+altura)
console.log('IMC:'+IMC.toFixed(2))
console.log('estado:'+níveis[nível])
console.log('grau:'+nível)
console.log('')
}




