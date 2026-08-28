/*

3 - Calcule a média parcial de uma disciplina de dois bimestres (b1 e b2) e imprima “aprovado” se o(a) estudante ficou com média maior ou igual que 60.00 e “prova final” se ficou com média abaixo de 60.00 e reprovado se a média for menor que 10. Para o cálculo da média considere a fórmula abaixo.

mediaParcial = (b1 * 2 + b2 * 3) / 5

*/

let media_b1: number = 30
let media_b2: number = 54

let mediaParcial: number = (media_b1 * 2 + media_b2 * 3) / 5

if(mediaParcial >= 60){
    console.log(`APROVADO!!! Média parcial obtida: ${mediaParcial}.`)
} else if (mediaParcial < 60 && mediaParcial > 10){
    console.log(`PROVA FINAL!!! Média parcial obtida: ${mediaParcial}.`)
} else {
    console.log(`REPROVADO  !!! Média parcial obtida: ${mediaParcial}.`)
}