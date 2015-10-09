var RECIPES = [];

var recipeTemplateOne = _.template('<div class="row template-one-row template-container"><% if (recipe[0]) { %><a href="<%= processed_url[0] %>"><div class="col-lg-8 big-video-col" id="big-video-col"><div class="videoDiv"><video class="foodGif" width="100%" loop="true" ><source src="<%= recipe[0].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="big-videoOverlay"><div id="big-videoText"><h1 class="bv-title"><%= recipe[0].name %></h1></div><div id="videoOverlay-timer"><h3 class="bv">Prep Time: <b><%= recipe[0].prep_time %></b></h3><h3 class="bv">&nbsp;&nbsp;&nbsp;Cook Time: <b><%= recipe[0].cook_time %></b></h3></div></div></div></a><% } %><% if (recipe[1]) { %><a href="<%= processed_url[1] %>"><div class="col-lg-4 small-video-col" id="small-video-col"><div class="small-video top" id="small-video-top"><div class="videoDiv" id="sv-top-videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe[1].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="sv-top-videoOverlay"><h2 class="sv"><%= recipe[1].name %></h2></div></div></a><% } %><% if (recipe[2]) { %><a href="<%= processed_url[2] %>"><div class="small-video bottom" id="small-video-bot"><div class="videoDiv" id="sv-bot-videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe[2].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="sv-bot-videoOverlay"><h2 class="sv"><%= recipe[2].name %></h2></div></div></div></a><% } else { %></div><% } %></div>');
var recipeTemplateTwo = _.template('<div class="row template-two-row template-container"><% if (recipe[0]) { %><a href="<%= processed_url[0] %>"><div class="col-lg-4 small-video-col" id="small-video-col"><div class="small-video top" id="small-video-top"><div class="videoDiv" id="sv-top-videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe[0].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="sv-top-videoOverlay"><h2 class="sv"><%= recipe[0].name %></h2></div></div></a><% } %><% if (recipe[1]) { %><a href="<%= processed_url[1] %>"><div class="small-video bottom" id="small-video-bot"><div class="videoDiv" id="sv-bot-videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe[1].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="sv-bot-videoOverlay"><h2 class="sv"><%= recipe[1].name %></h2></div></div></div></a><% } else { %></div><% } %><% if (recipe[2]) { %><a href="<%= processed_url[2] %>"><div class="col-lg-8 big-video-col" id="big-video-col"><div class="videoDiv"><video class="foodGif" width="100%" loop="true"><source src="<%= recipe[2].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video></div><div class="videoOverlay" id="big-videoOverlay"><div id="big-videoText"><h1 class="bv-title"><%= recipe[2].name %></h1></div><div id="videoOverlay-timer"><h3 class="bv">Prep Time: <b><%= recipe[2].prep_time %></b></h3><h3 class="bv">&nbsp;&nbsp;&nbsp;Cook Time: <b><%= recipe[2].cook_time %></b></h3></div></div></div></a><% } %></div>');

var recipesContainer = $('#recipes-container');
var searchBox = $('#search-term');
var allergyBox = $('#allergy-term');
var categoriesMenu = $('.dropdown-recipes');
var searchButton = $('#search-button');

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



searchButton.click(function(e) {
	console.log("searchbutton clicked");
	e.preventDefault();

	var value = searchBox.val().toLowerCase();
	var allergy = allergyBox.val().toLowerCase();

	console.log("value = " + value);
	console.log("allergy = " + allergy)

	if (value && allergy) {
		searchRecipesWithoutAllergies(value, allergy);
	}

	if (value && !allergy) {
		searchRecipes(value);
	}

	if (!value && allergy) {
		searchRecipeWithoutAllergies(" ", allergy);
	}

});



// ALLERGY BOX FUNCTION
allergyBox.keyup(function(e) {
	
	e.preventDefault();

	var value = searchBox.val().toLowerCase();
	var allergy = allergyBox.val().toLowerCase();

	if (value && allergy) {
		searchRecipesWithoutAllergies(value, allergy);
	}

	if (value && !allergy) {
		searchRecipes(value);
	}

	if (!value && allergy) {
		searchRecipesWithoutAllergies(" ", allergy);
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
			recipe.tags.forEach(function(tag) {
				var tagName = tag.toLowerCase();
				if (tagName.indexOf(value) > -1) {
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

		recipe.tags.forEach(function(tag) {
			var tagName = tag.toLowerCase();
			if (tagName.indexOf(value) > -1) {
				if (queryCollection.indexOf(recipe) < 0 && !hasAllergy(recipe, allergy)) {
					queryCollection.push(recipe);
				}
			}
		});

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
	var temp_url = [];
	var count = 0;
	var compiled;

	while (count < queryCollection.length) {

		for (var i = 0; i < 3; i ++) {
			if (queryCollection[count]) {
				temp.push(queryCollection[count]);
				temp_url.push("/recipes/" + queryCollection[count].name.replace(/ /g, "_"));
				count++;
			}
		}

		if (template) {
			compiled = recipeTemplateOne({
				recipe: temp,
				processed_url: temp_url
			});

			template = false;

		} else {

			compiled = recipeTemplateTwo({
				recipe: temp,
				processed_url: temp_url
			});
			
			template = true;
		}

		recipesContainer.append(compiled);


		temp = [];
		temp_url = [];
	}

		$('.foodGif').hover(function(e) {

			e.preventDefault();
			var videoOverlay = $(this).parent().parent().children('.videoOverlay');
			videoOverlay.fadeToggle("fast", "linear");

		});

		$('.videoDiv').hover(function() {
			console.log("test");
			$(this).children("video")[0].play();
		}, function() {
			var el = $(this).children("video")[0];
			el.pause();
			el.currentTime = 0;
		});

	recipesContainer.fadeIn(500);
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


// HOVER OVER FOOD GIF
