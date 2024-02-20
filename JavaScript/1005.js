let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

console.log(lines)

let x = Number(lines.shift())
let y = Number(lines.shift())
let media = (((x*3.5)+(y*7.5))/11)

console.log(`MEDIA = ${media.toFixed(5)}`)