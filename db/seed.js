var User = require('../models/user.js');
var Recipe = require('../models/recipe.js');
var Cookbook = require('../models/cookbook.js');

exports.seedUsers = function seedUsers() {
	User.find({}).exec(function (err, collection) {
		if (collection.length === 0) {

			User.create({
				username: "scribbleboyed",
				email: "scribbleboyed@gmail.com",
				password: "Password1",
				profile: {
					image_url: "http://img3.wikia.nocookie.net/__cb20130513005553/glee/images/5/5f/Bloo.jpg",
					summary: "Professionally Hungry"
				}
			});
			User.create({
				username: "sam",
				email: "sam@a.com",
				password: "1234",
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
				user_name: "scribbleboyed",
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

		}
	});
};

exports.seedCookbooks = function seedCookbooks () {
	
	Cookbook.find({}).exec(function (err, collection) {
		if (collection.length === 0) {

			Cookbook.create({
				name: "Pizza Pizzazz",
				description: "I want to swim in a pool of pizza",
				image_url: "http://media-cdn.tripadvisor.com/media/photo-s/02/8f/3b/1c/happy-herb-pizza.jpg",
				username: "scribbleboyed",
				recipe_ids: [],
				tags: ["pizza"]
			});

			Cookbook.create({
				name: "Snacks",
				description: "What I'm feeling lazy and fat",
				image_url: "http://www.kumandgo.com/content/uploads/2013/05/Donuts.jpg",
				username: "scribbleboyed",
				recipe_ids: [],
				tags: ["snack"]
			});

			Cookbook.create({
				name: "Health Nut",
				description: "So much organic",
				image_url: "http://www.mycity-web.com/wp-content/uploads/2015/04/Healthy_Fruit.jpg",
				username: "scribbleboyed",
				recipe_ids: [],
				tags: ["organic", "healthy"]
			});
		}
	});

};