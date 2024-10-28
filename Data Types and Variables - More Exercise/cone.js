function cone(radius, height){
    let volume = (Math.PI * radius * radius * height) / 3;
    let S = Math.PI * radius * radius;
    let B = Math.PI * radius * Math.sqrt(radius * radius + height * height);
    let area = S + B;
    console.log(`volume = ${volume.toFixed(4)}\narea = ${area.toFixed(4)}`);
    
}
cone(3.3, 7.8);