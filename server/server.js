let debug = require('debug')('express:server');

let express = require('express');
let mongoose = require('mongoose');

let app = express();

require('./config/env')(process.env);
require('./config/middleware.express')(app);
require('./config/routes.express')(app);

require('./config/error.handlers')(app);

mongoose.connect(process.env.DATABASE_URL, function() {
	debug('Connected to MongoDB -- ' + process.env.DATABASE_URL);
});

app.listen(process.env.PORT, function() {
	debug('Listening to Express on port ' + process.env.PORT  + ' in ' + process.env.NODE_ENV + ' mode');
});

module.exports = app;