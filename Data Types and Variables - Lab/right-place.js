function rightPlace(string1, char, string2) {
    let newWord = string1.replace(`_`, char);
        let output =  newWord  === string2? "Matched": "Not Matched";
        console.log(output);
        
    }
    rightPlace("Str_ng", "_", "Strong");