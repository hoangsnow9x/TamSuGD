var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');
// var CategorySchema = new mongoose.Schema({
// 	title: {type:String, default: ""},
// 	code: {type:String, default: ""},
// 	timestamp: {type: Date, default: Date.now}
// });
 

CategorySchema = mongoose.Schema({
    _id: Number,
   	title: {type:String, default: ""},
	code: {type:String, default: ""},
	created: {type: Date, default: ""},
	updated: {type: Date, default: ""}
}, { _id: false });
CategorySchema.plugin(AutoIncrement);


module.exports = mongoose.model('category', CategorySchema);
