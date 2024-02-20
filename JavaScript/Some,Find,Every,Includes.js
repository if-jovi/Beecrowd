
// let animais = [{nome : 'fumaça',idade : 3,tipo: "rato"},
//             {nome : "tobby", idade: 6 , tipo:"cao"},
//             {nome : "laminha", idade: 1 , tipo:"cao"},]

// let contem = animais.some((value,index,array) => {
//     console.log(value,index)
//     return value.tipo === "rato"
// })
// console.log(contem)



// let animais = [{nome : 'fumaça',idade : 3,tipo: "gato"},
//             {nome : "tobby", idade: 6 , tipo:"cao"},
//             {nome : "laminha", idade: 1 , tipo:"rato"},]

// let contem = animais.find((value,index,array) => { 
//     console.log(value,index)
//     return value.tipo === "cao" //quando o saida for true ele cai 
// })
// console.log(contem)    //   [{nome : 'fumaça',idade : 3,tipo: "gato"}, 0
// //                             {nome : "tobby", idade: 6 , tipo:"cao"}, 1
// //                             {nome : "tobby", idade: 6 , tipo:"cao"}



let animais = [{nome : 'fumaça',idade : 3,tipo: "cao"},
            {nome : "tobby", idade: 6 , tipo:"cao"},
            {nome : "laminha", idade: 1 , tipo:"cao"},]

let contem = animais.every((value,index,array) => { 
    console.log(value,index)
    return value.tipo === "cao" 
})
console.log(contem) //R: true


/*
let numeros = [1,2,3,4,5]
let tem = numeros.includes(5,4)
console.log(tem)
*/

// let permissoes = [25,29,30]
// let usuarioIP = [25,1,2,3]
// let temPermissao = usuarioIP.some((a)=> permissoes.includes(25))
// console.log(temPermissao)