function biggestOf3Numbers(num1, num2, num3){
    let arr = [num1, num2, num3];
    let res = arr.sort((a,b)=>b-a).shift();
        console.log(res);
    }
    biggestOf3Numbers(43,43.2,43.1);