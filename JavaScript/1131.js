let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)
let continter = 0
let contgremio = 0
let empate = 0
let contgrenais = 1

while(lines.length){
    console.log("Novo grenal(1- sim 2-nao")
    let [inter,gremio] =  pegarValores(lines.shift().trim())
    let valido = +lines.shift()
    
    if(valido == 1){
        ++contgrenais
    }

    if(inter > gremio){
        continter += 1
    }

    if(inter < gremio){
        ++contgremio
    }

    if (inter == gremio){
        ++empate
    }

    if(valido == 2){break}
}
console.log(`${contgrenais} grenais`)
console.log(`Inter: ${continter}`)
console.log(`Gremio: ${contgremio}`)
console.log(`Empate: ${empate}`)
if(continter > contgremio){
    console.log("Inter venceu mais")
}else{
    console.log("Gremio venceu mais")
}