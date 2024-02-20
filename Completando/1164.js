let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let cont = 0
let Ncasos = +lines.shift()


while(Ncasos > cont ){
    
    let X = +lines.shift()

    for(let i = 0 ;i< X;++i){
        if(i%X == 0){
            console.log(X,"numero primo ")
        }
    }
    ++cont
}