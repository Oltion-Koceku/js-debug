/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// in questo codice si doveva usare il confornto quindi == oppure === al posto de singolo uguale che indica un "risultato"

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// il problema in questo caso sono le virgole, bisogna usare le doppie virgolette per il ciclo for

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    console.log(evenNumbers);
    return evenNumbers;
}
// il primo problema è numbers.length non serve il -1, il punto e virgola alla fine del i++ non serve, nell'if numbres prende l'array al posto del numero che ci serve quindi aggiungiamo [i], === al posto del = 0, il punto e virgola dopo l'if, nel evenNumbres.push non basta solo l'i ma serve numbers[i] con i prendiamo solo il contatore in fine il return va fuori dal'for alla fine della funzione.
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]