let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')


let contAlc = 0
let contGas = 0
let contDis = 0

while(lines.length){
    x = +lines.shift()
    if(x == 4){break}
    switch(x){
        case 1:
            ++contAlc
            break
        
        case 2:
            ++contGas
            break
        
        case 3:
            ++contDis
            break
    }

}
console.log("MUITO OBRIGADO")
console.log(`Alcool: ${contAlc}`)
console.log(`Gasolina: ${contGas}`)
console.log(`Diesel: ${contDis}`)

// let contAlc = 0
// let contGas = 0
// let contDis = 0

// while(lines.length){
//     x = +lines.shift()
//     if(x < 0) break
    
//     if(x == 4){break}
//     if(x == 1){
//         ++contAlc
//     }

//     if(x == 2){
//         ++contGas
//     }

//     if(x == 3){
//         ++contDis
//     }
// }
// console.log("MUITO OBRIGADO")
// console.log(`Alcool: ${contAlc}`)
// console.log(`Gasolina: ${contGas}`)
// console.log(`Diesel: ${contDis}`)