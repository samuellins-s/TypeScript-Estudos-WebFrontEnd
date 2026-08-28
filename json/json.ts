// JSON -> Java Script Object Notation

let carro = { // valor: atributo
    'nome': 'Uno',
    'marca': 'Fiat',
    'ano': 2026
}

console.log(carro.marca) // Fiat

enum Curso { // enum: conjunto de constantes
    TSI = 'Sistemas para Internet',
    INFO = 'Informática integrado'
}

type Estudante = {
    nome: string
    matricula: number
    curso: Curso
    ira: number
}

const samuel: Estudante = {
    'nome': 'Samuel Lins',
    'matricula': 2026118060002,
    'curso': Curso.TSI,
    'ira': 80
}