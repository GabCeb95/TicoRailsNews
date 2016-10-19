/*
* News Model
*/

var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
	title:{type:String,require: true},
	date: Date,
	text: String,
	source: String
},{collection:'news'});

var NewsItem = mongoose.model('NewsItem',newsSchema);

module.exports = NewsItem;