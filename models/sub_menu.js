var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
	title: {type:String, default: ""},
	category: {type:String, default: ""},
	code: {type:String, default: ""},
	created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('submenu', CategorySchema);