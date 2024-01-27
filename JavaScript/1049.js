let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let lista = []

while(lines.length){
    let X = lines.shift().trim()
    lista.push(X)    
}


if(lista[0] == "vertebrado" && lista[1] == "ave" && lista[2] == "carnivoro"){console.log("aguia")}
if(lista[0] == "vertebrado" && lista[1] == "ave" && lista[2] == "onivoro"){console.log("pomba")}

if(lista[0] == "vertebrado" && lista[1] == "mamifero" && lista[2] == "onivoro"){console.log("homem")}
if(lista[0] == "vertebrado" && lista[1] == "mamifero" && lista[2] == "herbivoro"){console.log("vaca")}

if(lista[0] == "invertebrado" && lista[1] == "inseto" && lista[2] =="hematofago"){console.log("pulga")}
if(lista[0] == "invertebrado" && lista[1] == "inseto" && lista[2] =="herbivoro"){console.log("lagarta")}

if(lista[0] == "invertebrado" && lista[1] == "anelideo" && lista[2] =="hematofago"){console.log("sanguessuga")}
if(lista[0] == "invertebrado" && lista[1] == "anelideo" && lista[2] =="onivoro"){console.log("minhoca")}