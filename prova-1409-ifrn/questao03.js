"use strict";
function jogarDado(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let contarFacesDoNum6 = 0;
for (let i = 0; i <= 1000; i++) {
    let joguei = jogarDado(1, 7);
    if (joguei === 6) {
        contarFacesDoNum6++;
    }
}
console.log(contarFacesDoNum6);
