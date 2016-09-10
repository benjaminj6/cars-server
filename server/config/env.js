var Brands = require('../api/brands/brand.model');

module.exports = function(env) {
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
};