var chai = require('chai');
var chaiHttp = require('chai-http');

var should = chai.should();
var app = require('../../server');

chai.use(chaiHttp);

describe('get requests on /brands', function() {
	it('get request to /brands should return 200 and list of brands', function(done) {
		chai.request(app)
			.get('/brands')
			.end(function(err, res) {
				should.equal(err, null);
				res.should.have.status(200);
				res.should.be.json;
				done();
			});
	});
});


// TODO -- Clear database before each test runs.
// describe('post request to /brands/create', function() {
// 	it('valid request should return 201 and created brand', function(done) {
// 		chai.request(app)
// 			.post('/brands/create')
// 			.send({
// 				name: 'BMW', 
// 				dateEstablished: 1916-03-07,
// 				carModels: [
// 						{	name: 'X1', typeOfCar: 'car'}
// 					]
// 				})
// 			.end(function(err, res) {
// 				should.equal(err, null);
// 				done();
// 			});
// 	});
// });

