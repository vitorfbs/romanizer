//TODO remove the parseInts to something more generic and defined outside of these scopes
const DecimalConvertionHelper = require('./DecimalConvertionHelper');


//This is the main switch code block for the conversion process. For each case,
//the corresponding number size is processed to the full text form, with the default being single digits.
function generateConvertedNumberString(value) {
  value = String(value);
  let convertedNumberString = '';

  switch(value.length) {

  case 2:
    convertedNumberString += DecimalConvertionHelper.tensConverter(value);
      
    if(parseInt(value[value.length-1]) > 0 && parseInt(value[0]) != 1){
      convertedNumberString += ` e ${DecimalConvertionHelper.unitsConverter(value)}`;
    }

    break;

  case 3:
    convertedNumberString += DecimalConvertionHelper.hundredsConverter(value);

    if(parseInt(value[value.length-2]) > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.tensConverter(value)}`;
    }
    if(parseInt(value[value.length-1]) > 0 && parseInt(value[value.length-2]) != 1){
      convertedNumberString += ` e ${DecimalConvertionHelper.unitsConverter(value)}`;
    }

    break;

  case 4:
    convertedNumberString += DecimalConvertionHelper.thousandsConverter(value);
    
    if(parseInt(value[value.length-3]) > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.hundredsConverter(value)}`;
    }

    if(parseInt(value[value.length-2]) > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.tensConverter(value)}`;
    }

    if(parseInt(value[value.length-1]) > 0 && parseInt(value[value.length-2]) != 1){
      convertedNumberString += ` e ${DecimalConvertionHelper.unitsConverter(value)}`;
    }
    
    break;

  case 5:
    convertedNumberString += DecimalConvertionHelper.tenthsOfthousandsConverter(value);
    
    if(parseInt(value[value.length-4]) > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.thousandsConverter(value)}`;
    } else {
      convertedNumberString += ' Mil';
    }

    if(parseInt(value[value.length-3]) > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.hundredsConverter(value)}`;
    }

    if(parseInt(value[value.length-2]) > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.tensConverter(value)}`;
    }

    if(parseInt(value[value.length-1]) > 0 && parseInt(value[value.length-2]) != 1){
      convertedNumberString += ` e ${DecimalConvertionHelper.unitsConverter(value)}`;
    }
    break;

  default:
    return DecimalConvertionHelper.unitsConverter(value);
  }

  return convertedNumberString;
}

module.exports = {
  generateConvertedNumberString
};