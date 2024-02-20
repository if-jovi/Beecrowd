const { linkSync } = require('fs')

let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

while(lines.length){
    let lista = lines.shift()
    lista = lista.split(" ")
    lista = lista.map((a) => +a)
    let resultado = 0
    let v0 = lista[0]
    let v1 = lista [1]
    let v2 = lista [2]
    let v3 = lista [3]
    if(v0 == 0 && v1 == 0 && v2 == 0 && v3 == 0){break}
    let resu1 = (v0 - v2)
    let resu2 = (v1 - v3)
    
    if(resu1 == "-2" || resu1 == "-1"){
        resu1 = (resu1 * -1)
    }
    if(resu2 == "-2" || resu2 == "-1"){
        resu2 = (resu2 * -1)
    }
     
    if(v0 == v2 && v1 == v3){
        console.log("0")
    }

    if(resu1 == resu2 && resu1 > 0 && resu2 > 0){
        console.log("1")
    }

    if(resu1 < resu2 || resu1 > resu2){
        console.log("2")
    }
}