// chiedo all'utente di scegliere un numero tra 1 e 10

let numero = parseInt(prompt('scegli un numero tra 1 e 10'));

// il computer sceglie un numero random tra 1 e 10

let nRandom = Math.floor(Math.random() * 10) + 1;
console.log(nRandom);
alert('il computer sceglie' + nRandom)

//eseguo la somma

let somma = numero + nRandom;
console.log(somma)

// salvo la somma


let sommaN = ''

let vincitore = false;

let pari = numero % 2 == 0;

let dispari = numero % 2 != 0;

// creo la condizione 
if (numero % 2 == 0) {
      sommaN = pari;
      
} else {
      sommaN = dispari;
      
}

if ( sommaN == pari ){
       vincitore = true;
} else {
       vincitore = false;
}




if ( vincitore == true) {
    alert('hai vinto')
} else {
    alert('hai perso')
}

