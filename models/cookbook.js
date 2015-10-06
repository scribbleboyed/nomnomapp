var mongoose = require('mongoose');

var cookbookSchema = mongoose.Schema({
	name: String,
	description: String,
	image_url: String,
	user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	recipe_ids: [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}],
	categories: [{type: String, ref: 'Category'}],
	tags: [{type: String}]
});

var Cookbook = mongoose.model('Cookbook', cookbookSchema);
module.exports = Cookbook;