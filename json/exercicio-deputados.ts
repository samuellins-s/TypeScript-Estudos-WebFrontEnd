/*

Exercício em Sala - 25/08

*/

enum SiglaPartido {
    PL = 'Partido Liberal',
    PT = 'Partido dos Trabalhadores'
}

type Deputado = {
    id: number
    nome: string
    siglaPartido: SiglaPartido
    siglaUF: string
    urlFoto: string
    email: string
}

const carladickson: Deputado = { // as chaves podem ser com ou SEM aspas
    'id': 213762,
    'nome': 'Carla Dickson',
    'siglaPartido': SiglaPartido.PL,
    'siglaUF': 'RN',
    'urlFoto': 'https://www.camara.leg.br//internet/deputado/bandep/213762.jpg.',
    'email': 'dep.carladickson@camara.leg.br'
}