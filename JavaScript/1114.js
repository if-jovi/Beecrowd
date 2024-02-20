let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

while ( lines.length) {    
    let senha = parseInt(lines.shift())
if(senha === 2002){
    console.log("Acesso permitido")
    break
}
 
    console.log("Senha invalida")
}
