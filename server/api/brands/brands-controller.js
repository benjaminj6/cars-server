var Brand = require('./brand.model');

var Controller = {};


// TODO -- update this to work with Mongoose data. 
Controller.getAllBrands = function(req, res) {
	Brand.find({}, function(err, brands) {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json(brands);
		}
	})
};

Controller.createNewBrand = function(req, res) {
	var newBrand = {
		name: req.body.name,
		dateEstablished: req.body.date,
		carModels: req.body.carModels
	};

	Brand.create(newBrand, function(err, brand) {
		if (err) {
			res.status(500).json(err);
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