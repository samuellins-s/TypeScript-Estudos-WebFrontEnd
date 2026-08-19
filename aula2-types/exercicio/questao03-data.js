"use strict";
/*

Para criar na data de hoje: new Date()
Para criar uma data em um dia específico: new Date('ano-mês-dia').
    - Exemplo para a data 18/08/2026:
        let data = new Date('2026-8-18')

Dada uma data no formato dd/mm/aaaa (menor ou igual a data de hoje),
imprima quantos dias se passaram do início do ano até esta data (exemplo (18/08/2026).

*/
let data = new Date();
let data_inicio_ano = new Date('2026-01-01');
let subtracao_datas = data.getTime() - data_inicio_ano.getTime(); // aqui está em milisegundos
let dias_passados = subtracao_datas / (1000 * 60 * 60 * 24); // milisegundos para dias
console.log(`Foram ${dias_passados} dias que se passaram desde ${data_inicio_ano} até hoje.`);
