/*

calculo da renda familiar da cidade -> todas familias e faço a media: total dinheiro / quantidade familia

calculo do numero de filhos de cada familia -> todas familias e faço a media -> total de filhos existentes / quantidade de familias

*/

let soma_renda: number = 600000
let soma_filhos: number = 300
let quantidade_familias: number = 16

while (soma_renda >= 0 && soma_filhos >= 0) {
    let media_renda: number = soma_renda / quantidade_familias
    let media_filhos: number = soma_filhos / quantidade_familias
    console.log(`Valor da media da renda: ${media_renda}`)
    console.log(`Valor da media dos filhos: ${media_filhos}`)

}


