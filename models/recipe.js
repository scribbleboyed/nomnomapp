var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
	name: String,
	description: String,
	user_name: {type: String, ref: 'User'},
	main_image_url: String,
	video_url: String,
	ingredients: [{
		name: String,
		quantity: String
	}],
	prep_time: String,
	cook_time: String,
	serving_size: String,
	steps: [{type: String}],
	tags: [{type: String}]
});

var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;