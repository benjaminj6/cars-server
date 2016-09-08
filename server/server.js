let express = require('express');
let mongoose = require('mongoose');

let app = express();

app.get('/', function(req, res) {
	res.status(200).json({ message: 'Hello world!' });
});

app.listen(8080, function() {
	console.log('Listening to Express on port 8080');
});

module.exports = app;