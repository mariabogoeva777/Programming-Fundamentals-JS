function printLetter(n){
   
    const numberOfLetters = Number(n);

   
    for (let i = 0; i < numberOfLetters; i++) {
        for (let j = 0; j < numberOfLetters; j++) {
            for (let k = 0; k < numberOfLetters; k++) {
                const firstLetter = String.fromCharCode('a'.charCodeAt(0) + i);
                const secondLetter = String.fromCharCode('a'.charCodeAt(0) + j);
                const thirdLetter = String.fromCharCode('a'.charCodeAt(0) + k);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}
printLetter(5);