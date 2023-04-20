// DESCRIZIONE ESERCIZIO
// 1. Creare array con lista della spesa
// 2. Mostra risultati a schermo



// ------------------------------------------------------ //



// 1. ARRAY
let arrSpesa = [
    `La tua lista:`,
];

// 2. MOSTRARE I RISULTATI
const lista = document.querySelector('#lista-spesa');
let i = 0;
while (i < arrSpesa.length) {
	console.log(arrSpesa[i]);
	lista.innerHTML += `<li>${arrSpesa[i]}</li>`;
	i++;
}

const btnAdd = document.querySelector('#btn-add');
const inputAdd = document.querySelector('#input-add');

btnAdd.addEventListener('click',
	function () {
		const addText = inputAdd.value.trim();

		if (addText != '') {
			console.log(addText);
			arrSpesa.push(addText);
			console.log(arrSpesa);
			lista.innerHTML += `<li>${addText}</li>`;
		}

		inputAdd.value = '';
	}
)


// ------------------------------


// ALTRO
function refreshPage(){
    window.location.reload();
} 