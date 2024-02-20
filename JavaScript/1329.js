let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
   
    var N = +lines.shift()
        
while(N !== 0){
    let john = 0
    let mary = 0
    var J = lines.shift()
    var lista = J.split(' ')   

    for(let i = 0;i<lista.length;++i){
        if(lista[i] == "1"){
            john++
        }

        if(lista[i] == "0"){
            ++mary
        } 
    }      
console.log(`Mary won ${mary} times and John won ${john} times`)
var N = +lines.shift()
}
    


