let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let valor = lines.shift()
let lista = valor.split("")
let control = true

if(valor == "13" && valor.length == 2){
    console.log(`${valor} es de Mala Suerte`)
}else if(valor !== "13" && valor.length == 2){
    console.log(`${valor} NO es de Mala Suerte`)
}else{
    for(let i = 0 ;i < lista.length-1;++i){
        if(lista[i] == "1" && lista[i+1] == "3"){
            control = false
            break;
        }
    }
}
control  ? console.log(`${valor} NO es de Mala Suerte`): console.log(`${valor} es de Mala Suerte`)