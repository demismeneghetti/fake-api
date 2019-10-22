const url = require ("../config/settings");

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe("Suite de Testes API Fake - Photos", (done) => {

  it("GET /photos", (done) => {
    chai.request(url.fakeApi)
      .get("/photos")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array').to.not.empty;
      done();
      }
    );
  });

  it("GET /photos/{id}", (done) => {
    chai.request(url.fakeApi)
      .get("/photos/5")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("albumId").to.equal(1);
        res.body.should.have.property("id").to.equal(5);
        res.body.should.have.property("title").to.equal("natus nisi omnis corporis facere molestiae rerum in");
        res.body.should.have.property("url").to.equal("https://via.placeholder.com/600/f66b97");
        res.body.should.have.property("thumbnailUrl").to.equal("https://via.placeholder.com/150/f66b97");
      done();
      }
    );
  });

  it("GET /photos?albumId={albumId}", (done) => {
    chai.request(url.fakeApi)
      .get("/photos?albumId=5")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property("albumId").to.equal(5);
        res.body[0].should.have.property("id").to.equal(201);
        res.body[0].should.have.property("title").to.equal("nesciunt dolorum consequatur ullam tempore accusamus debitis sit");
        res.body[0].should.have.property("url").to.equal("https://via.placeholder.com/600/250289");
        res.body[0].should.have.property("thumbnailUrl").to.equal("https://via.placeholder.com/150/250289");
      done();
      }
    );
  });

  it("GET /photos?title={title}", (done) => {
    chai.request(url.fakeApi)
      .get("/photos?title=nesciunt dolorum consequatur ullam tempore accusamus debitis sit")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property("albumId").to.equal(5);
        res.body[0].should.have.property("id").to.equal(201);
        res.body[0].should.have.property("title").to.equal("nesciunt dolorum consequatur ullam tempore accusamus debitis sit");
        res.body[0].should.have.property("url").to.equal("https://via.placeholder.com/600/250289");
        res.body[0].should.have.property("thumbnailUrl").to.equal("https://via.placeholder.com/150/250289");
      done();
      }
    );
  });

  it("GET /photos?url={url}", (done) => {
    chai.request(url.fakeApi)
      .get("/photos?url=https://via.placeholder.com/600/250289")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property("albumId").to.equal(5);
        res.body[0].should.have.property("id").to.equal(201);
        res.body[0].should.have.property("title").to.equal("nesciunt dolorum consequatur ullam tempore accusamus debitis sit");
        res.body[0].should.have.property("url").to.equal("https://via.placeholder.com/600/250289");
        res.body[0].should.have.property("thumbnailUrl").to.equal("https://via.placeholder.com/150/250289");
      done();
      }
    );
  });

  it("GET /photos?thumbnailUrl={thumbnailUrl}", (done) => {
    chai.request(url.fakeApi)
      .get("/photos?thumbnailUrl=https://via.placeholder.com/150/250289")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.have.property("albumId").to.equal(5);
        res.body[0].should.have.property("id").to.equal(201);
        res.body[0].should.have.property("title").to.equal("nesciunt dolorum consequatur ullam tempore accusamus debitis sit");
        res.body[0].should.have.property("url").to.equal("https://via.placeholder.com/600/250289");
        res.body[0].should.have.property("thumbnailUrl").to.equal("https://via.placeholder.com/150/250289");
      done();
      }
    );
  });
});