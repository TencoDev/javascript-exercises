const reverseString = function(string) {
    let array = [...string];
    console.log(array);
    let reversedString = array.reverse().join("")

    console.log(reversedString);

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
