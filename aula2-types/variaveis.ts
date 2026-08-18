let turma: string
console.log(turma) // undefined

let etapa1: number | undefined = undefined // variavel indefinida. "|" é "ou"

let aprovado = false

// --------------------------------

let estudante: any[] =
    ['Samuel', 20261148060002, 'TSI', 2, false]

console.log(estudante[0]) // indice 0 do array
console.log(estudante.length) // tamanho do array
estudante.push(100) // o push é o append (adiciona ao final)
console.log(estudante)

// --------------------------------

let estudantes = ['Alana', 'Kayo', 'Ulisses', 'Lucas']
console.log(estudantes.pop()) // retira o ultimo da lista
console.log(estudantes.splice(1, 1)) // a partir da posição 1 (inicial), apague 1 (contador)
delete estudantes[2] // apaga o valor, mas preserva a posição do array (não recalcula)
console.log(estudantes)