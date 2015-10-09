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
				username: "Claire",
				email: "claire@ga.com",
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
				name: "French Toast Grilled Cheese",
				description: "The perfect marriage of breakfast and lunch.",
				user_name: "Claire",
				main_image_url: "http://i.imgur.com/R8n31qV.webm",
				video_url: "https://www.youtube.com/watch?v=qwHXPD4fzSE",
				ingredients: [
					{name: "Bacon", quantity: "1 strip"},
					{name: "Maple Syrup", quantity: ""},
					{name: "Eggs", quantity: "2"},
					{name: "Milk", quantity: "1 cup"},
					{name: "Ground Cinnamon", quantity: "1 tsp"},
					{name: "Bread (of your choice)", quantity: "2 slices"},
					{name: "Shredded Cheddar Cheese", quantity: "1/2 cup"}
				],
				prep_time: "5 min",
				cook_time: "5 min",
				serving_size: "1-2",
				steps: ["Chop up a strip of bacon into pieces and fry them in a pan.",
						"Put the bacon pieces into a small bowl and mix in some maple syrup.",
						"Grab a medium bowl and crack two eggs. Proceed to mix in the milk and cinnamon.",
						"Use this mixture to dip only one side of each slice of bread and fry both slices until golden brown. Then, flip to cook the other side.",
						"Place both slices on a plate and spread cheddar cheese in between, golden brown sides on the inside.",
						"Re-dip the plain sides back into the mixture and fry those sides on the pan.",
						"Cut the sandwich in half and serve with bacon-maple syrup."],
				tags: ["bacon", "syrup", "grilled cheese", "cheese", "french toast", "breakfast", "lunch", "brunch"]
			});

			Recipe.create({
				name: "Breakfast pizza",
				description: "The breakfast you'll definitely want to wake up to",
				user_name: "Aaron",
				main_image_url: "http://i.imgur.com/tDqok23.webm",
				video_url: "https://www.youtube.com/watch?v=zj-rb408du8",
				ingredients: [
					{name: "Olive Oil", quantity: "5 tsp"},
					{name: "Shredded Cheddar Cheese", quantity: "2 oz"},
					{name: "Cooked Bacon Pieces", quantity: "2 oz"},
					{name: "Eggs", quantity: "3"},
					{name: "Freshly Chopped Chives", quantity: "2"},
					{name: "Freshly Ground Black Pepper", quantity: "1 dash"}
				],
				prep_time: "30 min",
				cook_time: "10 min",
				serving_size: "4",
				steps: ["Preheat the oven to 450 degrees F / 232 degrees C.",
						"Roll out your pizza dough (homemade or store bought).",
						"Drizzle olive oil.",
						"Spread cheddar cheese, bacon, and hash browns on as toppings.",
						"Crack three eggs and some black pepper on top in the center.",
						"Bake the pizza for 10-12 minutes, or until the eggs are cooked to your preference."],
				tags: ["pizza", "breakfast", "breakfastallday", "runnyyolk", "homemade"]
			});

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
				tags: ["pizza", "pepperoni", "cheese", "mozzarella", "quick", "bite", "appetizers", "sides"]
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
				prep_time: "20 min",
				cook_time: "35 min",
				serving_size: "6-8",
				steps: ["Preheat the oven to 350 degrees.",
						"Line a baking sheet with some aluminum foil and place the loaf of bread in the center. Making sure to cut only 2/3 of the way through the bread.",
						"Stuff the slits in the bread with pieces of cheese.",
						"Melt the butter and mix in the garlic (chopped up).",
						"Using a pastry brush, brush the garlic-butter mixture on top of the loaf of bread.",
						"Bake at 350 degrees F for 20 minutes."],
				tags: ["cheese", "bread", "carbs", "garlic", "cheatday", "potluck", "yaaas", "homemade", "appetizer", "sides"]
			});

			Recipe.create({
				name: "Homemade Chipotle Guacamole",
				description: "Holy guacamole!",
				user_name: "Christine",
				main_image_url: "http://i.imgur.com/fPKIEqq.webm",
				video_url: "https://www.youtube.com/watch?v=dlBGdtC_0ho",
				ingredients: [
					{name: "Ripe Hass Avocados", quantity: "2"},
					{name: "Lime Juice", quantity: "2 tsp"},
					{name: "Cilantro", quantity: "2 tbsp"},
					{name: "Red Onion", quantity: "1/4 cup, finely chopped"},
					{name: "Jalapeno", quantity: "1/2 including seed"},
					{name: "Kosher Salt", quantity: "1/4 tsp"}
				],
				prep_time: "10 min",
				cook_time: "N/A",
				serving_size: "6",
				steps: ["Cut the avocados in half and remove the pits (carefully!)",
						"Scoop the avocados and place in a bowl. ",
						"Toss and coat with lime juice.",
						"Add the sale and using a fork or potato masher, mash until a smooth consistency.",
						"Fold in the remaining ingredients and mix well.",
						"Taste the guacamole and adjust seasoning, if necessary."],
				tags: ["chipotle", "homemade", "guacamole", "appetizer", "bbq", "superbowl", "tailgate"]
			});

			Recipe.create({
				name: "Mac N' Cheese BLT",
				description: "Mac 'n' cheese like you wouldn't believe",
				user_name: "Allison",
				main_image_url: "http://i.imgur.com/rGa9QQB.webm",
				video_url: "https://www.youtube.com/watch?v=tL159_eM6Y0",
				ingredients: [
					{name: "Macaroni Pasta", quantity: "2 cups"},
					{name: "Butter", quantity: "2 tbsp"},
					{name: "Flour", quantity: "1 1/4 tbsp"},
					{name: "Milk", quantity: "1 cup"},
					{name: "Cheddar Cheese", quantity: "2 cups"},
					{name: "Bacon", quantity: "4-5 strips"},
					{name: "Tomato", quantity: "1 slice"},
					{name: "Mayo", quantity: "optional"}
				],
				prep_time: "15 min",
				cook_time: "15 min",
				serving_size: "1-2",
				steps: ["Cook mac 'n' cheese pasta.",
						"Melt down butter in a pot and then mix in the flour.",
						"Pour in milk little by little into the pot and continue to stir.",
						"Throw in the cheddar cheese and stir until the cheese melts.",
						"Pour cheese concoction onto pasta and spread all of this mixture into a baking pan evenly.",
						"Refrigerate mac ‘n’ cheese for one hour and in the meantime, cook your bacon strips.",
						"Once the bacon strips are cooked, take the mac ‘n’ cheese out of the refrigerator and cut it evenly in 4 squares.",
						"Fry up the mac ‘n’ cheese squares to solidify mixture into buns.",
						"Layer ingredients like a sandwich and enjoy!",],
				tags: ["macaroni", "cheese", "milky", "creamy", "pasta", "lunch", "entrees"]
			});

			Recipe.create({
				name: "No-Bake Peanut Butter Pie",
				description: "A peanut butter lover’s dream come true.",
				user_name: "Bianca",
				main_image_url: "http://i.imgur.com/PaKlmIs.webm",
				video_url: "https://www.youtube.com/watch?v=q4b98DfUY9w",
				ingredients: [
					{name: "Graham Crackers (crumbled)", quantity: "10 oz"},
					{name: "Granulated Sugar", quantity: "1/4 cup"},
					{name: "Butter", quantity: "1 cup"},
					{name: "Peanut Butter", quantity: "3/4 cup"},
					{name: "Cream Cheese", quantity: "4 oz"},
					{name: "Whipped Cream", quantity: "8 oz"},
					{name: "Powdered Sugar", quantity: "1 cup"}
				],
				prep_time: "5-10 min",
				cook_time: "1-2 hours",
				serving_size: "4-6",
				steps: ["To make the crust, pour out crumbled graham crackers, sugar, and melted butter into a med-large bowl. Mix thoroughly. Then, transfer mixture into a pie pan and press it along the bottom and sides. Set the crust aside in the refrigerator.",
						"To make the filling, combine peanut butter, cream cheese, whipped cream, and powdered sugar. Mix thoroughly with a mixer or fold until mixed.",
						"Scoop the filling into the crust and refrigerate once again for 1-2 hours.",
						"Serve with your choice of topping. We suggest whipped cream!"],
				tags: ["dessert", "easypeasy", "nobake", "homemade", "peanut butter", "pie"]
			});

			Recipe.create({
				name: "3-Ingredient Ice Cream Birthday Cake",
				description: "We all scream for ice cream… and cake!",
				user_name: "Sam",
				main_image_url: "http://i.imgur.com/FAxIzSC.webm",
				video_url: "https://www.youtube.com/watch?v=Ag2qCzZ5rwM",
				ingredients: [
					{name: "Oil or Melted Butter", quantity: ""},
					{name: "Flour (self-rising)", quantity: "3 cups"},
					{name: "Birthday Cake Ice Cream", quantity: "1.5 qts"}
				],
				prep_time: "5 min",
				cook_time: "35-40 min",
				serving_size: "4-6",
				steps: ["Preheat the oven to 350 degrees F / 177 degrees C.",
						"Grease bundt pan with butter or oil.",
						"Add flour and ice cream into a separate bowl. Mix thoroughly with a mixer or whisk.",
						"Sprinkle the bottom of the bundt pan and pour mixture on top.",
						"Bake for 35-40 minutes."],
				tags: ["birthday cake", "cakecakecake", "desserts", "icecream", "homemade", "nom", "3ingredients"]
			});

			Recipe.create({
				name: "Nutella and Coffee Milkshake",
				description: "Nutella AND Coffee?! What more could you ask for?",
				user_name: "Aaron",
				main_image_url: "http://i.imgur.com/5XKTUll.webm",
				video_url: "https://www.youtube.com/watch?v=msrSkTtLqgo",
				ingredients: [
					{name: "Vanilla Ice Cream", quantity: "2 cups"},
					{name: "Coffee", quantity: "1/4 cup"},
					{name: "Nutella", quantity: "2 tbsp"}
				],
				prep_time: "3 min",
				cook_time: "N/A",
				serving_size: "1",
				steps: ["Combine vanilla ice cream, coffee, and Nutella in a blender.",
						"Pour into a cup and add more ice cream, as desired.",
						"Enjoy!"],
				tags: ["ice cream", "nutella", "coffee", "milkshake", "mymilkshakebringsalltheboystotheyard", "win", "nom", "homemade", "beverages"]
			});

			Recipe.create({
				name: "Avocado Egg Hack",
				description: "One eggcellent way to eat an avocado!",
				user_name: "Edward",
				main_image_url: "http://i.imgur.com/hAnRlS4.webm",
				video_url: "https://www.youtube.com/watch?v=gYaeAvLN9Qc",
				ingredients: [
					{name: "Avocados", quantity: "2"},
					{name: "", quantity: ""},
					{name: "", quantity: ""},
					{name: "", quantity: ""},
					{name: "", quantity: ""},
					{name: "", quantity: ""}
				],
				prep_time: "3 min",
				cook_time: "15-20 min",
				serving_size: "",
				steps: ["Preheat oven to 425 degrees F.",
						"Slice the avocados in half (carefully), and take out the pit. Scoop out about two tablespoons of flesh from the center of the avocado, just enough so the egg will fit snugly in the center.",
						"Crack an egg into each avocado half. Try your best to crack the yolk in first, and then let the egg whites spill in to fill up the rest of the shell.",
						"Place in the oven and bake for 15 to 20 minutes. Cooking time will depend on the size of your eggs and avocados. Just make sure the egg whites have enough time to set.",
						"Remove from oven, season with pepper, chives, and garnish with other toppings of your choice (chives)."],
				tags: ["breakfast", "avocado", "egg", "runnyyolk", "nom", "homemade", "brunch", "sides"]
			});

			Recipe.create({
				name: "Whisky Lemonade",
				description: "When life hands you lemons, slice it up and add a kick!",
				user_name: "Edward",
				main_image_url: "http://i.imgur.com/5Kk7YJy.webm",
				video_url: "https://www.youtube.com/watch?v=gkjFqe5SRJ0",
				ingredients: [
					{name: "Lemon Juice", quantity: "3 tbsp"},
					{name: "Lemon Wedges", quantity: ""},
					{name: "Honey Whiskey", quantity: "2 shots"},
					{name: "Simple Syrup", quantity: "2 tbsp"},
					{name: "Ice", quantity: "1/2 cup"}
				],
				prep_time: "1 min",
				cook_time: "N/A",
				serving_size: "1",
				steps: ["Rim cocktail cup with lemon juice and dip the rim in a small dish of sugar.",
						"Pour lemon juice, honey whiskey, simple syrup, and lemon wedges into the cup with ice.",
						"Stir it up and enjoy. Cheers!"],
				tags: ["beverages", "booze", "happyhour", "whiskey", "honey", "southern", "cocktails"]
			});

			Recipe.create({
				name: "Bourbon Peach Sweet Tea",
				description: "Ain’t you sweeter than peaches!",
				user_name: "Sam",
				main_image_url: "http://i.imgur.com/ONBjW0q.webm",
				video_url: "https://www.youtube.com/watch?v=gkjFqe5SRJ0",
				ingredients: [
					{name: "Sweet Tea", quantity: "1 cup"},
					{name: "Bourbon", quantity: "1 shot"},
					{name: "Peach Slices", quantity: "5"},
					{name: "Ice", quantity: "1/2 cup"}
				],
				prep_time: "1 min",
				cook_time: "N/A",
				serving_size: "1",
				steps: ["Rim cocktail cup with peach slice and dip the rim in a small dish of sugar.",
						"Combine sweet tea, bourbon, simple syrup, and peach slices into the cup with ice.",
						"Stir it up and enjoy. Cheers!"],
				tags: ["beverages", "booze", "peaches", "sweettea", "southern", "happyhour", "bourbon", "whiskey", "cocktails"]
			});

			Recipe.create({
				name: "3-Ingredient Dole Whip",
				description: "And you don’t even have to go to Disneyland.",
				user_name: "Christine",
				main_image_url: "http://i.imgur.com/f3BmUzR.webm",
				video_url: "https://www.youtube.com/watch?v=Rn2lXzhQeaU",
				ingredients: [
					{name: "Coconut Milk", quantity: "1/2 cup"},
					{name: "Sweetened Condensed Milk", quantity: "1/2 cup"},
					{name: "Frozen Pineapple", quantity: "4 cups"}
				],
				prep_time: "N/A",
				cook_time: "5 min",
				serving_size: "3-4",
				steps: ["Add coconut milk, sweetened condensed milk, and frozen pineapples into a blender and mix.",
						"Open up blender and stir with spoon to even out mixture.",
						"Blend again and serve."],
				tags: ["dole whip", "homemade", "dessert", "summer", "pineapple", "nom"]
			});

			Recipe.create({
				name: "Frozen Mint Julep",
				description: "You’re the mint to my julep!",
				user_name: "Christine",
				main_image_url: "http://i.imgur.com/IYuNGGD.webm",
				video_url: "https://www.youtube.com/watch?v=gkjFqe5SRJ0",
				ingredients: [
					{name: "Mint Leaves", quantity: "8"},
					{name: "Bourbon", quantity: "2 shots"},
					{name: "Lemon Juice", quantity: "2 1/2 tbsp"},
					{name: "Simple Syrup", quantity: "1 1/2 tsp"},
					{name: "Ice", quantity: ""}
				],
				prep_time: "3 min",
				cook_time: "N/A",
				serving_size: "1",
				steps: ["Rim cocktail cup with lemon juice and dip the rim in a small dish of sugar.",
						"Mix mint leaves, bourbon, lemon juice, simple syrup, and ice in a blender thoroughly.",
						"Pour it out and garnish with a mint leaf. Cheers!"],
				tags: ["beverages", "booze", "southern", "happyhour", "mintjulep", "whiskey", "bourbon"]
			});

			Recipe.create({
				name: "Strawberry Whiskey Sour",
				description: "Sweet and sour with a kick!",
				user_name: "Allison",
				main_image_url: "http://i.imgur.com/YHSxRdq.webm",
				video_url: "https://www.youtube.com/watch?v=gkjFqe5SRJ0",
				ingredients: [
					{name: "Strawberries", quantity: "4"},
					{name: "Bourbon", quantity: "2 shots"},
					{name: "Lemon Juice", quantity: "4 tbsp"},
					{name: "Simple Syrup", quantity: "4 tbsp"},
					{name: "Ice", quantity: "1/2 cup"}
				],
				prep_time: "3 min",
				cook_time: "N/A",
				serving_size: "1",
				steps: ["Rim cocktail cup with a strawberry slice and dip the rim in a small dish of sugar.",
						"Mix strawberries, bourbon, lemon juice, simple syrup, and ice in a blender thoroughly.",
						"Pour it out and garnish with a strawberry along the rim.  Cheers!"],
				tags: ["beverages", "booze", "fruits", "whiskey", "southern", "happyhour", "bourbon"]
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
				username: "Edward",
				recipes: [],
				tags: ["snack"]
			});

			Cookbook.create({
				name: "Health Nut",
				description: "So much organic",
				image_url: "http://www.mycity-web.com/wp-content/uploads/2015/04/Healthy_Fruit.jpg",
				username: "Sam",
				recipes: [],
				tags: ["organic", "healthy"]
			});

		}
	});

};