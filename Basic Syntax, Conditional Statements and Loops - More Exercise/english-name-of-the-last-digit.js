function englishNameOfTheLastDigit(number) {
    let last = number % 10;
    let result = '';
    if (last === 0) {
        result = "zero";
    } else if (last === 1) {
        result = "one";
    } else if (last === 2) {
        result = "two";
    } else if (last === 3) {
        result = "three";
    } else if (last === 4) {
        result = "four"
    } else if (last === 5) {
        result = "five";
    } else if (last === 6) {
        result = "six";
    } else if (last === 7) {
        result = "seven";
    } else if (last === 8) {
        result = "eight";
    } else if (last === 9) {
        result = "nine";
    }
    console.log(result);

}
englishNameOfTheLastDigit(512);