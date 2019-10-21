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

describe("Suite de Testes API Fake - Comments", (done) => {

  it("GET /comments", (done) => {
    chai.request(fake_api)
      .get("/comments")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
      done();
      }
    );
  });
});