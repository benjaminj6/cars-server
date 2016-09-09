let express = require('express');
let mongoose = require('mongoose');
let databaseURL = require('./config/database');

let app = express();

var env = process.env;

switch (env.NODE_ENV) {
	case 'development':
		env.PORT = 5000;
		env.DATABASE_URL = 'mongodb://localhost/cars-server-dev';
		break;
	case 'testing':
		env.PORT = 3000;
		env.DATABASE_URL = 'mongodb://localhost/cars-server-test';
		break;
	default:
		env.NODE_ENV = 'production';
		env.PORT = 8080;
		env.DATABASE_URL = 'mongodb://localhost/cars-server';
}


require('./config/middleware-express')(app);
require('./config/routes-express')(app);

mongoose.connect(env.DATABASE_URL, function() {
	console.log('Connected to Database -- ' + env.DATABASE_URL);
});

app.listen(env.PORT, function() {
	console.log('Listening to Express on port ' + env.PORT  + ' in ' + env.NODE_ENV + ' mode');
});

module.exports = app;