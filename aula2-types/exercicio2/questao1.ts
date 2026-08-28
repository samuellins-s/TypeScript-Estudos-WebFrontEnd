/*
1 - Traduza as expressões matemáticas abaixo para a forma linear usando os operadores (ou funções matemáticas) da linguagem Javascript. Para testar, você pode atribuir valores às variáveis e imprimir o resultado. 
    a) a + b = c
    b) (4𝛑r3)/3
*/

// a

let a: number = 5
let b: number = 3
let c: number = a + b

console.log(`A soma de ${a} com ${b} resulta em ${c}`)

// b

let r: number = 2
let volume: number = (4 * Math.PI * r**3) / 3

console.log(`Volume = ${volume}`)