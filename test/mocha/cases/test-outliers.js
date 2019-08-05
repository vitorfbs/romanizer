var chai = require('chai');
var chaiHttp = require('chai-http');
let HostConfig = require('../config/host');

let should = chai.should();
let host = HostConfig.host();

chai.use(chaiHttp);

function outlierTests(host) {

    describe('/GET 0 - 200 OK', () => {
        it('should return Zero', (done) => {
            chai.request(host)
                .get('/0')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.status.should.be.a('Number');
                    response.body.extenso.should.be.a('String');
                    response.body.status.should.be.eql(200);
                    response.body.extenso.should.be.eql('Zero');
                    console.log(`Extenso: ${response.body.extenso}`);
                done();
                });
        });
    });

    describe('/GET -0 - 200 OK', () => {
        it('should return Zero', (done) => {
            chai.request(host)
                .get('/-0')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.status.should.be.a('Number');
                    response.body.extenso.should.be.a('String');
                    response.body.status.should.be.eql(200);
                    response.body.extenso.should.be.eql('Zero');
                    console.log(`Extenso: ${response.body.extenso}`);
                done();
                });
        });
    });

    describe('/GET 00 - 200 OK', () => {
        it('should return Zero', (done) => {
            chai.request(host)
                .get('/00')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.status.should.be.a('Number');
                    response.body.extenso.should.be.a('String');
                    response.body.status.should.be.eql(200);
                    response.body.extenso.should.be.eql('Zero');
                    console.log(`Extenso: ${response.body.extenso}`);
                done();
                });
        });
    });

    describe('/GET 001 - 200 OK', () => {
        it('should return Um', (done) => {
            chai.request(host)
                .get('/001')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.status.should.be.a('Number');
                    response.body.extenso.should.be.a('String');
                    response.body.status.should.be.eql(200);
                    response.body.extenso.should.be.eql('Um');
                    console.log(`Extenso: ${response.body.extenso}`);
                done();
                });
        });
    });

    describe('/GET 11 - 200 OK', () => {
        it('should return Onze', (done) => {
            chai.request(host)
                .get('/11')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.status.should.be.a('Number');
                    response.body.extenso.should.be.a('String');
                    response.body.status.should.be.eql(200);
                    response.body.extenso.should.be.eql('Onze');
                    console.log(`Extenso: ${response.body.extenso}`);
                done();
                });
        });
    });

    describe('/GET 111 - 200 OK', () => {
        it('should return Cento e Onze', (done) => {
            chai.request(host)
                .get('/111')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.status.should.be.a('Number');
                    response.body.extenso.should.be.a('String');
                    response.body.status.should.be.eql(200);
                    response.body.extenso.should.be.eql('Cento e Onze');
                    console.log(`Extenso: ${response.body.extenso}`);
                done();
                });
        });
    });

    describe('/GET 1101 - 200 OK', () => {
        it('should return Mil e Cento e Um', (done) => {
            chai.request(host)
                .get('/1101')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.status.should.be.a('Number');
                    response.body.extenso.should.be.a('String');
                    response.body.status.should.be.eql(200);
                    response.body.extenso.should.be.eql('Mil e Cento e Um');
                    console.log(`Extenso: ${response.body.extenso}`);
                done();
                });
        });
    });

    describe('/GET 1100 - 200 OK', () => {
        it('should return Mil e Cento e Um', (done) => {
            chai.request(host)
                .get('/1100')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.status.should.be.a('Number');
                    response.body.extenso.should.be.a('String');
                    response.body.status.should.be.eql(200);
                    response.body.extenso.should.be.eql('Mil e Cem');
                    console.log(`Extenso: ${response.body.extenso}`);
                done();
                });
        });
    });
}

outlierTests(host);

module.exports = {
  outlierTests
};
