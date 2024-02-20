let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let DDD = +lines.shift()
let cidade 
switch (DDD) {
    case 61:
        cidade = "Brasilia"
    break;
    case 71:
        cidade = "Salvador"
    break;
    case 11:
        cidade = "Sao Paulo"
    break;
    case 21:
        cidade = "Rio de Janeiro"
    break;
    case 32:
        cidade = "Juiz de Fora"
    break;
    case 19:
        cidade = "Campinas"
    break;
    case 27:
        cidade = "Vitoria"
    break;
    case 31:
        cidade = "Belo Horizonte"
    break;
    default:
        cidade = "DDD nao cadastrado"
        break;
}
console.log(cidade)
