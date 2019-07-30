const HTTPStatus = require('http-status');
const config = require('../../config/env/config')();

function onRequestSuccess(response, data) {
  return response.status(HTTPStatus.OK).json({
    status: 200,
    converted_number: data
  });
}

function onServerSideError(response, message) {
  return response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
    status_code: 500,
    message: [message],
  });
}

module.exports = {
  onRequestSuccess,
  onServerSideError,
};
