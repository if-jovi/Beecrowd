let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()
let lista = []
let ratos = 0
let coelhos = 0
let sapos = 0
let i = 0
const pegarValores = (line) => line.split(" ").map(a => a)


while(i < N){
    let [x,y] = pegarValores(lines.shift().trim())
    
    if(y == "C"){
        coelhos += Number(x)
    }

    if(y == "R"){
        ratos += Number(x)
    }

    if(y == "S"){
        sapos += Number(x)
    }
    

    ++i
    lista.push(x)
}

let total = lista.map(a => +a).reduce((a,b)=> a+b)
console.log(`Total: ${total} cobaias`)
console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)
console.log(`Percentual de coelhos: ${((coelhos/ total)*100).toFixed(2)} %`)
console.log(`Percentual de ratos: ${((ratos/ total)*100).toFixed(2)} %`)
console.log(`Percentual de sapos: ${((sapos/ total)*100).toFixed(2)} %`)