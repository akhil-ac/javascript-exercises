const reverseString = function(string) {
  let letters = string.split("");
  letters.reverse();
  let result = letters.join("");
  return result;
  console.log(result);
};

// Do not edit below this line
module.exports = reverseString;
