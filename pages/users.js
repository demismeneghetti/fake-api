const fake_api = "https://jsonplaceholder.typicode.com"

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

class Users {
  GetUsers(id) {
    chai.request(fake_api)
      .get(`/users/${id}`)
      .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      done();
      }
    );
  };
};

module.exports = {
  Users
};