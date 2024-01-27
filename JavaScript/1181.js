let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let numMatriz = +lines.shift()
let LMatriz = lines.shift().trim()
let resul = 0
let resulneg = 0
let cont = 0

while(lines.length){
    let numeros = +(lines.shift)()
    if(numeros < 0){
        resulneg -= numeros
    }

    if(numeros > 0 ){
        resul += numeros
    }
    ++cont 
}


if(LMatriz == "S"){
    console.log((resul- resulneg).toFixed(1))
}else{
    console.log(((resul-resulneg)/cont).toFixed(1))
}