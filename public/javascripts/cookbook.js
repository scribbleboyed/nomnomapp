var cookbookName = $('#title').val();

var recipesContainer = $('#recipes');

var recipeTemplate = _.template('<a href="<%= url %>"><div class="videoDiv recipe-item"><h3><%= name %></h3><video class="foodGif" width="100%" loop="true"><source src="<%= image_url %>" type="video/webm">Your browser does not support the video tag.</video></div></a>');

	$(document).ready(function() {

		var cookbookQueryString = "http://localhost:3000/api/cookbooks/" + cookbookName;
		console.log("Cookbook Query String: " + cookbookQueryString);

		$.get(cookbookQueryString)
		.done(function(results) {
			var resultRecipes = results[0].recipes;
			resultRecipes.forEach(function(recipe) {
				var recipeAPIQueryString = "http://localhost:3000/api/recipes/" + recipe.replace(/ /g, "_");
				var recipeQueryString = "http://localhost:3000/recipes/" + recipe.replace(/ /g, "_");
				$.get(recipeAPIQueryString)
				.done(function(result) {
					console.log(result[0].main_image_url);

					var compiled = recipeTemplate({
						name: result[0].name,
						url:  recipeQueryString,
						image_url: result[0].main_image_url
					});
					recipesContainer.append(compiled);
					
				});
			});
		});

		$('.videoDiv').hover(function() {
			$(this).children("video")[0].play();
		}, function() {
			var el = $(this).children("video")[0];
			el.pause();
			el.currentTime = 0;
		});

	});


