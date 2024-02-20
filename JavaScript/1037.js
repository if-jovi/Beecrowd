let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let v = +lines.shift()


if (v < 0 || v > 100){
    console.log("Fora de intervalo")
}
 else if (v >= 0 && v <= 25){
    console.log("Intervalo [0,25]")
 }
  else if ( v > 25 && v <= 50){
     console.log("Intervalo (25,50]")
  }
   else if ( v > 50 && v <= 75){
      console.log("Intervalo (50,75]")
   }
    else if ( v > 75 && v <= 100){
    console.log("Intervalo (75,100]")
    }
  
  