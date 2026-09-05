import * as readlineSync from "readline-sync";
let entrada = readlineSync.question("Digite o intervalo (ex: 2-10): ");
let partes = entrada.split("-");
let inicio = parseInt(partes[0], 10);
let fim = parseInt(partes[1], 10);
let quantidadePrimos = 0;
for (let numero = inicio; numero <= fim; numero++) {
    let primo = true;
    let divisor = numero - 1;
    while (primo && divisor > 1) {
        if (numero % divisor == 0) {
            primo = false;
        }
        else {
            divisor -= 1;
        }
    }
    // ------------------------------------------------------------------
    if (primo) {
        quantidadePrimos += 1;
    }
}
console.log(`Quantidade de números primos entre ${inicio} e ${fim}: ${quantidadePrimos}`);
