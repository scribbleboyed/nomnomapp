var express = require('express');
var usersController = express.Router();
var User = require('../models/user.js');

/* GET users listing. */
usersController.get('/', function(req, res) {
  res.render('index');
});

usersController.post('/create', function(req, res) {
	if (req.body.password === req.body.password_confirmation) {
		var user = new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		console.log('user save');
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
	User.findOneAsync({
		email: req.body.email
	}).then(function(user) {
		user.comparePasswordAsync(req.body.password).then(function(isMatch) {
			if (isMatch) {
				req.session.email = user.email;
				console.log("Match: " + isMatch);
				res.redirect(303, '/products');
			}
		});
	});
});

usersController.get('/logout', function(req, res) {
	if (req.session && req.session.email) {
		delete req.session.email;
		res.redirect(303, '/');
	}
});

module.exports = usersController;

