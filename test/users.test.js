const url = require("../config/settings");
const users = require("../pages/users")

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe("Suite de Testes API Fake - Users", (done) => {

  it("GET /users", (done) => {
    chai.request(url.fakeApi)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property('id');
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('username');
        res.body[0].should.have.property('email');
        res.body[0].should.have.property('address');
        res.body[0].should.have.property('address').to.have.property('street');
        res.body[0].should.have.property('address').to.have.property('suite');
        res.body[0].should.have.property('address').to.have.property('city');
        res.body[0].should.have.property('address').to.have.property('zipcode');
        res.body[0].should.have.property('address').to.have.property('geo');
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lat');
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lng');
        res.body[0].should.have.property('phone');
        res.body[0].should.have.property('website');
        res.body[0].should.have.property('company');
        res.body[0].should.have.property('company').to.have.property('name');
        res.body[0].should.have.property('company').to.have.property('catchPhrase');
        res.body[0].should.have.property('company').to.have.property('bs');
        done();
      });
  });

  it("GET /users/{id}", (done) => {
    chai.request(url.fakeApi)
      .get("/users/3")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('id').to.equal(3);
        res.body.should.have.property('name').to.equal("Clementine Bauch");
        res.body.should.have.property('username').to.equal("Samantha");
        res.body.should.have.property('email').to.equal("Nathan@yesenia.net");
        res.body.should.have.property('address');
        res.body.should.have.property('address').to.have.property('street').to.equal("Douglas Extension");
        res.body.should.have.property('address').to.have.property('suite').to.equal("Suite 847");
        res.body.should.have.property('address').to.have.property('city').to.equal("McKenziehaven");
        res.body.should.have.property('address').to.have.property('zipcode').to.equal("59590-4157");
        res.body.should.have.property('address').to.have.property('geo');
        res.body.should.have.property('address').to.have.property('geo').to.have.property('lat').to.equal("-68.6102");
        res.body.should.have.property('address').to.have.property('geo').to.have.property('lng').to.equal("-47.0653");
        res.body.should.have.property('phone').to.equal("1-463-123-4447");
        res.body.should.have.property('website').to.equal("ramiro.info");
        res.body.should.have.property('company');
        res.body.should.have.property('company').to.have.property('name').to.equal("Romaguera-Jacobson");
        res.body.should.have.property('company').to.have.property('catchPhrase').to.equal("Face to face bifurcated interface");
        res.body.should.have.property('company').to.have.property('bs').to.equal("e-enable strategic applications");
        done();
      });
  });

  it("GET /users?id={id}", (done) => {
    chai.request(url.fakeApi)
      .get("/users?id=3")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property('id').to.equal(3);
        res.body[0].should.have.property('name').to.equal("Clementine Bauch");
        res.body[0].should.have.property('username').to.equal("Samantha");
        res.body[0].should.have.property('email').to.equal("Nathan@yesenia.net");
        res.body[0].should.have.property('address');
        res.body[0].should.have.property('address').to.have.property('street').to.equal("Douglas Extension");
        res.body[0].should.have.property('address').to.have.property('suite').to.equal("Suite 847");
        res.body[0].should.have.property('address').to.have.property('city').to.equal("McKenziehaven");
        res.body[0].should.have.property('address').to.have.property('zipcode').to.equal("59590-4157");
        res.body[0].should.have.property('address').to.have.property('geo');
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lat').to.equal("-68.6102");
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lng').to.equal("-47.0653");
        res.body[0].should.have.property('phone').to.equal("1-463-123-4447");
        res.body[0].should.have.property('website').to.equal("ramiro.info");
        res.body[0].should.have.property('company');
        res.body[0].should.have.property('company').to.have.property('name').to.equal("Romaguera-Jacobson");
        res.body[0].should.have.property('company').to.have.property('catchPhrase').to.equal("Face to face bifurcated interface");
        res.body[0].should.have.property('company').to.have.property('bs').to.equal("e-enable strategic applications");
        done();
      });
  });

  it("GET /users?name={name}", (done) => {
    chai.request(url.fakeApi)
      .get("/users?name=Clementine Bauch")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property('id').to.equal(3);
        res.body[0].should.have.property('name').to.equal("Clementine Bauch");
        res.body[0].should.have.property('username').to.equal("Samantha");
        res.body[0].should.have.property('email').to.equal("Nathan@yesenia.net");
        res.body[0].should.have.property('address');
        res.body[0].should.have.property('address').to.have.property('street').to.equal("Douglas Extension");
        res.body[0].should.have.property('address').to.have.property('suite').to.equal("Suite 847");
        res.body[0].should.have.property('address').to.have.property('city').to.equal("McKenziehaven");
        res.body[0].should.have.property('address').to.have.property('zipcode').to.equal("59590-4157");
        res.body[0].should.have.property('address').to.have.property('geo');
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lat').to.equal("-68.6102");
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lng').to.equal("-47.0653");
        res.body[0].should.have.property('phone').to.equal("1-463-123-4447");
        res.body[0].should.have.property('website').to.equal("ramiro.info");
        res.body[0].should.have.property('company');
        res.body[0].should.have.property('company').to.have.property('name').to.equal("Romaguera-Jacobson");
        res.body[0].should.have.property('company').to.have.property('catchPhrase').to.equal("Face to face bifurcated interface");
        res.body[0].should.have.property('company').to.have.property('bs').to.equal("e-enable strategic applications");
        done();
      });
  });

  it("GET /users?username={username}", (done) => {
    chai.request(url.fakeApi)
      .get("/users?username=Samantha")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property('id').to.equal(3);
        res.body[0].should.have.property('name').to.equal("Clementine Bauch");
        res.body[0].should.have.property('username').to.equal("Samantha");
        res.body[0].should.have.property('email').to.equal("Nathan@yesenia.net");
        res.body[0].should.have.property('address');
        res.body[0].should.have.property('address').to.have.property('street').to.equal("Douglas Extension");
        res.body[0].should.have.property('address').to.have.property('suite').to.equal("Suite 847");
        res.body[0].should.have.property('address').to.have.property('city').to.equal("McKenziehaven");
        res.body[0].should.have.property('address').to.have.property('zipcode').to.equal("59590-4157");
        res.body[0].should.have.property('address').to.have.property('geo');
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lat').to.equal("-68.6102");
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lng').to.equal("-47.0653");
        res.body[0].should.have.property('phone').to.equal("1-463-123-4447");
        res.body[0].should.have.property('website').to.equal("ramiro.info");
        res.body[0].should.have.property('company');
        res.body[0].should.have.property('company').to.have.property('name').to.equal("Romaguera-Jacobson");
        res.body[0].should.have.property('company').to.have.property('catchPhrase').to.equal("Face to face bifurcated interface");
        res.body[0].should.have.property('company').to.have.property('bs').to.equal("e-enable strategic applications");
        done();
      });
  });

  it("GET /users?email={email}", (done) => {
    chai.request(url.fakeApi)
      .get("/users?email=Nathan@yesenia.net")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property('id').to.equal(3);
        res.body[0].should.have.property('name').to.equal("Clementine Bauch");
        res.body[0].should.have.property('username').to.equal("Samantha");
        res.body[0].should.have.property('email').to.equal("Nathan@yesenia.net");
        res.body[0].should.have.property('address');
        res.body[0].should.have.property('address').to.have.property('street').to.equal("Douglas Extension");
        res.body[0].should.have.property('address').to.have.property('suite').to.equal("Suite 847");
        res.body[0].should.have.property('address').to.have.property('city').to.equal("McKenziehaven");
        res.body[0].should.have.property('address').to.have.property('zipcode').to.equal("59590-4157");
        res.body[0].should.have.property('address').to.have.property('geo');
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lat').to.equal("-68.6102");
        res.body[0].should.have.property('address').to.have.property('geo').to.have.property('lng').to.equal("-47.0653");
        res.body[0].should.have.property('phone').to.equal("1-463-123-4447");
        res.body[0].should.have.property('website').to.equal("ramiro.info");
        res.body[0].should.have.property('company');
        res.body[0].should.have.property('company').to.have.property('name').to.equal("Romaguera-Jacobson");
        res.body[0].should.have.property('company').to.have.property('catchPhrase').to.equal("Face to face bifurcated interface");
        res.body[0].should.have.property('company').to.have.property('bs').to.equal("e-enable strategic applications");
        done();
      });
  });

  it("GET /users?addrees={address}", (done) => {
    chai.request(url.fakeApi)
      .get("/users?address=Douglas Extension")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array').to.empty;
        done();
      });
  });
});