let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x = +lines.shift()

if(x % 2 == 0){
    ++x
}

console.log(x)
for (let i = 0;i < 5;i += 1){
    x += 2
    console.log(x)
}