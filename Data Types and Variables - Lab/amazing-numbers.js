function amazingNumbers(number) {
    let newNum = number.toString();
    let sum = 0;
    for (let i = 0; i < newNum.length; i++) {
        sum += Number(newNum[i]);
    }
    if (sum.toString().includes(`9`)) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}
amazingNumbers(1234);