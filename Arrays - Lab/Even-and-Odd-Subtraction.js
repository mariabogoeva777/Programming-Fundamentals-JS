function evenAndOdd(arr){

    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length ; i++){
        arr[i] = Number(arr[i]);
    }
    for (let num of arr) { // когато искаш само стойностите от масив for...of
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    let total = evenSum - oddSum;
    console.log(total);
}
evenAndOdd([3, 5, 7, 9]);
evenAndOdd([1, 2, 3, 4, 5, 6]);
evenAndOdd([2, 4, 6, 8, 10]);