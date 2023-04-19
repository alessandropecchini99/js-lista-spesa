// DESCRIZIONE ESERCIZIO
// 1. Creare array con lista della spesa
// 2. Mostra risultati a schermo



// ------------------------------------------------------ //



// 1. ARRAY
let arrSpesa = [
    `Banane`,
    `Uva`,
    `Pomodori`,
    `Erbazzone`,
    `Pane`,
    `Uova`,
    `Latte`,
    `Biscotti`,
    `Pasta integrale`,
    `Acqua`,
];

// 2. MOSTRARE I RISULTATI
let i = 0;
while (i < arrSpesa.length) {
    console.log(arrSpesa[i]);
    i++
}


// ------------------------------


// ALTRO
function refreshPage(){
    window.location.reload();
} 