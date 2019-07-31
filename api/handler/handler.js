const HTTPStatus = require('http-status');

//successful request function, for returning the processed number
function onRequestSuccess(response, data) {
  return response.status(HTTPStatus.OK).json({
    status: 200,
    extenso: data
  });
}

//failure of request function, returning the error message
function onRequestError(response, message) {
  return response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
    status: 500,
    message: [message],
  });
}

module.exports = {
  onRequestSuccess,
  onRequestError,
};
