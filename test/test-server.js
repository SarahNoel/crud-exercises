process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../server/app');
var Exercise = mongoose.model('exercises');

var should = chai.should();
chai.use(chaiHttp);


describe('Exercises', function() {

  Exercise.collection.drop();

  beforeEach(function(done){
    var newExercise = new Exercise({
      name: 'Practice',
      description: "Learning JS",
      tags: ["javascript"]
    });
    newExercise.save(function(err) {
      done();
    });
  });
  afterEach(function(done){
    Exercise.collection.drop();
    done();
  });

  it('should list ALL exercises on /exercises GET', function(done) {
    chai.request(server)
      .get('/api/v1/exercises')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('description');
        res.body[0].should.have.property('tags');
        res.body[0].name.should.equal('Practice');
        res.body[0].description.should.equal('Learning JS');
        res.body[0].tags[0].should.equal('javascript');

        done();
      });
  });

  it('should list a SINGLE exercise on /exercise/<id> GET', function(done) {
      var newExercise = new Exercise({
      name: 'Practice',
      description: "Learning JS",
      tags: ["javascript"]
    });
      newExercise.save(function(err, data) {
        chai.request(server)
          .get('/api/v1/exercise/'+data.id)
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('_id');
            res.body.should.have.property('name');
            res.body.should.have.property('description');
            res.body.should.have.property('tags');
            res.body.name.should.equal('Practice');
            res.body.description.should.equal('Learning JS');
            res.body.tags[0].should.equal('javascript');
            res.body._id.should.equal(data.id);
            done();
          });
      });
  });

  it('should add a SINGLE exercise on /exercises POST', function(done) {
    chai.request(server)
      .post('/api/v1/exercises')
      .send({'name': 'Practice', 'description': "Learning JS", 'tags': ["javascript"]})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('name');
        res.body.SUCCESS.should.have.property('description');
        res.body.SUCCESS.should.have.property('tags');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.name.should.equal('Practice');
        res.body.SUCCESS.description.should.equal('Learning JS');
        res.body.SUCCESS.tags[0].should.equal('javascript');
        done();
      });
  });

  it('should update a SINGLE exercise on /exercise/<id> PUT', function(done) {
    chai.request(server)
      .get('/api/v1/exercises')
      .end(function(err, res){
        chai.request(server)
          .put('/api/v1/exercise/'+res.body[0]._id)
          .send({'name': 'Extra Practice'})
          .end(function(error, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('UPDATED');
            res.body.UPDATED.should.be.a('object');
            res.body.UPDATED.should.have.property('name');
            res.body.UPDATED.should.have.property('description');
            res.body.UPDATED.should.have.property('tags');
            res.body.UPDATED.should.have.property('_id');
            res.body.UPDATED.name.should.equal('Extra Practice');
            done();
        });
      });
  });

  it('should delete a SINGLE exercise on /exercise/<id> DELETE', function(done) {
    chai.request(server)
      .get('/api/v1/exercises')
      .end(function(err, res){
        chai.request(server)
          .delete('/api/v1/exercise/'+res.body[0]._id)
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('REMOVED');
            response.body.REMOVED.should.be.a('object');
            response.body.REMOVED.should.have.property('name');
            response.body.REMOVED.should.have.property('description');
            response.body.REMOVED.should.have.property('tags');
            response.body.REMOVED.name.should.equal('Practice');
            done();
        });
      });
  });

});
