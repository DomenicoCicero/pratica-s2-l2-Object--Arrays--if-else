/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 18;
let num2 = 10;

if (num1 > num2) {
  console.log("il numero più grande è:", num1);
} else {
  console.log("il numero più grande è:", num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 8;

if (num3 !== 5) {
  console.log("not equal");
} else {
  console.log("il numero fornito è uguale a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num2 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 === 8 || num3 === 8 || num1 + num3 === 8 || num1 - num3 === 8) {
  console.log("la condizione è verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 20;

if (totalShoppingCart > 50) {
  console.log("spedizione gratuita, il totale è:", totalShoppingCart);
} else {
  let totalAmount = totalShoppingCart + 10;
  console.log("il costo della spedizione è di 10, il costo totale è:", totalAmount);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCartBlackFriday = totalShoppingCart - (totalShoppingCart / 100) * 20;

if (totalShoppingCartBlackFriday > 50) {
  console.log("spedizione gratuita, il totale è:", totalShoppingCartBlackFriday);
} else {
  let totalAmount = totalShoppingCartBlackFriday + 10;
  console.log("il costo della spedizione è di 10, il costo totale è:", totalAmount);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let var1 = 20;
let var2 = 21;
let var3 = 22;

if (var1 > var2 && var2 > var3) {
  console.log("dal più alto al più basso:", var1, var2, var3);
} else if (var1 > var3 && var3 > var2) {
  console.log("dal più alto al più basso:", var1, var3, var2);
} else if (var2 > var1 && var1 > var3) {
  console.log("dal più alto al più basso:", var2, var1, var3);
} else if (var2 > var3 && var3 > var1) {
  console.log("dal più alto al più basso:", var2, var3, var1);
} else if (var3 > var1 && var1 > var2) {
  console.log("dal più alto al più basso:", var3, var1, var2);
} else if (var3 > var2 && var2 > var1) {
  console.log("dal più alto al più basso:", var3, var2, var1);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valoreFornito = "ciao";

let typeOfValoreFornito = typeof valoreFornito;

if (typeOfValoreFornito !== "number") {
  console.log("il valore fornito non è un numero");
} else {
  console.log("il valore fornito è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numberOddOrEven = 812;

if (numberOddOrEven % 2 === 0) {
  console.log("il numero fornito è pari:", numberOddOrEven);
} else {
  console.log("il numero fornito è dispari:", numberOddOrEven);
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me2 = structuredClone(me);
delete me2.lastName;

console.log(me2);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me3 = structuredClone(me);
me3.skills.pop();

console.log(me3);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arrayVoid = [];

arrayVoid.push(1);
arrayVoid.push(2);
arrayVoid.push(3);
arrayVoid.push(4);
arrayVoid.push(5);
arrayVoid.push(6);
arrayVoid.push(7);
arrayVoid.push(8);
arrayVoid.push(9);
arrayVoid.push(10);

console.log(arrayVoid);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arrayVoid.splice(9, 1, 100);

console.log(arrayVoid);
