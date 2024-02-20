const { linkSync } = require('fs')

let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x = +lines.shift()
let y = +lines.shift()
let cont = 0

for(let i = ( y + 1);i< x;++i){
   if(i%2 !=0 ){
    cont += i
   }
    
    
}
console.log(cont)