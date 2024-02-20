let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)


let [inicio,final] = pegarValores(lines.shift())

if(inicio ==  final ){
    let h = +24 
    console.log(`O JOGO DUROU ${h} HORA(S)`)
}
if(inicio < final){console.log(`O JOGO DUROU ${(Math.abs(inicio - final))} HORA(S)`) }

if(inicio> final) {console.log(`O JOGO DUROU ${(24-(Math.abs(inicio - final)))} HORA(S)`)}

