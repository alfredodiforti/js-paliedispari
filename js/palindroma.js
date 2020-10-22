//chiedere all'utente di inserire una parola
var parolainserita = prompt('inserisci una parola');
console.log('la parola inserita è: ' + parolainserita);
//Creare una funzione per invertire i caratteri di una stringa.
function inverticaratteri (parola) {
  var azione = parola.split('').reverse().join('');
  return azione;
}
//invocazione fuori funzione
var parolainversa = inverticaratteri (parolainserita);
console.log('la parola inversa è: ' + parolainversa);
//verifica se palindroma
if (parolainversa === parolainserita) {
  console.log('la parola inserita è palindroma');
}
else {
  console.log('la parola inserita non è palindroma')
}
