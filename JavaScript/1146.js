let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

while(lines.length){
    let resul = 1
    let lista = []
    let X = +lines.shift()
    if(!X)break
    for (let i = 0;i < X;++i) {
        lista.push(resul)
        resul++
        
    }
    console.log(lista.join(" "))
}
