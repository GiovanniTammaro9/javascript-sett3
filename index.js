let numeri = [0, 1, 2, 3, 4, 5];
//utilizzo il destructuring
let [primo, _, terzo ] = numeri;

console.log(primo);
console.log(terzo);

let arrNumeri = [10, 20, 30];
//utilizzo destructuring con valori predefiniti
let [first = 0, second = 0, third = 0, quarto = 0, quinto = 0] = arrNumeri;
 console.log(first);
 console.log(second);
 console.log(third);
 console.log(quarto);
 console.log(quinto);

 //destructuring sugli oggetii
 let messaggio = {
    titolo: "Ciao sono Giovanni",
    testo: "Sto Facendo gli Esercizi"
 };

 let {titolo: nomeTitolo, testo: contenutoTesto} = messaggio;
 console.log(nomeTitolo);
 console.log(contenutoTesto);

 //oggetto con proprietà mancante
 let oggetto = {
    nome: "Giovanni"
    //manca la proprietà cognome
 };

 let {nome, cognome = "testo predefinito"} = oggetto;
 console.log(nome);
 console.log(cognome);

 // utilizzo dello spread operator
 let arrayOriginale = [1, 2, 3, 4, 5];

 //uso lo spread per creare una copia 
 let copiaArray = [...arrayOriginale];

 //modifico l'array originale

 arrayOriginale.push(6);

//stampo entrambi in console
console.log( "array originale", arrayOriginale);
console.log("copia dell'array", copiaArray);

//utilizzo lo spread per unire due array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

//unisco gli array
let unioneArray = [...array1, ...array2];
console.log(unioneArray);

//utilizzo spread operator su un oggetto
let oggettoOriginale = {
    nome: "Giovanni",
    età: "29",
};

//uso lo spread per creare una copia ed aggiungere una proprietà
let copiaOggetto = {
    ...oggettoOriginale,
    professione: "programmatore"
};

console.log(oggettoOriginale);
console.log(copiaOggetto);

//scrivo una funzione che utilizza rest operator con l'oggetto arguments
function somma() {
    let totale = 0;
    for (let i = 0; i < arguments.length; i++) {
        totale += arguments[i]; //sommo ogni valore
    }
    return totale;
}

console.log(somma(1, 2, 3));
console.log(somma(10, 30, 50));
console.log(somma(10));

// destructuring e rest operator su array
let nuovoArray = [1, 2, 3, 4, 5];

let [uno, due, ...rest] = nuovoArray;

console.log(uno);
console.log(due);
console.log(rest);

//destructuring e rest su un oggetto
let object = {
    citta: "napoli",
    paese: "italia",
    continente: "europa",
    lingua: "italiano"
};

let {citta, paese, ...more} = object;
console.log(citta);
console.log(paese);
console.log(more);




