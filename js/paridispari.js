//L'utente sceglie pari o dispari
do {
  var scelta = prompt('fai la tua scelta : pari o dispari ?').toLowerCase();
}
while (scelta != 'pari' && scelta != 'dispari');
console.log(scelta);
//L'utente inserisce un numero da 1 a 5.
do {
  var inserimento = parseInt(prompt('inserisci un numero da 1 a 5'));
}
while (inserimento < 1 || inserimento > 5);
console.log('il numero inserito è: ' + inserimento);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function generetor(numero) {
  var azione = Math.floor(Math.random() * numero) + 1;
  return azione;
}
//invocazione
var numerogenerato = generetor(5);
console.log('il numero generato compreso tra 1 e 5 generato dalla macchina è: ' + numerogenerato);
//Sommiamo i due numeri
var somma = inserimento + numerogenerato;
console.log('la somma dei numeri è : ' +  somma);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function valutazionepariodispari(sceltautente) {
  if (somma % 2 == 0 && sceltautente == 'pari' || somma % 2 != 0  && sceltautente == 'dispari') {
    var vittoriautente = 'il giocatore ha vinto contro il computer!';
    return vittoriautente;
  }
  else {
    var vittoriapc = 'ha vinto il pc riprovaci amico';
    return vittoriapc;
  }
}

var decretovincitore = valutazionepariodispari(scelta);
console.log(decretovincitore);
