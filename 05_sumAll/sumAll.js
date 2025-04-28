const sumAll = function(lowerLimit, upperLimit) {

    if (typeof lowerLimit !== "number" || typeof upperLimit !== "number") return "ERROR"
    if (lowerLimit < 0 || upperLimit < 0) return "ERROR"
    if (!Number.isInteger(lowerLimit) || !Number.isInteger(upperLimit)) return "ERROR"
    if (lowerLimit > upperLimit) {
        let temp = lowerLimit;
        lowerLimit = upperLimit;
        upperLimit = temp;
    }

    let sum = null;

    for (let i = lowerLimit; i <= upperLimit; i++){
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
