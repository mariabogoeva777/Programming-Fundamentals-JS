function reverse(n, arr){
    if (n <= arr.length){ 
    let arrReverse = [];
    
    for(let i = 0; i < n; i++){
        let currentElement = arr[i];
        arrReverse.push(currentElement);
    }

    let output = [];
    for (let i = arrReverse.length - 1; i >= 0; i--){
        
        let currentElement = arrReverse[i];
        output.push(currentElement);
    }
    console.log(output.join(" "));
    
    }
}
reverse(4, [-1, 20, 99, 5]);
reverse(3, [10, 20, 30, 40, 50]);