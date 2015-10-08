var RECIPES = [];
var recipeTemplateOne = _.template('<div id="all-videos-container"><div id="big-video-container"><a href="<%= url %>"><div class="single-recipe"><div class="row"><div class="col-lg-8"><div class="videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe[0].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div></div><div class="videoOverlay" id="big-videoOverlay"><h1 id="big-video-title"><%= recipe.name %></h1><h2 id="big-video-description"><%= recipe.description %></h2><h2 id="big-video-prep_time"><%= recipe.prep_time %> min</h2><h2 id="big-video-cook_time"><%= recipe.prep_time %> min</h2></div></div></div></a></div><div id="small-video-top-container"><a href="<%= url %>"><div class="small-video"><div class="row"><div class="col-lg-8"><div class="videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe.main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="big-videoOverlay"><h1 id="big-video-title"><%= recipe.name %></h1><h2 id="big-video-description"><%= recipe.description %></h2><h2 id="big-video-prep_time"><%= recipe.prep_time %> min</h2><h2 id="big-video-cook_time"><%= recipe.prep_time %> min</h2></div></div></div></div></a></div><div id="small-video-bot-container"><a href="<%= url %>"><div class="small-video"><div class="row"><div class="col-lg-8"><div class="videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe.main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="big-videoOverlay"><h1 id="big-video-title"><%= recipe.name %></h1><h2 id="big-video-description"><%= recipe.description %></h2><h2 id="big-video-prep_time"><%= recipe.prep_time %> min</h2><h2 id="big-video-cook_time"><%= recipe.prep_time %> min</h2></div></div></div></div></a></div></div>');
var recipeTemplateTwo = _.template('<div id="all-videos-container"><div id="big-video-container"><a href="<%= url %>"><div class="single-recipe"><div class="row"><div class="col-lg-8"><div class="videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe[0].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div></div><div class="videoOverlay" id="big-videoOverlay"><h1 id="big-video-title"><%= recipe.name %></h1><h2 id="big-video-description"><%= recipe.description %></h2><h2 id="big-video-prep_time"><%= recipe.prep_time %> min</h2><h2 id="big-video-cook_time"><%= recipe.prep_time %> min</h2></div></div></div></a></div><div id="small-video-top-container"><a href="<%= url %>"><div class="small-video"><div class="row"><div class="col-lg-8"><div class="videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe.main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="big-videoOverlay"><h1 id="big-video-title"><%= recipe.name %></h1><h2 id="big-video-description"><%= recipe.description %></h2><h2 id="big-video-prep_time"><%= recipe.prep_time %> min</h2><h2 id="big-video-cook_time"><%= recipe.prep_time %> min</h2></div></div></div></div></a></div><div id="small-video-bot-container"><a href="<%= url %>"><div class="small-video"><div class="row"><div class="col-lg-8"><div class="videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe.main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="big-videoOverlay"><h1 id="big-video-title"><%= recipe.name %></h1><h2 id="big-video-description"><%= recipe.description %></h2><h2 id="big-video-prep_time"><%= recipe.prep_time %> min</h2><h2 id="big-video-cook_time"><%= recipe.prep_time %> min</h2></div></div></div></div></a></div></div>');
var recipesContainer = $('#recipes-container');
var searchBox = $('#search-term');
var allergyBox = $('#allergy-term');

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

// DISPLAY ALL RECIPES
var initPage = function() {

	for (var i=0; i < RECIPES.length; i++ ) {

		queryCollection.push(RECIPES[i]);

		var processed_url = "http://localhost:3000/recipes/" + RECIPES[i].name.replace(/ /g, "_");
		var compiled = recipeTemplate({
			recipe: RECIPES[i],
			url: processed_url
		});
		recipesContainer.hide().append(compiled).fadeIn(200*i);
	}
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

	var template = true;
	var temp = [];
	var count = 0;

	while (count < queryCollection.length) {

		for (var i = 0; i < 2; i ++) {
			if (queryCollection[count]) {
				temp.push(queryCollection[count]);
				count++;
			}
		}

		if (template) {

			var processed_url = "http://localhost:3000/recipes/" + temp.name.replace(/ /g, "_");
			var compiled = recipeTemplateOne({
				recipes: temp,
				url: processed_url
			});
			
			recipesContainer.hide().append(compiled).fadeIn(500);

			template = false;
			temp = [];

		} else {

			var processed_url = "http://localhost:3000/recipes/" + temp.name.replace(/ /g, "_");
			var compiled = recipeTemplateTwo({
				recipe: temp,
				url: processed_url
			});

			recipesContainer.hide().append(compiled).fadeIn(500);
			
			template = true;
			temp = [];
		}
	}
}

// TOP RECIPES

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

	$('.dropdown-recipes').hide();
});
// TOP RECIPES DROPDOWN

$('.top-recipe-visibility').click(function(e) {
	e.preventDefault();
	$('.dropdown-recipes').slideToggle();

	$(document).mouseup(function (e) {
    var container = $('.dropdown-recipes');

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.hide();
	    }
	});
});



});