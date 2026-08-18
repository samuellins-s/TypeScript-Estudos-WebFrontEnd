let hoje = new Date() // sem parametro: data hoje

const dia = hoje.getDate()
const mes = hoje.getMonth() + 1
const ano = hoje.getFullYear()
console.log(`${dia}/${mes}/${ano}`)