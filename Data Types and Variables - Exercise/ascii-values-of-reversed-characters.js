function ASCIIValuesOfReversedCharacters(firstChar, secondChar, thirdChar){
    let chars = thirdChar + secondChar + firstChar;
    console.log(chars);

    let result = [];
    for (let i = 0; i < chars.length; i++){
       result.push(chars.charCodeAt(i)); 
    }
    let resultJoin = result.join(' ');
    console.log(resultJoin);
}
ASCIIValuesOfReversedCharacters('%','2','o')