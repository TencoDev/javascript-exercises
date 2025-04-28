const removeFromArray = function(inputArray, ...args) {
    return inputArray.filter(element => !args.includes(element));
};


// Do not edit below this line
module.exports = removeFromArray;
