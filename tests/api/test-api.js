var chai = require('chai');
var chaiHttp = require('chai-http');

var should = chai.should();
var app = require('../../server/server');

chai.use(chaiHttp);

describe('Testing initial setup', function() {
	it('get request to / should return 200 & Hello World message', function(done) {
		chai.request(app)
			.get('/')
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.have.property('message');
				done();
			});
	});
});