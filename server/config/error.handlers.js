let debug = require('debug')('error.handlers.js');

module.exports = function(app) {
	app.use(function(err, req, res, next) {
		if (err) {
			debug('There was an error on the server -- ', err.name + ': ' + err.message);
			res.status(500).json({name: err.name, message: err.message });				
		}
	});
}; 