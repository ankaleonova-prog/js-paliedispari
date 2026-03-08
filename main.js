//inserire la parola
const parola = prompt ("inserire un parola e verificare se è polindroma:")
//fumzia per verificare
function palindromo(str) {
	const regex = /[\W_]/g;
	const parola = str.toLowerCase().replace(regex, '');
	const lunghezza = parola.length;

	for (let i = 0; i < lunghezza / 2; i++) {
		if (parola[i] !== parola[lunghezza - 1 - i]) {
			return false;
		}
	}

	return true;
}

console.log(palindromo('tomomot'));
console.log(palindromo('matteo'));

// chiedere all'utente se sceglie pari o dispari



var scelta_utente = prompt('pari o dispari');

    console.log(scelta_utente);



