var mongoose = require('mongoose');

var cookbookSchema = mongoose.Schema({
	name: String,
	user_name: [{type: String, ref: 'User'}],
	recipe_name: [{type: String, ref: 'Recipe'}],
	categories: [{type: String, ref: 'Category'}]
});

var Cookbook = mongoose.model('Cookbook', recipeSchema);
module.exports = Cookbook;