function sumOfOddNumbers(num) {
    let sum = 0;
    let curValue = 0;
    let countNum = 0;

    while (countNum != num) {
        if (curValue % 2 !== 0) {
            console.log(curValue);
            countNum++;
            sum += curValue;
        };
        
        curValue++;
        
    };

    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);