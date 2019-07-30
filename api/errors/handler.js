const HTTPStatus = require('http-status');
const config = require('../../config/env/config')();

function onSuccess(response, data, next) {
  return response.status(HTTPStatus.OK).json({
    status: 200,
    converted_number: data
  });
}

function onServerError(response, message, error, next) {
  return response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
    status_code: 500,
    message: [message],
  });
}

function onError(response, error, message) {
  return onServerError(response, `${message} ${error}.`, error);
}

function errorHandlerApi(error, req, response, next) {
  return response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
    message: ['Internal Server Error'],
  });
}

module.exports = {
  onSuccess,
  onError,
  onServerError,
  errorHandlerApi,
};
