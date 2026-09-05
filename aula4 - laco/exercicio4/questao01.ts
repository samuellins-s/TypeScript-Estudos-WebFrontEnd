/*

calculo da renda familiar da cidade -> todas familias e faço a media: total dinheiro / quantidade familia

calculo do numero de filhos de cada familia -> todas familias e faço a media -> total de filhos existentes / quantidade de familias

*/

let rendas: number[] = [2500, 1800, 3200, 1500, -1]
let filhos: number[] = [2, 3, 1, 4, 0]

let soma_rendas: number = 0
let soma_filhos: number = 0
let quantidade_familias: number = 16

let i: number = 0
while (rendas[i] >= 0 && filhos[i] >= 0) {
    soma_rendas += rendas[i]
    soma_filhos += filhos[i]
    quantidade_familias += 1
    i++
}

let media_rendas: number = soma_rendas / quantidade_familias
let media_filhos: number = soma_filhos / quantidade_familias

console.log(`Total de familias: ${quantidade_familias} ; \nRenda média familiar: ${media_rendas} ; \nMédia de filhos: ${media_filhos}`)
