//This helper concentrates all the digit conversions of the application. It requires
//the number dictionary for the translation process.
//TODO code for localization here.
const dictionary = require('../../dictionaries/pt-br/NumberDictionary');

function unitsConverter(value){
  if(value.length == 1){
    return dictionary.units[parseInt(value)];
  } else{
    return dictionary.units[parseInt(value[value.length-1])];
  }
}

function tensConverter(value){
  if(parseInt(value[value.length-2]) == 1){
    return dictionary.outliers[parseInt(value[value.length-1])];
  } else {
    return dictionary.tens[parseInt(value[value.length-2])];
  }
}

function hundredsConverter(value){
  if(parseInt(value[value.length-3]) == 1 && (parseInt(value[value.length-2]) >= 1 || parseInt(value[value.length-1]) >= 1 )){
    return 'Cento';
  } 
  return dictionary.hundreds[parseInt(value[value.length-3])];
}

function thousandsConverter(value){
  if (parseInt(value[value.length-4]) == 1){
    return 'Mil';
  } else {
  return dictionary.units[parseInt(value[value.length-4])] + ' Mil';
  }
}

function tenthsOfthousandsConverter(value){
  if(parseInt(value[0]) == 1){
    return dictionary.outliers[parseInt(value[1])];
  } else {
    return dictionary.tens[parseInt(value[0])];
  }
}

module.exports = {
    unitsConverter,
    tensConverter,
    hundredsConverter,
    thousandsConverter,
    tenthsOfthousandsConverter
  };