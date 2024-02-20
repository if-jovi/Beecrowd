let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x = Number(lines.shift())
let h = x / 3600
let hs = x % 3600
let m = hs / 60
let sh = hs % 60 
let s = sh

console.log(`${Math.floor(h)}:${Math.floor(m)}:${Math.floor(s)}`)