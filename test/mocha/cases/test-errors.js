var chai = require('chai');
var chaiHttp = require('chai-http');
let HostConfig = require('../config/host');

let should = chai.should();
let host = HostConfig.host();

chai.use(chaiHttp);

function errorTests(host) {

  describe('/GET 999999 - 400 BAD REQUEST', () => {
    it('should return Error Message', (done) => {
      chai.request(host)
          .get('/999999')
          .end((error, response) => {
                response.should.have.status(400);
                response.body.status.should.be.a('Number');
                response.body.message.should.be.a('String');
                response.body.status.should.be.eql(400);
                response.body.message.should.be.eql('Your requested value is not valid. Request a number between -99999 and 99999, with only numbers and a minus sign in front of the value for negative values.');
                console.log(`Message: ${response.body.message}`);
              done();
          });
    });
  });


  describe('/GET --1 - 400 BAD REQUEST' , () => {
    it('should return Error Message', (done) => {
      chai.request(host)
          .get('/--1')
          .end((error, response) => {
                response.should.have.status(400);
                response.body.status.should.be.a('Number');
                response.body.message.should.be.a('String');
                response.body.status.should.be.eql(400);
                response.body.message.should.be.eql('Your requested value is not valid. Request a number between -99999 and 99999, with only numbers and a minus sign in front of the value for negative values.');
                console.log(`Message: ${response.body.message}`);
            done();
          });
    });
  });

  describe('/GET 1a2 - 400 BAD REQUEST' , () => {
    it('should return Error Message', (done) => {
      chai.request(host)
          .get('/1a2')
          .end((error, response) => {
                response.should.have.status(400);
                response.body.status.should.be.a('Number');
                response.body.message.should.be.a('String');
                response.body.status.should.be.eql(400);
                response.body.message.should.be.eql('Your requested value is not valid. Request a number between -99999 and 99999, with only numbers and a minus sign in front of the value for negative values.');
                console.log(`Message: ${response.body.message}`);
            done();
          });
    });
  });


}

errorTests(host);

module.exports = {
  errorTests
};
