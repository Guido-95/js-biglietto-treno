// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// richiesta numero km
var kmDaPercorrere = parseInt(prompt("Scrivi quanti km vuoi percorrere"));
// debug
console.log("km " + kmDaPercorrere);
// km in h2
document.getElementById("km").innerHTML = kmDaPercorrere;

// richiesta età
var etaPasseggero = parseInt(prompt("Scrivi quanti anni hai"));
// debug
console.log("eta " + etaPasseggero);
// eta in h2
document.getElementById("eta").innerHTML = etaPasseggero;

// prezzo biglietto
var  prezzoBiglietto = kmDaPercorrere * 0.21;
// debug
console.log("prezzo " + prezzoBiglietto);
// prezzo iniziale in h2
document.getElementById("prezzo-iniziale").innerHTML = prezzoBiglietto.toFixed(2) + " €";

// sconti biglietto
if (etaPasseggero < 18) {
    
    // sconto se il passeggero soddisfa i requisiti
    prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 0.20);

    // debug
    console.log( "sconto 20% " + prezzoFinale);

    // sconto 20%
    var sconto = prezzoBiglietto * 0.20;

    // sconto 20% in h2
    document.getElementById("sconto").innerHTML = sconto.toFixed(2) + " €";

    // prezzo finale scontato
    document.getElementById("prezzo-finale").innerHTML = prezzoFinale.toFixed(2) + " €";

} else if (etaPasseggero > 65) {

    // sconto se il passeggero soddisfa i requisiti
    prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 0.40);

    // debug
    console.log("sconto 40% " + prezzoFinale);

    // sconto 40%
    var sconto = prezzoBiglietto * 0.40;

    // sconto 40% in h2
    document.getElementById("sconto").innerHTML = sconto.toFixed(2) + " €";

    // prezzo finale scontato
    document.getElementById("prezzo-finale").innerHTML = prezzoFinale.toFixed(2) + " €";

    // nessuno sconto
} else {

    // prezzo rimane invariato
    prezzoFinale = prezzoBiglietto;

    // nessuno sconto applicato
    document.getElementById("sconto").innerHTML = "nessuno sconto";

    // prezzo finale non scontato
    document.getElementById("prezzo-finale").innerHTML = prezzoFinale.toFixed(2) + " €";
}







