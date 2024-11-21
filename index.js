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



