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

describe("Suite de Testes API Fake - Photos", (done) => {

  it("GET /photos", (done) => {
    chai.request(fake_api)
      .get("/photos")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
      done();
      }
    );
  });
});