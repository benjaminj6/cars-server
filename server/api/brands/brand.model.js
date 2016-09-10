var mongoose = require('mongoose');

var BrandSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String,
		unique: true,
	},
	dateEstablished: {
		type: Date,
	},
});

var Brand = mongoose.model('Brand', BrandSchema);

module.exports = Brand;