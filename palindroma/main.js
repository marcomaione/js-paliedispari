// chiedo all'utente di iserire una parola

let parola = prompt('inserisci una parola')

// inizializzo le variabili
let lettera;

let parolaInversa = '';

let i = parola.length -1;

while (i >= 0) {

    lettera = parola[i];
    parolaInversa += lettera;
    console.log(lettera);

    i --;
    
}

console.log(parolaInversa);

// se la parola inversa è uguale a la parola scritta stampo:
if(parola == parolaInversa) {
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma');
}