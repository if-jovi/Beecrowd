let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

console.log(lines)

let a = Number(lines.shift())
let b = Number(lines.shift())
let c = Number(lines.shift())
let media = (((a*2) + (b*3) + (c*5)) /10)

console.log(`MEDIA = ${media.toFixed(1)}`)