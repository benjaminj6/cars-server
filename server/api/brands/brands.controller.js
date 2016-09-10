var Brand = require('./brand.model');

var Controller = {};


// TODO -- update this to work with Mongoose data. 
Controller.getAllBrands = function(req, res, next) {
	Brand.find({}, function(err, brands) {
		if (err) {
			res.status(200).json(brands);
		} else {
			res.status(200).json(brands);
		}
	})
};

Controller.createNewBrand = function(req, res, next) {

	var newBrand = {
		name: req.body.name,
		dateEstablished: req.body.dateEstablished,
	};

	Brand.create(newBrand, function(err, brand) {
		if (err) {
			return next(err);
		} else {
			res.status(201).json(brand);
		}
	});
};

// removeBrand

// update Brand
	// Add car to Brand
	// remove car from Brand
	// 

module.exports = Controller;