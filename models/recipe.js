var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
	name: String,
	description: String,
	video_url: String,
	steps: [{
		title: String,
		instruction: String,
		image_url: String
	}],
	categories: [{type: String, ref: 'Category'}]
});

var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;