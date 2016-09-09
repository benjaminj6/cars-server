var DATABASE_URL;
var PORT;

switch(process.env.NODE_ENV) {
	case 'development':
		DATABASE_URL = 'mongodb://localhost/cars-server-dev';
		PORT = 3000;
		break;
	case 'test':
		DATABASE_URL = 'mongodb://localhost/cars-server-test';
		PORT = 5000;
		break;
	default: 
		DATABASE_URL = 'mongodb://localhost/cars-server';
		PORT = 8080;
}	


module.exports = {
	DATABASE_URL: DATABASE_URL,
	PORT: PORT,
}
