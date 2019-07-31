//Require Helpers from /helpers
const ConvertionHelper = require('./helpers/ConvertionHelper');
const ValidationHelper = require('./helpers/ValidationHelper');

//Require the ResponseHandler
const ResponseHandler = require('../handler/handler');

//The main function for the Numbers API. Through this async, the application processes requested value
//And then takes the pertinent responses from the returns of the internal data processing
async function getConvertedValue(request, response) {
  try {
    let value = request.params.value;
    let convertedNumberString = '';
    
    if (value[0] == '-') {
      if(value[1] != '0') {
        convertedNumberString = 'Menos ';
      }
      value = String(value).substr(1);
    }
      
    if (!ValidationHelper.checkRequestValueIntegrity(value)) {
      throw Error ('Your requested value is not valid. Request a number between -99999 and 99999, with only numbers and a minus sign in front of the value for negative values')
    }
    
    parsedValue = parseInt(value);
    convertedNumberString += ConvertionHelper.generateConvertedNumberString(parsedValue);
    return ResponseHandler.onRequestSuccess(response, convertedNumberString);
  } catch (error) {
    return ResponseHandler.onRequestError(response, 'Error when converting number.');
  }
}

module.exports = {
  getConvertedValue
};
