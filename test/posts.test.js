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

describe("Suite de Testes API Fake - Posts", (done) => {

  it("GET /posts", (done) => {
    chai.request(fake_api)
      .get("/posts")
      .end((err, res) => { // testes a serem realizados
        res.should.have.status(200); // verificando se o retorno e um status code 200
        res.body.should.be.a('array'); // Verificando se o retorno e um array
      done();
      }
    );
  });

  it("GET /posts/{id}", (done) => {
    chai.request(fake_api)
      .get("/posts/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('userId');
        res.body.should.have.property('id');
        res.body.should.have.property('title');
        res.body.should.have.property('body');
      done();
      }
    );
  });

  it("GET /posts/{id}/comments", (done) => {
    chai.request(fake_api)
      .get("/posts/1/comments")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
      done();
      }
    );
  });

  it("GET /posts?userId={id}", (done) => {
    chai.request(fake_api)
      .get("/posts?userId=1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
      done();
      }
    );
  });

  it("GET /posts?id={id}", (done) => {
    chai.request(fake_api)
      .get("/posts?id=1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        // res.body.should.have.property([0].id);
        // res.body.should.have.property('name');
        // res.body.should.have.property('username');
        // res.body.should.have.property('email');
        // res.body.should.have.property('address');
        // res.body.should.have.property(['address'][0]['street']);
        // res.body.should.have.property('title');
        // res.body.should.have.property('body');
      done();
      }
    );
  });
});