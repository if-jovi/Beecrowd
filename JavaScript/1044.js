let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)


let lista = [v1,m2] = pegarValores(lines.shift())
let multiplos
if (v1 > m2){
    multiplos = v1 % m2 == 0
        if(multiplos){console.log("Sao multiplos")}
            else{console.log("Nao sao multiplos")}
}


if(v1 <  m2){
    multiplos = m2 % v1 == 0
        if(multiplos){console.log("Sao multiplos")}
            else{console.log("Nao sao multiplos")}
}

