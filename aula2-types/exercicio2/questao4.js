"use strict";
/*

4 - Tendo como entrada a altura em centímetros (exemplo: 1,70m = 170cm) e o sexo de uma pessoa (“m” para masculino ou “f” para feminino), calcule o seu peso ideal de acordo com a fórmula abaixo, conhecida como fórmula de Lorentz. Nela, o valor  da constante “k” é igual a 4 para homens e 2 para mulheres.

peso = altura - 100 - (altura - 150) / k

*/
let altura = 170;
let sexo_pessoa = 'm';
let constante_k;
if (sexo_pessoa === 'm') {
    constante_k = 4;
}
else if (sexo_pessoa === 'f') {
    constante_k = 2;
}
else {
    throw new Error("Sexo inválido. Use 'm' ou 'f'."); // peguei essa ideia do throw new Error no Claude =)
}
let peso = altura - 100 - (altura - 150) / constante_k;
console.log(`O seu peso ideal é: ${peso}.`);
