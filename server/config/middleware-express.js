var bodyParser = require('body-parser');

module.exports = function(app) {
	
	app.use(bodyParser.json());
	// app.use(function(err, req, res, next) {
	// 	console.log(err.stack);
	// 	res.status(500).json(err);	
	// });
};