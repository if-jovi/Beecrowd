let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

var x = +(lines.shift())
var a = x / 365
var m = (x-(Math.floor(a)*365))/30
var d = (x-((Math.floor(a)*365)+(Math.floor(m)*30)))

console.log(`${Math.floor(a)} ano(s)`)
console.log(`${Math.floor(m)} mes(es)`)
console.log(`${Math.floor(d)} dia(s)`)