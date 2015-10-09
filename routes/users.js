var express = require('express');
var usersController = express.Router();
var User = require('../models/user.js');
var Recipe = require('../models/recipe.js');

/* GET users listing. */
usersController.get('/', function(req, res) {
	
	if (req.session && req.session.email) {

		User.findOne({email: req.session.email}).then(function(user) {
			Recipe.find({}).then(function(recipes) {
				res.render('index.ejs', {
					recipes: recipes,
					curr_user: user.username
				});
			});
		});
	} else {
		User.findAsync({}).then(function(users) {
			Recipe.find({}).then(function(recipes) {
				res.render('index.ejs', {
					recipes: recipes,
					curr_user: null
				});
			});
		}).catch();
	}
});

usersController.post('/create', function(req, res) {
	if (req.body.password === req.body.password_confirmation) {
		var user = new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		console.log(user);
		user.saveAsync()
		.then(function() {
			console.log("save successful");
			res.redirect(303, '/');
		}).catch(function(err) {
			console.log("error: " + err);
			res.redirect(303, '/');
		});
	}
});

usersController.post('/login', function(req, res) {
	User.findOne({
		email: req.body.email
	}).then(function(user) {
		user.comparePasswordAsync(req.body.password).then(function(isMatch) {
			if (isMatch) {
				console.log("Match: " + isMatch);
				req.session.email = user.email;
				res.redirect(303, '/');
			}
		});
	});
});

usersController.get('/logout', function(req, res) {
	delete req.session.email;
	res.redirect(303, '/');
});

module.exports = usersController;

