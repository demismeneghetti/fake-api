const url = require("../config/settings");

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe("Suite de Testes API Fake - Albums", (done) => {

  it("GET /albums", (done) => {
    chai.request(url.fakeApi)
      .get("/albums")
      .end((err, res) => { // testes a serem realizados
        res.should.have.status(200); // verificando se o retorno e um status code 200
        res.body.should.be.a('array').to.not.empty; // Verificando se o retorno e um array
        done();
      });
  });

  it("GET /albums/{id}", (done) => {
    chai.request(url.fakeApi)
      .get("/albums/10")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('userId').to.equal(1);
        res.body.should.have.property('id').to.equal(10);
        res.body.should.have.property('title').to.equal("distinctio laborum qui");
        done();
      });
  });

  it("GET /albums?userId={userId}", (done) => {
    chai.request(url.fakeApi)
      .get("/albums?userId=2")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(2);
        res.body[0].should.have.property('id').to.equal(11);
        res.body[0].should.have.property('title').to.equal("quam nostrum impedit mollitia quod et dolor");
        done();
      });
  });

  it("GET /albums?id={id}", (done) => {
    chai.request(url.fakeApi)
      .get("/albums?id=11")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(2);
        res.body[0].should.have.property('id').to.equal(11);
        res.body[0].should.have.property('title').to.equal("quam nostrum impedit mollitia quod et dolor");
        done();
      });
  });

  it("GET /albums?title={title}", (done) => {
    chai.request(url.fakeApi)
      .get("/albums?title=quam nostrum impedit mollitia quod et dolor")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(2);
        res.body[0].should.have.property('id').to.equal(11);
        res.body[0].should.have.property('title').to.equal("quam nostrum impedit mollitia quod et dolor");
        done();
      });
  });

  // it("GET /albums/{id}/comments - Bad Request 400", (done) => {
  //   chai.request(url.fakeApi)
  //     .get("/albums/1/comments")
  //     .end((err, res) => {
  //       res.should.have.status(400);
  //       res.body.should.be.a('array');
  //       done();
  //     });
  // });
});