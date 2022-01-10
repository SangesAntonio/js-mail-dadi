console.log('js ok dadi')

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.*/

//generatore di numeri random PC e imput numero giocatore

let cpuNumber=Math.floor(Math.random() * 6 + 1);

let playerNumber=Math.floor(Math.random() * 6 + 1);

//stampo del risultato
console.log(playerNumber)
console.log(cpuNumber)

//calcolo vincitore
let result=false
