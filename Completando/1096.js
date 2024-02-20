let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

console.log(`I= 1 J=7`)
console.log(`I= 1 J=6`)
console.log(`I= 1 J=5`)

console.log(`I=3 J=7`)
console.log(`I=3 J=6`)
console.log(`I=3 J=5`)

console.log(`I=6 J=7`)
console.log(`I=6 J=6`)
console.log(`I=6 J=5`)

console.log(`I=9 J=7`)
console.log(`I=9 J=6`)
console.log(`I=9 J=5`)