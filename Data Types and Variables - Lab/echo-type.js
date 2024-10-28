function echoType(input){
    if (typeof input === `string` || typeof input === `number`){
        console.log(`${typeof input}\n${input}`);
    }else{
        console.log(`${typeof input}\nParameter is not suitable for printing`);

    }

}
echoType(null);