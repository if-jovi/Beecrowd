let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
const pegarValores = (line) => line.split(" ").map(a => +a)


while((NumberText = lines.shift().split(" "))){
    let num1 = +(NumberText[0])
    let num2 = +(NumberText[1])

    if (num1 == num2) break

    let valida = num1 < num2 ? "Crescente" : "Descrescente"
    console.log(valida)
}