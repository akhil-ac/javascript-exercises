const removeFromArray = function(array, ...removeThese) {
  const newArray = array.filter(item => !removeThese.includes(item));
  return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
