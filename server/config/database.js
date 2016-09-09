module.exports = process.env.DATABASE_URL || 
								global.DATABASE_URL ||
								(process.env.NODE_ENV === 'production' ? 
								 	'mongodb://localhost/cars-server' : 'mongodb://localhost/cars-server-dev');