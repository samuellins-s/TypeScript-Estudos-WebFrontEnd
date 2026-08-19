"use strict";
/*

Dada a média parcial (menor que 60) de um estudante do IFRN em uma disciplina,
calcule quanto ele(a) precisa tirar na avaliação final para ser aprovado(a).

*/
let media_parcial = 50; // menor que 60
let media_final = 60; // media minima (60)
let nota_av_final = (2 * media_final) - media_parcial;
console.log(`A nota necessária da avaliação final é: ${nota_av_final}`);
