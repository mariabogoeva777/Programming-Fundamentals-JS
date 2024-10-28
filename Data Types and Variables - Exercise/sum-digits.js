function sumDigits(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let digit = num[i];
        sum += Number(digit);
    }
    console.log(sum);
}
sumDigits(543);