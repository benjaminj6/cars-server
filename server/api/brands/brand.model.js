var mongoose = require('mongoose');

var carSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String,
		unique: true,
	},
	typeOfCar: {
		required: true,
		enum: ['car', 'truck', 'van', 'SUV', 'racecar'],
		type: String,
	},
	size: {
		required: false,
		enum: ['big', 'medium', 'small'],
		type: String,
	},
	price: {
		type: Number,
		required: false,
	}
});

var BrandSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String,
		unique: true,
	},
	dateEstablished: {
		type: Date,
	},
	carModels: [carSchema],
});

var Brand = mongoose.model('Brand', BrandSchema);

module.exports = Brand;