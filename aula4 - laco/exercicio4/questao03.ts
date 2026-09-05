import * as readlineSync from "readline-sync";
 
let entrada: string = readlineSync.question("Digite o intervalo (ex: 2-10): ");
let partes: string[] = entrada.split("-");
 
let inicio: number = parseInt(partes[0], 10);
let fim: number = parseInt(partes[1], 10);
 
let quantidadePrimos: number = 0;
 
for (let numero: number = inicio; numero <= fim; numero++) {
 
    let primo: boolean = true;
    let divisor: number = numero - 1;
 
    while (primo && divisor > 1) {
        if (numero % divisor == 0) {
            primo = false;
        } else {
            divisor -= 1;
        }
    }
    // ------------------------------------------------------------------
 
    if (primo) {
        quantidadePrimos += 1;
    }
}
 
console.log(`Quantidade de números primos entre ${inicio} e ${fim}: ${quantidadePrimos}`);