let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let meses = +lines.shift()
let mes 
switch (meses) {
    case 1:
        mes = "January"
    break;
    case 2:
        mes = "February"
    break;
    case 3:
        mes = "March"
    break;
    case 4:
        mes = "April"
    break;
    case 5:
        mes = "May"
    break;
    case 6:
        mes = "June"
    break;
    case 7:
        mes = "July"
    break;
    case 8:
        mes = "August"
    break;
    case 9:
        mes = "September"
    break;
    case 10:
        mes = "October"
    break;
    case 11:
        mes = "November"
    break;
    case 12:
        mes = "December"
    break;
    default:
        break;
}
console.log(mes)
