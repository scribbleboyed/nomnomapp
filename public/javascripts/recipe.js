var RECIPES = [];
var recipeTemplateOne = _.template('Template One <%= recipe[0].name %>');
var recipeTemplateTwo = _.template('Template Two <%= recipe %>');
var recipesContainer = $('#recipes-container');
var searchBox = $('#search-term');
var allergyBox = $('#allergy-term');
var categoriesMenu = $('.dropdown-recipes');

var queryCollection = [];
var RECIPES = [];

$(document).ready(function() {
	
	// GET ALL RECIPES

	$.get('http://localhost:3000/api/recipes', function(response, status) {
		if (status == 'success') {
			RECIPES = response;
			initPage();
		}
	});

});

// DISPLAY ALL RECIPES
var initPage = function() {

	for (var i=0; i < RECIPES.length; i++ ) {
		queryCollection.push(RECIPES[i]);
	}

	displayRecipes();
};



// EMPTY RECIPES FUNCTION
var emptyRecipes = function() {
	recipesContainer.empty();
	queryCollection = [];
};



// SEARCH FUNCTION
searchBox.keyup(function(e) {

	e.preventDefault();

	var value = searchBox.val().toLowerCase().toString();
	var allergy = allergyBox.val().toLowerCase().toString();
	if (!allergy) {
		searchRecipes(value);
	} else {
		searchRecipesWithoutAllergies(value, allergy);
	}

});



// ALLERGY BOX FUNCTION
allergyBox.keyup(function(e) {
	
	e.preventDefault();

	var value = searchBox.val().toLowerCase().toString();
	var allergy = allergyBox.val().toLowerCase().toString();
	if (value) {
		searchRecipesWithoutAllergies(value, allergy);
	}

	if (!allergy) {
		searchRecipes(value);
	}

});



// PERFORM SEARCH
function searchRecipes(value) {

	emptyRecipes();
		
	RECIPES.forEach (function (recipe) {
		var recipeName = recipe.name.toLowerCase();
		var recipeDescription = recipe.name.toLowerCase();

			if (recipeName.indexOf(value) > -1 || recipeDescription.indexOf(value) > -1) {
				if (queryCollection.indexOf(recipe) < 0) {
					queryCollection.push(recipe);
				}
			}
			recipe.ingredients.forEach(function(ingredient) {
				var ingredientName = ingredient.name.toLowerCase();
				if (ingredientName.indexOf(value) > -1) {
					if (queryCollection.indexOf(recipe) < 0) {
						queryCollection.push(recipe);
					}
				}
			});

	});

	displayRecipes();

}

// PERFORM SEARCH
function searchRecipesWithoutAllergies(value, allergy) {

	emptyRecipes();

	RECIPES.forEach (function (recipe) {
		var recipeName = recipe.name.toLowerCase();
		var recipeDescription = recipe.name.toLowerCase();
			if (recipeName.indexOf(value) > -1 || recipeDescription.indexOf(value) > -1) {
				if (queryCollection.indexOf(recipe) < 0 && !hasAllergy(recipe, allergy)) {
					queryCollection.push(recipe);
				}
			}

	});

	displayRecipes();

}

function searchByCategory(category) {

	emptyRecipes();
		
	RECIPES.forEach(function (recipe) {
		var recipeName = recipe.name.toLowerCase();
		var recipeDescription = recipe.name.toLowerCase();

			recipe.tags.forEach(function(tag) {
				var tagName = tag.toLowerCase();
				if (tagName.indexOf(category) > -1) {
					if (queryCollection.indexOf(recipe) < 0) {
						queryCollection.push(recipe);
					}
				}
			});

	});

	displayRecipes();

}

function hasAllergy(recipe, allergy) {
	var found = false;
	recipe.ingredients.forEach(function(ingredient) {
		var ingredientName = ingredient.name.toLowerCase();
		// console.log("ingredientName: "+ ingredientName);
		// console.log("allergy: " + allergy);
		if (ingredientName.indexOf(allergy) > -1) {
			//console.log(ingredientName + "has allergy" + allergy);
			found =  true;
		}
	});

	return found;
}


// DISPLAY RESULTS
function displayRecipes() {

	// queryCollection.forEach(function(recipe) {
	// 	var processed_url = "http://localhost:3000/recipes/" + recipe.name.replace(/ /g, "_");
	// 	var compiled = recipeTemplate({
	// 	recipe: recipe,
	// 	url: processed_url
	// });
	// 	recipesContainer.hide().append(compiled).fadeIn(200);
	// });

	recipesContainer.hide();

	var template = true;
	var temp = [];
	var count = 0;
	var compiled;

	while (count < queryCollection.length) {

		for (var i = 0; i < 3; i ++) {
			if (queryCollection[count]) {
				temp.push(queryCollection[count]);
				count++;
			}
		}

		if (template) {
			console.log("template one: " + temp);
			compiled = recipeTemplateOne({
				recipe: temp,
			});
			
			recipesContainer.append(compiled);

			template = false;

		} else {
			console.log("template two: " + temp);
			compiled = recipeTemplateTwo({
				recipe: temp,
			});

			recipesContainer.append(compiled);
			
			template = true;
		}

		temp = [];
	}
	recipesContainer.fadeIn(200);
}



// SHOW CATEGORIES FUNCTION

$('.show-categories').click(function(e) {
	e.preventDefault();
	categoriesMenu.slideToggle(200);
});



// CATEGORY CLICK

$('.category').click(function(e) {

	e.preventDefault();
	var value = $(this).attr('id');
	console.log('ID: ' + value);

	searchByCategory(value);

	categoriesMenu.slideToggle(200);
	
});

