var supertest = require('supertest');
var should = require('should');

const server = supertest.agent('localhost:8080')

describe('testing REST api', () => {
  it('test GET', (done) => {
    server
    .get('/add?x=365&y=235')
    .expect('Content-type', /json/)
    .expect(200).
    end((err, res) => {
      res.status.should.equal(200) // assert
      console.log(res.body)
      res.body.should.equal(600)
      done();
    })
  })
  it('testing POST', function(done) {
    server
    .post('/add_post')
    .send({x : 15, y : 40})
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      res.status.should.equal(201);
      res.body.should.equal(55);
      done();
    })
  })
});