import * as readlineSync from "readline-sync";
let numero = 0;
while (numero <= 1) {
    numero = readlineSync.questionInt("Número inteiro positivo (>1): ");
}
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
if (primo) {
    console.log(`O número ${numero} é PRIMO!!!`);
}
else {
    console.log(`O número ${numero} NÃO é PRIMO!!!`);
}
