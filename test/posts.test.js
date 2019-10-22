const url = require("../config/settings");

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe("Suite de Testes API Fake - Posts", (done) => {

  it("GET /posts", (done) => {
    chai.request(url.fakeApi)
      .get("/posts")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array').to.not.empty;
        done();
      });
  });

  it("GET /posts/{id}", (done) => {
    chai.request(url.fakeApi)
      .get("/posts/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('id').to.equal(1);
        res.body.should.have.property('userId').to.equal(1);
        res.body.should.have.property('title').to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        res.body.should.have.property('body').to.equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
        done();
      });
  });

  it("GET /posts/{id}/comments", (done) => {
    chai.request(url.fakeApi)
      .get("/posts/1/comments")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('postId').to.equal(1);
        res.body[0].should.have.property('id').to.equal(1);
        res.body[0].should.have.property('name').to.equal("id labore ex et quam laborum");
        res.body[0].should.have.property('email').to.equal("Eliseo@gardner.biz");
        res.body[0].should.have.property('body').to.equal("laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium");
        done();
      });
  });

  it("GET /posts?userId={id}", (done) => {
    chai.request(url.fakeApi)
      .get("/posts?userId=1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(1);
        res.body[0].should.have.property('id').to.equal(1);
        res.body[0].should.have.property('title').to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        res.body[0].should.have.property('body').to.equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
        done();
      });
  });

  it("GET /posts?id={id}", (done) => {
    chai.request(url.fakeApi)
      .get("/posts?id=1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(1);
        res.body[0].should.have.property('id').to.equal(1);
        res.body[0].should.have.property('title').to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        res.body[0].should.have.property('body').to.equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
        done();
      });
  });

  it("GET /posts?title={title}", (done) => {
    chai.request(url.fakeApi)
      .get("/posts?title=qui est esse")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('userId').to.equal(1);
        res.body[0].should.have.property('id').to.equal(2);
        res.body[0].should.have.property('title').to.equal("qui est esse");
        res.body[0].should.have.property('body').to.equal("est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla");
        done();
      });
  });
});