//Require Helpers from /helpers
const ConvertionHelper = require('./helpers/ConvertionHelper');
const ValidationHelper = require('./helpers/ValidationHelper');

//Require the ResponseHandler
const ResponseHandler = require('../handler/handler');

//The main function for the Numbers API. Through this async, the application processes requested value
//And then takes the pertinent responses from the returns of the internal data processing
async function getConvertedValue(request, response) {
  try {
    let value = Number(request.params.value);
    let convertedNumberString = '';
    
    if(value < 0){
      value = value * -1;
      convertedNumberString = `Menos `;
    }

    if(value == null || !ValidationHelper.checkRequestValueIntegrity(String(value))){
      throw Error;
    }
    
    convertedNumberString += ConvertionHelper.generateConvertedNumberString(value);
    
    return ResponseHandler.onRequestSuccess(response, convertedNumberString);
  } catch (error) {
    return ResponseHandler.onRequestError(response, 'Your requested value is not valid. Request a number between -99999 and 99999, with only numbers and a minus sign in front of the value for negative values.');
  }
}

module.exports = {
  getConvertedValue
};
