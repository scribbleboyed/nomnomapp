var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
	name: String,
	user_name: [{type: String, ref: 'User'}],
	description: String,
	video_url: String,
	ingredients: [{
		name: String,
		serving_size: String
	}],
	prep_time: String,
	cook_time: String,
	steps: [{
		instruction: String,
		image_url: String
	}],
	categories: [{type: String, ref: 'Category'}]
});

var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;