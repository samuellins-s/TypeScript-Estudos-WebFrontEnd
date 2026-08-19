/*

Dada a média parcial (menor que 60) de um estudante do IFRN em uma disciplina,
calcule quanto ele(a) precisa tirar na avaliação final para ser aprovado(a).

*/

let media_parcial: number = 50 // menor que 60
let media_final: number = 60 // media minima (60)

let nota_av_final: number = (2 * media_final) - media_parcial

console.log(`A nota necessária da avaliação final é: ${nota_av_final}`)