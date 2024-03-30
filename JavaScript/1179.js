let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

listapar = []
listaimpar=[]
contpar = 0
contimpar = 0

for (let index = 0; index < 15; index++) {
    

    let X = +lines.shift()

    if(X%2==0){
        listapar.push(X)
        ++contpar
    }else{
        listaimpar.push(X)
        ++contimpar
    }
    
    if(listapar.length == 5){
        for (let i = 0; i < 5; i++) {
            console.log(`par[${[i]}] = ${listapar[i]}`)
            
        }
        contpar = 0
        listapar = []
    }

    if(listaimpar.length == 5){
        for (let t = 0; t < 5; t++) {
            console.log(`impar[${[t]}] = ${listaimpar[t]}`)
            
        }
        contimpar = 0
        listaimpar = []
    }
}

if(listaimpar.length != 0){
    for (let e = 0;e < contimpar;e++){
        console.log(`impar[${[e]}] = ${listaimpar[e]}`)
    }
}

if(listapar.length != 0){
    for (let e = 0;e < contpar;e++){
        console.log(`par[${[e]}] = ${listapar[e]}`)
    }
}





