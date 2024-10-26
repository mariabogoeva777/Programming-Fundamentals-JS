function sortNumbers(num1, num2, num3){
    let newArr = [num1, num2, num3];
    let final = newArr.sort().reverse();
    console.log(`${final[0]}\n${final[1]}\n${final[2]}`);

}
sortNumbers(2, 1, 3);