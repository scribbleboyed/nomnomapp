$('#addStep').click(function() {
	var i;
	i += 1;
	$('#stepForm').append('#stepForm');
});

var STEPS = [];
// search = $('#search-term').val();
var stepsTemplate = _.template($('.step-template').html());

$('#search-term').keyup(function() {
	// Get dem donuts!
	$.get('http://www.omdbapi.com/?s='+($('#search-term').val()), function(response, status) {
		if (status == 'success') {
			MOVIES = response.Search;
			initPage();
		}
	});
});

var initPage = function() {
	var stepsContainer = $('#results-container');

	// This clears our movies container so that when we load new results, we remove the old ones first.
	var emptySteps = function() {
		stepsContainer.empty();
	};

	// WE DO: Need to define a donutsTemplate that we can re-use.
		// var donutsTemplate = _.template('<div class="donut-item"><h3>Id: <%= id %></h3><h4>Flavor: <%= flavor %></h4><p>Style: <%= style %></p></div></div>');
	var addStep = function(movies) {

		stepsContainer.append(stepForm);

	};

	var showMovie = function(movie) {
		
		var stepForm = moviesTemplate({
				title: movie.Title,
				year: movie.Year,
			});

		moviesContainer.append(compiled);
	};

	// WE DO: Click listener that handles event by displaying all donuts.
	$('#search-term').keyup(function(e) {
		e.preventDefault();
		emptyMovies();

		var resultMovies = MOVIES;
		console.log(resultMovies);

		showMovies(resultMovies);
	});
	// WE DO: Click listener that handles event by displaying one random donut.
	$('#result-random').click(function(e) {
		e.preventDefault();
		emptyMovies();

		//randomizes an integer
		var movieIndex = _.random(MOVIES.length-1);
		console.log(movieIndex);

		//based off the random integer, indexes from array
		var resultMovie = MOVIES[movieIndex];
		console.log(resultMovie);

		showMovie(resultMovie);
	});

	// WE DO: Click listener that handles event by sorting donuts by id and displaying results.
	$('#sortby-id').click(function(e) {
		e.preventDefault();
		emptyMovies();

		var resultsMovies = _.sortBy(MOVIES, 'imdbID');
		console.log(resultsMovies);

		showMovies(resultsMovies);
	});	

	// WE DO: Click listener that handles event by sorting donuts by flavor and displaying results.
	$('#sortby-year').click(function(e) {
		e.preventDefault();
		emptyMovies();

		var resultsMovies = _.sortBy(MOVIES, 'year');
		console.log(resultsMovies);

		showMovies(resultsMovies);
	});		

	// // YOU DO: Click listener that handles event by sorting donuts by style and displaying results.
	// $('#sortby-style').click(function(e) {
	// 	e.preventDefault();
	// 	emptyMovies();

	// 	var resultsMovies = _.sortBy(MOVIES, 'style');
	// 	console.log(resultsMovies);
	// });		

	// WE DO: Click listener that handles event by filtering donuts by plain flavor and displaying results.
	$('#filter-movie').click(function(e) {
		e.preventDefault();
		emptyMovies();

		var resultsMovies = _.filter(MOVIES, {'Type': 'movie'});
		console.log(resultsMovies);

		showMovies(resultsMovies);
	});

	// WE DO: Click listener that handles event by filtering donuts by berry flavor and displaying results.
	$('#filter-series').click(function(e) {
		e.preventDefault();
		emptyMovies();

		var resultsMovies = _.filter(MOVIES, {'Type': 'series'});
		console.log(resultsMovies);

		showMovies(resultsMovies);
	});

};