/*
/
/
/
*/
// const fake_api = "https://jsonplaceholder.typicode.com"


// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let should = chai.should();

// chai.use(chaiHttp);

const GetUsers = require ("../pages/users");

describe("Suite de Testes API Fake - Users", (done) => {

  it("GET /users", () => {
    GetUsers(1)
  });
});