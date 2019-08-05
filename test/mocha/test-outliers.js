var chai = require('chai');
var chaiHttp = require('chai-http');


chai.use(chaiHttp);
let should = chai.should();
let host = 'http://localhost:4567';

describe('/GET 999', () => {
  it('should return Novecentos e Noventa e Nove', (done) => {
    chai.request(host)
        .get('/999')
        .end((error, response) => {
              response.should.have.status(200);
              response.body.status.should.be.a('Number');
              response.body.extenso.should.be.a('String');
              response.body.status.should.be.eql(200);
              response.body.extenso.should.be.eql('Novecentos e Noventa e Nove');
          done();
        });
  });
});

describe('/GET 9999', () => {
  it('should return Nove Mil Novecentos e Noventa e Nove', (done) => {
    chai.request(host)
        .get('/9999')
        .end((error, response) => {
              response.should.have.status(200);
              response.body.status.should.be.a('Number');
              response.body.extenso.should.be.a('String');
              response.body.status.should.be.eql(200);
              response.body.extenso.should.be.eql('Nove Mil e Novecentos e Noventa e Nove');
          done();
        });
  });
});

describe('/GET 99999', () => {
  it('should return Noventa e nove mil novecentos e noventa e nove', (done) => {
    chai.request(host)
        .get('/99999')
        .end((error, response) => {
              response.should.have.status(200);
              response.body.status.should.be.a('Number');
              response.body.extenso.should.be.a('String');
              response.body.status.should.be.eql(200);
              response.body.extenso.should.be.eql('Noventa e Nove Mil e Novecentos e Noventa e Nove');
          done();
        });
  });
});