const repeatString = function(word, num) {
    let newString = "";
    for (let i=0; i<num; i++){
        newString += word;
    }
    if (num < 0) return "ERROR";
    
    return newString;
}

// Do not edit below this line
module.exports = repeatString;
