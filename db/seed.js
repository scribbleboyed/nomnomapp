var User = require('../models/user.js');
var Recipe = require('../models/recipe.js');
var Cookbook = require('../models/cookbook.js');

exports.seedUsers = function seedUsers() {
	User.find({}).exec(function (err, collection) {
		if (collection.length === 0) {

			User.create({
				username: "Edward",
				email: "edward@ga.com",
				password: "Password1",
				profile: {
					image_url: "http://img3.wikia.nocookie.net/__cb20130513005553/glee/images/5/5f/Bloo.jpg",
					summary: "Professionally Hungry"
				}
			});

			User.create({
				username: "Sam",
				email: "sam@ga.com",
				password: "Password1",
				profile: {
					image_url: "http://img3.wikia.nocookie.net/__cb20130513005553/glee/images/5/5f/Bloo.jpg",
					summary: "Professionally Hungry"
				}
			});

			User.create({
				username: "Aaron",
				email: "aaron@ga.com",
				password: "Password1",
				profile: {
					image_url: "http://img3.wikia.nocookie.net/__cb20130513005553/glee/images/5/5f/Bloo.jpg",
					summary: "Professionally Hungry"
				}
			});

			User.create({
				username: "Christine",
				email: "christine@ga.com",
				password: "Password1",
				profile: {
					image_url: "http://img3.wikia.nocookie.net/__cb20130513005553/glee/images/5/5f/Bloo.jpg",
					summary: "Professionally Hungry"
				}
			});

			User.create({
				username: "Allison",
				email: "allison@ga.com",
				password: "Password1",
				profile: {
					image_url: "http://img3.wikia.nocookie.net/__cb20130513005553/glee/images/5/5f/Bloo.jpg",
					summary: "Professionally Hungry"
				}
			});

			User.create({
				username: "Bianca",
				email: "bianca@ga.com",
				password: "Password1",
				profile: {
					image_url: "http://img3.wikia.nocookie.net/__cb20130513005553/glee/images/5/5f/Bloo.jpg",
					summary: "Professionally Hungry"
				}
			});

			User.create({
				username: "Clair",
				email: "clair@ga.com",
				password: "Password1",
				profile: {
					image_url: "http://img3.wikia.nocookie.net/__cb20130513005553/glee/images/5/5f/Bloo.jpg",
					summary: "Professionally Hungry"
				}
			});

		}
	});
};

exports.seedRecipes = function seedRecipes () {
	Recipe.find({}).exec(function (err, collection) {
		if (collection.length === 0) {

			Recipe.create({
				name: "Pizza Cones",
				description: "Delicious Bite-size pizza served in a cone so it's easy to enjoy on the go!  All you need are the ingredients you already have in your pantry.  Just serve it up and go!",
				user_name: "Edward",
				main_image_url: "http://i.imgur.com/EkiMiVz.webm",
				video_url: "https://www.youtube.com/watch?v=shsY7FwcCnw",
				ingredients: [
					{name: "Refrigerated Classic Pizza Crust", quantity: "1 can (13.8 oz)"},
					{name: "Frozen Cooked Mini Meatballs", quantity: "24"},
					{name: "Pizza Sauce", quantity: "1 jar (14 oz)"},
					{name: "Pepperoni Slices", quantity: "1 package (3.5 oz)"},
					{name: "Green/Yellow Bell Peppers", quantity: "3/4 cup"},
					{name: "Pizza Cheese", quantity: "3/4 cup (3 oz)"}
				],
				prep_time: "30 min",
				cook_time: "10 min",
				serving_size: "12",
				steps: ["Move oven rack to lowest position. Heat oven to 400°F. Wrap 12 (4-oz) paper cone cups with nonstick foil.",
						"Unroll dough on work surface. Using rolling pin, roll dough to 20x15-inch rectangle. Cut into 12 (5-inch) squares. Wrap 1 dough square around each cup; press to seal edges. Trim any excess dough at bottom of each cup.",
						"Place on large cookie sheet, open ends down. Bake on lowest oven rack 8 to 10 minutes or until light golden brown. When cool enough to touch, remove and discard foil-covered paper cones.",
						"Place 1/2 meatball in bottom of each cone. In large bowl, mix 3/4 cup of the pizza sauce, the pepperoni, bell pepper and remaining meatball halves. Microwave uncovered on High 2 to 4 minutes or until hot. Spoon about 1/4 cup of the mixture into each baked cone. Top each cone with about 1 tablespoon cheese. Serve hot with remaining pizza sauce."
				],
				tags: ["pizza", "pepperoni", "cheese", "mozzarella", "quick", "bite"]
			});

			Recipe.create({
				name: "Cheesy Garlic Bread",
				description: "You need this cheesy goodness in your life.",
				user_name: "Sam",
				main_image_url: "http://i.imgur.com/hMSiMNN.webm",
				video_url: "https://www.youtube.com/watch?v=eUgtfnI9NUs",
				ingredients: [
					{name: "Bread Loaf", quantity: "1"},
					{name: "Unsalted Butter", quantity: "2 tbsp"},
					{name: "Cheddar/Pepperjack Cheese", quantity: "8 slices"},
					{name: "Garlic Clove", quantity: "6"}
				],
				prep_time: "20",
				cook_time: "35",
				serving_size: "6-8",
				steps: ["Preheat the oven to 350 degrees.",
						"Line a baking sheet with some aluminum foil and place the loaf of bread in the center. Making sure to cut only 2/3 of the way through the bread.",
						"Stuff the slits in the bread with pieces of cheese.",
						"Melt the butter and mix in the garlic (chopped up).",
						"Using a pastry brush, brush the garlic-butter mixture on top of the loaf of bread.",
						"Bake at 350 degrees F for 20 minutes."],
				tags: ["cheese", "bread", "carbs", "garlic", "cheatday", "potluck", "yaaas", "homemade"]
			});

			Recipe.create({
				name: "Homemade Chipotle Guacamole",
				description: "Holy guacamole!",
				user_name: "Christine",
				main_image_url: "",
				video_url: "https://www.youtube.com/watch?v=dlBGdtC_0ho",
				ingredients: [
					{name: "Ripe Hass Avocados", quantity: "2"},
					{name: "Lime Juice", quantity: "2 tsp"},
					{name: "Cilantro", quantity: "2 tbsp"},
					{name: "Red Onion", quantity: "1/4 cup, finely chopped"},
					{name: "Jalapeno", quantity: "1/2 including seed"},
					{name: "Kosher Salt", quantity: "1/4 tsp"}
				],
				prep_time: "10",
				cook_time: "0",
				serving_size: "6",
				steps: ["Cut the avocados in half and remove the pits (carefully!)",
						"Scoop the avocados and place in a bowl. ",
						"Toss and coat with lime juice.",
						"Add the sale and using a fork or potato masher, mash until a smooth consistency.",
						"Fold in the remaining ingredients and mix well.",
						"Taste the guacamole and adjust seasoning, if necessary."],
				tags: ["chipotle", "homemade", "guacamole", "appetizer", "bbq", "superbowl", "tailgate"]
			});

			// Recipe.create({
			// 	name: "",
			// 	description: "",
			// 	user_name: "",
			// 	main_image_url: "",
			// 	video_url: "",
			// 	ingredients: [
			// 		{name: "", quantity: ""},
			// 		{name: "", quantity: ""},
			// 		{name: "", quantity: ""},
			// 		{name: "", quantity: ""},
			// 		{name: "", quantity: ""},
			// 		{name: "", quantity: ""}
			// 	],
			// 	prep_time: "",
			// 	cook_time: "",
			// 	serving_size: "",
			// 	steps: ["",
			// 			"",
			// 			"",
			// 			""],
			// 	tags: [""]
			// });

		}
	});
};

exports.seedCookbooks = function seedCookbooks () {
	
	Cookbook.find({}).exec(function (err, collection) {
		if (collection.length === 0) {

			Cookbook.create({
				name: "Cheese Me",
				description: "I love cheese",
				image_url: "http://media-cdn.tripadvisor.com/media/photo-s/02/8f/3b/1c/happy-herb-pizza.jpg",
				username: "Edward",
				recipes: ["Pizza Cones", "Cheesy Garlic Bread"],
				tags: ["pizza", "cheese"]
			});

			Cookbook.create({
				name: "Snacks",
				description: "What I'm feeling lazy and fat",
				image_url: "http://www.kumandgo.com/content/uploads/2013/05/Donuts.jpg",
				username: "scribbleboyed",
				recipes: [],
				tags: ["snack"]
			});

			Cookbook.create({
				name: "Health Nut",
				description: "So much organic",
				image_url: "http://www.mycity-web.com/wp-content/uploads/2015/04/Healthy_Fruit.jpg",
				username: "scribbleboyed",
				recipes: [],
				tags: ["organic", "healthy"]
			});
		}
	});

};