//TODO remove the parseInts to something more generic and defined outside of these scopes
const DecimalConvertionHelper = require('./DecimalConvertionHelper');


//This is the main switch code block for the conversion process. For each case,
//the corresponding number size is processed to the full text form, with the default being single digits.
function generateConvertedNumberString(value) {
  var value = Array.from(value.toString()).map(Number);
  var convertedNumberString = '';

  switch(value.length) {

  case 2:
    convertedNumberString += DecimalConvertionHelper.tensConverter(value);
      
    if(value[value.length-1] > 0 && value[0] != 1){
      convertedNumberString += ` e ${DecimalConvertionHelper.unitsConverter(value)}`;
    }

    break;

  case 3:
    convertedNumberString += DecimalConvertionHelper.hundredsConverter(value);

    if(value[value.length-2] > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.tensConverter(value)}`;
    }
    if(value[value.length-1] > 0 && value[value.length-2] != 1){
      convertedNumberString += ` e ${DecimalConvertionHelper.unitsConverter(value)}`;
    }

    break;

  case 4:
    convertedNumberString += DecimalConvertionHelper.thousandsConverter(value);
    
    if(value[value.length-3] > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.hundredsConverter(value)}`;
    }

    if(value[value.length-2] > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.tensConverter(value)}`;
    }

    if(value[value.length-1] > 0 && value[value.length-2] != 1){
      convertedNumberString += ` e ${DecimalConvertionHelper.unitsConverter(value)}`;
    }
    
    break;

  case 5:
    convertedNumberString += DecimalConvertionHelper.tenthsOfthousandsConverter(value);
    
    if(value[value.length-4] > 0){
      convertedNumberString += ` ${DecimalConvertionHelper.thousandsConverter(value)}`;
    } else {
      convertedNumberString += ' Mil';
    }

    if(value[value.length-3] > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.hundredsConverter(value)}`;
    }

    if(value[value.length-2] > 0){
      convertedNumberString += ` e ${DecimalConvertionHelper.tensConverter(value)}`;
    }

    if(value[value.length-1] > 0 && value[value.length-2] != 1){
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