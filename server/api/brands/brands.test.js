let debug = require('debug')('brands.test.js');

var chai = require('chai');
var chaiHttp = require('chai-http');

var should = chai.should();
var app = require('../../server');
var Brands = require('./brand.model');

chai.use(chaiHttp);

beforeEach(function() {
	Brands.remove({}, function() {
		Brands.create({name: 'BMW', dateEstablished: 1917-16-03}, {name: 'Acura', dateEstablished: 1968});
		debug('database cleared and items created');
	});
});

describe('get requests on /brands', function() {
	it('get request to /brands should return 200 and list of brands', function(done) {
		chaiRequest('get', '/brands')
			.end(function(err, res) {
				should.equal(err, null);
				res.should.have.status(200);
				res.should.be.json;
				done();
			});
	});

	it('get request to /brandzzzz should return 404 Error', function(done) {
		chaiRequest('get', '/brandzzzzzz')
			.end(function(err, res) {
				err.should.have.status(404);
				done();
			});
	});

});

function chaiRequest(operation, endpoint, request) {
	return chai.request(app)[operation](endpoint)
}

describe('post request to /brands/create', function() {

	it('valid request should return 201 and created brand', function(done) {
		postToValidEndpoint()
			.send({
				name: 'Honda', 
				dateEstablished: 1916-03-07,
			})
			.end(function(err, res) {
				should.equal(err, null);
				res.should.have.status(201);
				res.body.name.should.equal('Honda');
				res.body.should.have.property('dateEstablished');
				done();
			});
	});

	function postToValidEndpoint() {
		return chaiRequest('post', '/brands/create');
	}

	it('request without the dateEstablished property should return 201 and brand', function(done) {
		postToValidEndpoint()
			.send({name: 'Audi'})
			.end(function(err, res) {
				should.equal(err, null);
				res.should.have.status(201);
				res.should.be.json;
				res.body.name.should.equal('Audi');
				res.body.should.not.have.property('dateEstablished');
				done();
			});
	});

	it('invalid JSON should return 500 Error', test500Error('ajsdjflkasdjf'));

	function test500Error(req, testsCallback) {
		return function(done) {
			postToValidEndpoint()
				.send(req)
				.end(function(err, res) {
					
					if (!err) {
						debug('the error response did not throw an error', res.body);
					}

					err.should.have.status(500);
					err.should.have.property('name');
					res.body.should.have.property('name');
					res.body.should.have.property('message');
					done();
				});
		};
	}

	it('duplicate name should return 500 Error', test500Error({name: 'BMW', dateEstablished: 1950-04-05}));
	it('request without name property should return 500 Error', test500Error({title: 'Land Rover', dateEstablished: 1950-05-09}));
	it('request with empty string as name property should return 500 Error', test500Error({name: '', dateEstablished: 1950-09-08}));
	it('request with a non-string as name property should return 500 Error', test500Error({name: {name: 'this'}, dateEstablished: 1098-30-02}));
	it('request with a non-Date as the dateEstablished property should return 500 Error', test500Error({name: 'Audi', dateEstablished: 'alsdjflasd'}));
});

