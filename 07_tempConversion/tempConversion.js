const convertToFahrenheit = function(temperature) {
  let celsius = temperature * (9/5) + 32;
  celsius = parseFloat(celsius.toFixed(1));
  return celsius;
};

const convertToCelsius= function(temperature) {
  let fahrenheit = ( temperature - 32 ) * 5/9;
  fahrenheit = parseFloat(fahrenheit.toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
