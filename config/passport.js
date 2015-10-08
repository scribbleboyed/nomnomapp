var express = require('express');
var usersController = express.Router();
var User = require('../models/user.js');

var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(passport){
	passport.serializeUser(function(user, done) {
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			console.log('deserializing user: ', user);
			done(err, user);
		});
	});

	passport.use('facebook', new FacebookStrategy({
		clientID		: '1483857778585276', //working code: FACEBOOK_API_KEY
		clientSecret	: '0b9575dfb7aa30b66af5dba5c0acfd8f', //working code: FACEBOOK_API_SECRET
		callbackURL		: "http://localhost:3000/auth/facebook/callback", //specific callback link
		enableProof		: true,
		profileFields	: ['name', 'emails'] //information that we want back
	}, function(access_token, refresh_token, profile, done) {
			process.nextTick(function() {
				User.findOne({ email : profile.emails[0].value }, function(err, user) {
					if (err) return done(err);
					if (user) {
						console.log(user);
						return done (null, user);
						// return done(null, function(user) {
						// 	curr_user: user.username;
						// });
					} else {

					var newUser = new User();
					newUser.username			= (profile.name.givenName + " " + profile.name.familyName);
					newUser.email 				= profile.emails[0].value;

					newUser.save(function(err) {
						if (err)
							throw err;

					return done (null, user);
					// return done(null, function(user) {
					// 		res.render('./views/index.ejs', {
					// 			curr_user: user.username
					// 		});
					// 	});

					});
				}
				});
			});
		}
	));
};