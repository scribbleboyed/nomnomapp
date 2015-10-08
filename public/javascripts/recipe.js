var RECIPES = [];
var recipeTemplate = _.template('<a href="<%= url %>"><div class="single-recipe"><div class="row"><div class="col-lg-8"><div class="videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe.main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div></div><div class="col-lg-4" style="padding: 0px 20px 10px 20px;"><h1><%= recipe.name %></h1><h2 id="recipe-index-description"><%= recipe.description %></h2><br/><p>Prep Time: <%= recipe.prep_time %> min</p><p>Cook Time: <%= recipe.cook_time %> min</p></div></div></div></a>');

$(document).ready(function() {
	// Get all the recipes in the DB
	$.get('http://localhost:3000/api/recipes', function(response, status) {
		if (status == 'success') {
			RECIPES = response;
			initPage();
		}
	});

	// Appened recipes based on search/filter results
	var initPage = function() {
		var recipesContainer = $('#recipes-container');

		var emptyRecipes = function() {
			recipesContainer.empty();
		};

		RECIPES.forEach(function(recipe) {
			var processed_url = "http://localhost:3000/recipes/" + recipe.name.replace(/ /g, "_");
			var compiled = recipeTemplate({
				recipe: recipe,
				url: processed_url
			});
			recipesContainer.append(compiled);
		});

		$('#search-button').click(function(e) {

			e.preventDefault();
			var value = $('#search-term').val().toLowerCase().toString();
			var allergy = $('#allergy-term').val().toLowerCase().toString();
			console.log(value);
			console.log(allergy);
			emptyRecipes();

			var resultRecipes = RECIPES;

			var queryCollection = [];
			
			resultRecipes.forEach (function (recipe) {
				var resultIngredients = recipe.ingredients;

			
				resultIngredients.forEach(function(ingredient) {
					var ingredientName = ingredient.name.toLowerCase();
					console.log("Ingredient: " + ingredientName);
					if (!allergy) {
						if (ingredientName.indexOf(value) > -1) {
							if (queryCollection.indexOf(recipe) == -1) {
								queryCollection.push(recipe);
							}
						}
					} else {
						if ((ingredientName.indexOf(value) > -1) && (ingredientName.indexOf(allergy) < -1)) {
							if (queryCollection.indexOf(recipe) == -1) {
								queryCollection.push(recipe);
							}
						}
					}
				});
			});

			queryCollection.forEach(function(recipe) {
				console.log("recipe: " + recipe);
				var processed_url = "http://localhost:3000/recipes/" + recipe.name.replace(/ /g, "_");
				var compiled = recipeTemplate({
				recipe: recipe,
				url: processed_url
			});
				recipesContainer.append(compiled);
			});
		});

		$('.top-recipe').click(function(e) {

			e.preventDefault();
			var value = $(this).attr('id');
			console.log('ID: ' + value);
			emptyRecipes();

			var resultRecipes = RECIPES;

			var queryCollection = [];
				
			resultRecipes.forEach (function (recipe) {
				var resultIngredients = recipe.ingredients;

				resultIngredients.forEach(function(ingredient) {
					var ingredientName = ingredient.name.toLowerCase();
					console.log("Ingredient: " + ingredientName);
					if (ingredientName.indexOf(value) > -1) {
						if (queryCollection.indexOf(recipe) == -1) {
							queryCollection.push(recipe);
						}
					}
				});
			});

			queryCollection.forEach(function(recipe) {
				console.log("recipe: " + recipe);
				var processed_url = "http://localhost:3000/recipes/" + recipe.name.replace(/ /g, "_");
				var compiled = recipeTemplate({
				recipe: recipe,
				url: processed_url
			});
				recipesContainer.append(compiled);
			});
		});
	};
});
