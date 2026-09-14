"use strict";
/*

Media final de 0 a 100

*/
let mediaFinal = 52;
if (mediaFinal > 0 && mediaFinal <= 100) {
    if (mediaFinal >= 85) {
        console.log('A');
    }
    else if (mediaFinal >= 70) {
        console.log('B');
    }
    else if (mediaFinal >= 50) {
        console.log('C');
    }
    else if (mediaFinal >= 30) {
        console.log('D');
    }
    else if (mediaFinal < 30) {
        console.log('E');
    }
}
else {
    console.log('Somente valores entre 0 e 100');
}
