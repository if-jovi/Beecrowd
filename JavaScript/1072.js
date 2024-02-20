let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()
let dentro = 0
let fora = 0

for ( let i = 0 ;i< N;++i){
    let x =  +lines.shift()

    if(x >= 10 && x <= 20){
        ++dentro
    }

    if(x < 10 || x >20){
        ++fora 
    }
}

console.log(`${dentro} in`)
console.log(`${fora} out`)