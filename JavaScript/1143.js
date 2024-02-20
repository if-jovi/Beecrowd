let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()
let num = 1
let dobro = 0
let i = 0

while(i < N){
    dobro = (num * num)
    console.log(`${(num)} ${(dobro)} ${(num * dobro)}`)
    ++num
    ++i
}