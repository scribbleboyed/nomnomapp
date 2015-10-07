var express = require('express');
var apiController = express.Router();
var User = require('../models/user.js');
var Recipe = require('../models/recipe.js');
var Cookbook = require('../models/cookbook.js');

apiController.get('/recipes', function(req, res) {
	Recipe.find({}).then(function(recipes) {
		res.json(recipes);
	});
});

apiController.get('/recipes/:name', function(req, res) {
	var processed_name = req.params.name.replace(/_/g, " ");
	Recipe.find({name: processed_name}).then(function(recipe) {
		res.json(recipe);
	});
});

apiController.get('/cookbooks', function(req, res) {
	Cookbook.find({}).then(function(cookbooks) {
		res.json(cookbooks);
	});
});

apiController.get('/cookbooks/:name', function(req, res) {
	var processed_name = req.params.name.replace(/_/g, " ");
	Cookbook.find({name: processed_name}).then(function(cookbook) {
		res.json(cookbook);
	});
});



module.exports = apiController;