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

//chiedere numero untente tra 1 e 5

var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 5'));

    console.log(numero_utente);


//generare numero casuale tra 1 e 5



var numero_casuale = Math.floor(Math.random() * 5) + 1;

    console.log(numero_casuale);

//sommare il numero 



var somma_numeri = numero_utente + numero_casuale;

    console.log(somma_numeri);


    var resto = somma_numeri % 2;

 

    if (resto == 0 && scelta_utente == 0) {

        console.log(somma_numeri + ' il numero è pari: HAI VINTO!');

    } else if (resto == 0 && scelta_utente != 0) {

        console.log(somma_numeri + 'HAI VINTO');

    }     



   



    





