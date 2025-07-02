function condenseArr(arr){
    let condensed = [];
    while(arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++){

            let currentElement = arr[i];
            let nextElement = arr[i+1];

            condensed.push(currentElement + nextElement);
        }
        arr = condensed;
        condensed = [];
    }

    console.log(arr[0]);

}
condenseArr([2,10,3]);
condenseArr([5,0,4,1,2]);
condenseArr([1]);