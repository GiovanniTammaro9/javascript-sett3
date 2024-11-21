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



