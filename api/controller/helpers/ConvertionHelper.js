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
    //TODO fix this -1. Log the value to see why it matters
    return dictionary.tens[parseInt(value[value.length-2]-1)];
  }
}

function hundredsConverter(value){
  //TODO fix this -1. Log the value to see why it matters
  if(parseInt(value[value.length-3]) == 1 && (parseInt(value[value.length-2]) >= 1 || parseInt(value[value.length-1]) >= 1 )){
    return 'Cento';
  } 
  return dictionary.hundreds[parseInt(value[value.length-3]-1)];
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
    //TODO fix this -1. Log the value to see why it matters
    return dictionary.tens[parseInt(value[0]-1)];
  }
}

function generateConvertedNumberString(value) {
  value = String(value);
  let convertedNumberString = '';

  switch(value.length) {

  case 2:
    convertedNumberString += tensConverter(value);
      
    if(parseInt(value[value.length-1]) > 0 && parseInt(value[0]) != 1){
      convertedNumberString += ` e ${unitsConverter(value)}`;
    }

    break;

  case 3:
    convertedNumberString += hundredsConverter(value);

    if(parseInt(value[value.length-2]) > 0){
      convertedNumberString += ` e ${tensConverter(value)}`;
    }
    if(parseInt(value[value.length-1]) > 0 && parseInt(value[value.length-2]) != 1){
      convertedNumberString += ` e ${unitsConverter(value)}`;
    }

    break;

  case 4:
    convertedNumberString += thousandsConverter(value);
    
    if(parseInt(value[value.length-3]) > 0){
      convertedNumberString += ` e ${hundredsConverter(value)}`;
    }

    if(parseInt(value[value.length-2]) > 0){
      convertedNumberString += ` e ${tensConverter(value)}`;
    }

    if(parseInt(value[value.length-1]) > 0 && parseInt(value[value.length-2]) != 1){
      convertedNumberString += ` e ${unitsConverter(value)}`;
    }
    
    break;

  case 5:
    convertedNumberString += tenthsOfthousandsConverter(value);
    
    if(parseInt(value[value.length-4]) > 0){
      convertedNumberString += ` e ${thousandsConverter(value)}`;
    } else {
      convertedNumberString += ' Mil';
    }

    if(parseInt(value[value.length-3]) > 0){
      convertedNumberString += ` e ${hundredsConverter(value)}`;
    }

    if(parseInt(value[value.length-2]) > 0){
      convertedNumberString += ` e ${tensConverter(value)}`;
    }

    if(parseInt(value[value.length-1]) > 0 && parseInt(value[value.length-2]) != 1){
      convertedNumberString += ` e ${unitsConverter(value)}`;
    }
    break;

  default:
    return unitsConverter(value);
  }

  return convertedNumberString;
}

module.exports = {
  generateConvertedNumberString
};