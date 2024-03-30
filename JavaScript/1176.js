let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let casos = +lines.shift()



for (let index = 0; index < casos; index++) {
    
    let resultado = 0
    let pri = 0
    let seg = 1
    let ter = 1
    
    let numfib= +lines.shift()
    let consoleFib = numfib
    if(numfib == 0){
        console.log("Fib(0) = 0")
    }

    for (let i = 0; i < numfib; i++) {
        ter = pri+ seg
        pri = seg
        seg = ter
        
        
    }
    console.log(resultado)
}