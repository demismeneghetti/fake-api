/*
/
/
/
*/
const fake_api = "https://jsonplaceholder.typicode.com"

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe("Suite de Testes API Fake - Albums", (done) => {

  it("GET /albums", (done) => {
    chai.request(fake_api)
      .get("/albums")
      .end((err, res) => { // testes a serem realizados
        res.should.have.status(200); // verificando se o retorno e um status code 200
        res.body.should.be.a('array'); // Verificando se o retorno e um array
      done();
      }
    );
  });

  it("GET /albums/{id}", (done) => {
    chai.request(fake_api)
      .get("/albums/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('userId');
        res.body.should.have.property('id');
        res.body.should.have.property('title');
      done();
      }
    );
  });

  it("GET /albums/{id}/comments - Bad Request 400", (done) => {
    chai.request(fake_api)
      .get("/albums/1/comments")
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('array');
      done();
      }
    );
  });

  it("GET /albums?userId={id}", (done) => {
    chai.request(fake_api)
      .get("/albums?userId=1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
      done();
      }
    );
  });
});