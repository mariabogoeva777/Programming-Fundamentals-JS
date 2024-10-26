function distanceBetweenPoints(x1, y1, x2, y2) {

    let a1 = Math.abs(x1 - x2);
    let a2 = Math.abs(y1 - y2);
    let distance = Math.sqrt(Math.pow(a1,2) + Math.pow(a2,2));
    
    console.log(distance);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);