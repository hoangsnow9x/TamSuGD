var express 	= require('express'),
	bodyParser 	= require('body-parser'),
	path 		= require('path'),
	morgan 		= require('morgan');

var app 	= express(),
	server 	= require('http').Server(app),
	port 	= process.env.PORT || 3007;

// connect mongodb
var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/tamsu';
mongoose.connect(dbUrl, function(err, res){
	if(err){
		console.log("Db connected failed: " + err);
	}else {
		console.log("Db connect success: " + dbUrl);
	}
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// view engine setup
app.set('view engine' , 'pug');
app.set('views', path.join(__dirname +  '/views'));

// include and use routes
var index = require('./routes/index.js');
var admin = require('./routes/admin.js');
app.use('/', index);
app.use('/admin', admin);

// Declare the port
server.listen(port, function(err){
	if(err) throw err
	console.log("Port " + port);
});
