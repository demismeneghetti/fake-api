const url = require("../config/settings");

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe("Suite de Testes API Fake - Comments", (done) => {

  it("GET /comments", (done) => {
    chai.request(url.fakeApi)
      .get("/comments")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it("GET /comments/{id}", (done) => {
    chai.request(url.fakeApi)
      .get("/comments/3")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('postId').to.equal(1);
        res.body.should.have.property('id').to.equal(3);
        res.body.should.have.property('name').to.equal("odio adipisci rerum aut animi");
        res.body.should.have.property('email').to.equal("Nikita@garfield.biz");
        res.body.should.have.property('body').to.equal("quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione");
        done();
      });
  });

  it("GET /comments?postId/{postId}", (done) => {
    chai.request(url.fakeApi)
      .get("/comments?postId=3")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array').to.not.empty;
        res.body[0].should.have.property('postId').to.equal(3);
        res.body[0].should.have.property('id').to.equal(11);
        res.body[0].should.have.property('name').to.equal("fugit labore quia mollitia quas deserunt nostrum sunt");
        res.body[0].should.have.property('email').to.equal("Veronica_Goodwin@timmothy.net");
        res.body[0].should.have.property('body').to.equal("ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea");
        res.body.length.should.be.equal(5);
        done();
      });
  });

  it("GET /comments?id={id}", (done) => {
    chai.request(url.fakeApi)
      .get("/comments?id=11")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property('postId').to.equal(3);
        res.body[0].should.have.property('id').to.equal(11);
        res.body[0].should.have.property('name').to.equal("fugit labore quia mollitia quas deserunt nostrum sunt");
        res.body[0].should.have.property('email').to.equal("Veronica_Goodwin@timmothy.net");
        res.body[0].should.have.property('body').to.equal("ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea");
        done();
      });
  });

  it("GET /comments?name={name}", (done) => {
    chai.request(url.fakeApi)
      .get("/comments?name=fugit labore quia mollitia quas deserunt nostrum sunt")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property('postId').to.equal(3);
        res.body[0].should.have.property('id').to.equal(11);
        res.body[0].should.have.property('name').to.equal("fugit labore quia mollitia quas deserunt nostrum sunt");
        res.body[0].should.have.property('email').to.equal("Veronica_Goodwin@timmothy.net");
        res.body[0].should.have.property('body').to.equal("ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea");
        done();
      });
  });

  it("GET /comments?email={email}", (done) => {
    chai.request(url.fakeApi)
      .get("/comments?email=Veronica_Goodwin@timmothy.net")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property('postId').to.equal(3);
        res.body[0].should.have.property('id').to.equal(11);
        res.body[0].should.have.property('name').to.equal("fugit labore quia mollitia quas deserunt nostrum sunt");
        res.body[0].should.have.property('email').to.equal("Veronica_Goodwin@timmothy.net");
        res.body[0].should.have.property('body').to.equal("ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea");
        done();
      });
  });
});