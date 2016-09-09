var express = require('express');
var router = express.Router();
var controller = require('./brands-controller');

router.get('/', controller.getAllBrands);

router.post('/create', controller.createNewBrand);

module.exports = router;
