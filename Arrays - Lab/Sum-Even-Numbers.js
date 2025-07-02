function sumEven(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
}
sumEven(['2', '4', '6', '8', '10']);
sumEven(['1','2','3','4','5','6']);
sumEven(['3','5','7','9']);