var brandsRouter = require('../api/brands/brands.router');

module.exports = function(app) {
	app.use('/brands', brandsRouter);
};
