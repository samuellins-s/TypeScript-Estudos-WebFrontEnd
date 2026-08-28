"use strict";
/*

2 - Faça um programa que peça três números inteiros e verifique se eles podem formar um triângulo. A condição para ser um triângulo é que cada lado seja menor que a soma dos outros dois. Seu programa deve imprimir apenas verdadeiro (true) ou falso (false).

*/
let a = 2;
let b = 9;
let c = 5;
let resultado;
if (a < b + c && b < a + c && c < a + b) {
    resultado = true;
}
else {
    resultado = false;
}
console.log(resultado);
