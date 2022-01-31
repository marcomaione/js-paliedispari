function getRandomNumber(min,max) {
    return Math.floor(Math.random() + (max - min +1)) + min;
}

function checkPariDispari(numero) {
    let ritorno;

    if (numero % 2 == 0) {
        ritorno = "PARI"
    } else {
        ritorno = "DISPARI"
    }

    return ritorno;
}

let pariDispari = prompt('scegli pari o dispari').toUpperCase();

if (pariDispari == "PARI" || pariDispari == "DISPARI") {
    let numeroUtente = parseInt(prompt('inserisci un numero tra 1 e 5'));

    if (( numeroUtente >= 1 && numeroUtente <= 5) && !isNaN(numeroUtente)) {

        let numeroComputer = getRandomNumber(1, 5);
        let somma = numeroComputer + numeroUtente;
        let verificaSomma = checkPariDispari(somma);

    if (verificaSomma == pariDispari) {
        alert('hai vinto')
    } else {
        alert('hai perso')
    }

    } else {
        alert('hai inserito un valore non valido')
    }
} else {
    alert('Hai inserito un valore non valido')
}