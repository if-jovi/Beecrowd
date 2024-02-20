const { kMaxLength } = require('buffer')

let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

var x = +(lines.shift())

var n100 = x / 100
var n50 = (x - (Math.floor(n100)*100)) / 50
var n20 = (x- (  (Math.floor(n100)*100) + (Math.floor(n50)*50)  )  ) /20
var n10 =(x-((Math.floor(n100)*100)+(Math.floor(n50)*50)+(Math.floor(n20)*20))) / 10
var n5 = (x-((Math.floor(n100)*100)+(Math.floor(n50)*50)+(Math.floor(n20)*20)+(Math.floor(n10)*10))) / 5
var n2 = (x-((Math.floor(n100)*100)+(Math.floor(n50)*50)+(Math.floor(n20)*20)+(Math.floor(n10)*10)+(Math.floor(n5)*5))) / 2
var n1 = (x-((Math.floor(n100)*100)+(Math.floor(n50)*50)+(Math.floor(n20)*20)+(Math.floor(n10)*10)+(Math.floor(n5)*5)+(Math.floor(n2)*2))) / 1

console.log(x)
console.log(`${Math.floor(n100)} nota(s) de R$ 100,00`)
console.log(`${Math.floor(n50)} nota(s) de R$ 50,00`)
console.log(`${Math.floor(n20)} nota(s) de R$ 20,00`)
console.log(`${Math.floor(n10)} nota(s) de R$ 10,00`)
console.log(`${Math.floor(n5)} nota(s) de R$ 5,00`)
console.log(`${Math.floor(n2)} nota(s) de R$ 2,00`)
console.log(`${Math.floor(n1)} nota(s) de R$ 1,00`)