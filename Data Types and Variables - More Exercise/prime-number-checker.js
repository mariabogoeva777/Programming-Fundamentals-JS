function primeNumberChecker(num){
    if (num != 0 && num != 1 && num % 2 === 0 || num % 3 === 0){
        console.log(false);

    } else {
        console.log(true);

    }
}
primeNumberChecker(7);