/*
/
/
/
*/
const url = require ("../config/settings");

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe("Suite de Testes API Fake - Todos", (done) => {

  it("GET /todos", (done) => {
    chai.request(url.fakeApi)
      .get("/todos")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array').to.not.empty;
      done();
      }
    );
  });

  it("GET /todos/{id}", (done) => {
    chai.request(url.fakeApi)
      .get("/todos/5")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('userId').to.equal(1);
        res.body.should.have.property('id').to.equal(5);
        res.body.should.have.property('title').to.equal("laboriosam mollitia et enim quasi adipisci quia provident illum");
        res.body.should.have.property('completed').to.equal(false);
        done();
      });
  });

  it("GET /todos?userId={userId}", (done) => {
    chai.request(url.fakeApi)
      .get("/todos?userId=2")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(2);
        res.body[0].should.have.property('id').to.equal(21);
        res.body[0].should.have.property('title').to.equal("suscipit repellat esse quibusdam voluptatem incidunt");
        res.body[0].should.have.property('completed').to.equal(false);
        res.body.length.should.be.equal(20);
        done();
      });
  });

  it("GET /todos?id={id}", (done) => {
    chai.request(url.fakeApi)
      .get("/todos?id=10")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(1);
        res.body[0].should.have.property('id').to.equal(10);
        res.body[0].should.have.property('title').to.equal("illo est ratione doloremque quia maiores aut");
        res.body[0].should.have.property('completed').to.equal(true);
        res.body.length.should.be.equal(1);
        done();
      });
  });

  it("GET /todos?title={title}", (done) => {
    chai.request(url.fakeApi)
      .get("/todos?title=illo est ratione doloremque quia maiores aut")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(1);
        res.body[0].should.have.property('id').to.equal(10);
        res.body[0].should.have.property('title').to.equal("illo est ratione doloremque quia maiores aut");
        res.body[0].should.have.property('completed').to.equal(true);
        res.body.length.should.be.equal(1);
        done();
      });
  });

  it("GET /todos?completed={true}", (done) => {
    chai.request(url.fakeApi)
      .get("/todos?completed=true")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(1);
        res.body[0].should.have.property('id').to.equal(4);
        res.body[0].should.have.property('title').to.equal("et porro tempora");
        res.body[0].should.have.property('completed').to.equal(true);
        res.body.length.should.be.equal(90);
        done();
      });
  });

  it("GET /todos?completed={false}", (done) => {
    chai.request(url.fakeApi)
      .get("/todos?completed=false")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(1);
        res.body[0].should.have.property('id').to.equal(1);
        res.body[0].should.have.property('title').to.equal("delectus aut autem");
        res.body[0].should.have.property('completed').to.equal(false);
        res.body.length.should.be.equal(110);
        done();
      });
  });
});