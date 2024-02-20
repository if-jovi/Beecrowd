const { clear } = require('console')

let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let tamanho = +lines.shift()


for(let i = 0;i < tamanho;++i){
    let x = +lines.shift()
    let retorno = "";

    if(x % 2 == 0){
        retorno += "EVEN"
    }

    if(x % 2 == 1 || -x % 2 == 1){
        retorno += "ODD"
    }

    if(x < 0 ){
        retorno += " NEGATIVE"
    }

    if(x > 0){
        retorno += " POSITIVE"
    }

    if(x === 0){
        retorno = "NULL"
    }

    console.log(retorno);
}