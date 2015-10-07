var mongoose = require('mongoose');

var cookbookSchema = mongoose.Schema({
	name: String,
	description: String,
	image_url: String,
	username: {type: String, ref: 'User'},
	recipes: [{type: String, ref: 'Recipe'}],
	tags: [{type: String}]
});

var Cookbook = mongoose.model('Cookbook', cookbookSchema);
module.exports = Cookbook;