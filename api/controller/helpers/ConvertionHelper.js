const numeros = require('../../dictionaries/pt-br/NumberDictionary');

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

function unitsConverter(value){
  if(value.length == 1){
    return numeros.units[parseInt(value)];
  } else{
    return numeros.units[parseInt(value[value.length-1])];
  }
}

function tensConverter(value){
  if(parseInt(value[value.length-2]) == 1){
    return numeros.outliers[parseInt(value[value.length-1])];
  } else {
    //TODO fix this -1. Log the value to see why it matters
    return numeros.tens[parseInt(value[value.length-2]-1)];
  }
}

function hundredsConverter(value){
  //TODO fix this -1. Log the value to see why it matters
  return numeros.hundreds[parseInt(value[value.length-3]-1)];
}

function thousandsConverter(value){
  if (parseInt(value[value.length-4]) == 1){
    return 'Mil';
  } else {
  return numeros.units[parseInt(value[value.length-4])] + ' Mil';
  }
}

function tenthsOfthousandsConverter(value){
  if(parseInt(value[0]) == 1){
    return numeros.outliers[parseInt(value[1])];
  } else {
    //TODO fix this -1. Log the value to see why it matters
    return numeros.tens[parseInt(value[0]-1)];
  }
}

module.exports = {
  generateConvertedNumberString
};