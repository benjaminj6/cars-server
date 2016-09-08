// Will be all logic related to handling requests
var Controller = {};

Controller.getAllBrands = function(res) {
	// Will return all brands
	res.status(200).json({ brands: 'BMW, Audi, Honda, Acura, Toyota, Lexus, Tesla'});
};