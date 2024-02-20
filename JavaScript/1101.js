let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)


while(lines.length){
    let lista = []
    let sum = 0
    let[M,N] = pegarValores(lines.shift())
    if(M <= 0 || N <= 0)break
    if(M > N){[M,N] = [N,M]}
    
    
    while(M < (N + 1)){
        lista.push(M)
        sum +=M
        M +=1
        
    }
    console.log(`${lista = lista.join(` `)} Sum=${sum}`)
}   
