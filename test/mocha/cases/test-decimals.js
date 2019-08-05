var chai = require('chai');
var chaiHttp = require('chai-http');
let HostConfig = require('../config/host');

let should = chai.should();
let host = HostConfig.host();

chai.use(chaiHttp);

function decimalTests(host) {

  describe('/GET 9 - 200 OK', () => {
    it('should return Nove', (done) => {
      chai.request(host)
          .get('/9')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });

  describe('/GET 99 - 200 OK', () => {
    it('should return Noventa e Nove', (done) => {
      chai.request(host)
          .get('/99')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Noventa e Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });

  describe('/GET 999 - 200 OK', () => {
    it('should return Novecentos e Noventa e Nove', (done) => {
      chai.request(host)
          .get('/999')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Novecentos e Noventa e Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });

  describe('/GET 9999 - 200 OK', () => {
    it('should return Nove Mil Novecentos e Noventa e Nove', (done) => {
      chai.request(host)
          .get('/9999')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Nove Mil e Novecentos e Noventa e Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });

  describe('/GET 99999 - 200 OK', () => {
    it('should return Noventa e nove mil novecentos e noventa e nove', (done) => {
      chai.request(host)
          .get('/99999')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Noventa e Nove Mil e Novecentos e Noventa e Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });


  describe('/GET -9 - 200 OK', () => {
    it('should return Menos Nove', (done) => {
      chai.request(host)
          .get('/-9')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Menos Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });

  describe('/GET -99 - 200 OK', () => {
    it('should return Menos Noventa e Nove', (done) => {
      chai.request(host)
          .get('/-99')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Menos Noventa e Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });

  describe('/GET -999 - 200 OK', () => {
    it('should return Menos Novecentos e Noventa e Nove', (done) => {
      chai.request(host)
          .get('/-999')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Menos Novecentos e Noventa e Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });

  describe('/GET -9999 - 200 OK', () => {
    it('should return Menos Nove Mil Novecentos e Noventa e Nove', (done) => {
      chai.request(host)
          .get('/-9999')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Menos Nove Mil e Novecentos e Noventa e Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });

  describe('/GET -99999 - 200 OK', () => {
    it('should return Menos Noventa e nove mil novecentos e noventa e nove', (done) => {
      chai.request(host)
          .get('/-99999')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.status.should.be.a('Number');
                response.body.extenso.should.be.a('String');
                response.body.status.should.be.eql(200);
                response.body.extenso.should.be.eql('Menos Noventa e Nove Mil e Novecentos e Noventa e Nove');
                console.log(`Extenso: ${response.body.extenso}`);
            done();
          });
    });
  });

}

decimalTests(host);

module.exports = {
  decimalTests
};
