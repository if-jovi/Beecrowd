let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)

let N = +lines.shift()
let i = 0

while(i < N){
    let [x,y] = pegarValores(lines.shift().trim())
    
    if(x != 0 && y != 0){
        console.log((x/y).toFixed(1))
    }
    
    if(x == 0 && y != 0){
        console.log((x/y).toFixed(1))
    }
    
    if(x != 0 && y == 0){
        console.log("divisao impossivel")
    }

    ++i
}