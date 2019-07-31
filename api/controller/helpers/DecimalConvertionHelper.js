//This helper concentrates all the digit conversions of the application. It requires
//the number dictionary for the translation process.
//TODO code for localization here.
const dictionary = require('../../dictionaries/pt-br/NumberDictionary');

function unitsConverter(value){
  if(value.length == 1){
    return dictionary.units[Number(value)];
  } else{
    return dictionary.units[Number(value[value.length-1])];
  }
}

function tensConverter(value){
  if(value[value.length-2] == 1){
    return dictionary.outliers[value[value.length-1]];
  } else {
    return `${dictionary.tens[value[value.length-2]]}`;
  }
}

function hundredsConverter(value){
  if(value[value.length-3] == 1 && (value[value.length-2] >= 1 || value[value.length-1] >= 1 )){
    return 'Cento';
  } 
  return `${dictionary.hundreds[value[value.length-3]]}`;
}

function thousandsConverter(value){
  if (value.length >= 4 && value[0] == 1) {
    return 'Mil';
  } else if (value.length > 4){
    return `e ${dictionary.units[value[value.length-4]]} Mil`;
  } else{
    return `${dictionary.units[value[value.length-4]]} Mil`;
  }
}

function tenthsOfthousandsConverter(value){
  if(value[0] == 1){
    return dictionary.outliers[value[1]];
  } else {
    return `${dictionary.tens[value[0]]}`;
  }
}

module.exports = {
    unitsConverter,
    tensConverter,
    hundredsConverter,
    thousandsConverter,
    tenthsOfthousandsConverter
  };