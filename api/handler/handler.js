const HTTPStatus = require('http-status');

function onRequestSuccess(response, data) {
  return response.status(HTTPStatus.OK).json({
    status: 200,
    converted_number: data
  });
}

function onRequestError(response, message) {
  return response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
    status_code: 500,
    message: [message],
  });
}

module.exports = {
  onRequestSuccess,
  onRequestError,
};
