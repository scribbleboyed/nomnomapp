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

	// <div class="row template-one-row template-container">
	// 	<% if (recipe[0]) { %>
	// 	<a href="<%= processed_url[0] %>">
	// 	<div class="col-lg-8 big-video-col" id="big-video-col">
	// 		<div class="videoDiv">
	// 			<video autoplay class="foodGif" width="100%" loop="true" >
	// 				<source src="<%= recipe[0].main_image_url %>" type="video/webm">Your browser does not support the video tag.
	// 			</video>
	// 		</div>
	// 		<div class="videoOverlay" id="big-videoOverlay">
	// 				<h1 class="bv-title"><%= recipe[0].name %></h1>
	// 			<div id="videoOverlay-timer">
	// 				<h2 class="bv">Prep Time: <%= recipe[0].prep_time %></h2>
	// 				<h2 class="bv">Cook Time: <%= recipe[0].cook_time %></h2>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	</a>
	// 	<% } %>
	// 	<% if (recipe[1]) { %>
	// 	<a href="<%= processed_url[1] %>">
	// 	<div class="col-lg-4 small-video-col" id="small-video-col">
	// 		<div class="small-video top" id="small-video-top">
	// 			<div class="videoDiv" id="sv-top-videoDiv">
	// 				<video autoplay class="foodGif" width="100%" loop="true"><source src="<%= recipe[1].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video>
	// 			</div>
	// 			<div class="videoOverlay" id="sv-top-videoOverlay">
	// 				<h2 class="sv"><%= recipe[1].name %></h2>
	// 			</div>
	// 		</div>
	// 	</a>
	// 	<% } %>
	// 	<% if (recipe[2]) { %>
	// 	<a href="<%= processed_url[2] %>">
	// 		<div class="small-video bottom" id="small-video-bot">
	// 			<div class="videoDiv" id="sv-bot-videoDiv">
	// 				<video autoplay class="foodGif" width="100%" loop="true"><source src="<%= recipe[2].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video>
	// 			</div>
	// 			<div class="videoOverlay" id="sv-bot-videoOverlay">
	// 				<h2 class="sv"><%= recipe[2].name %></h2>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	</a>
	// 	<% } else { %>
	// 	</div>
	// 	<% } %>
	// </div>

	<!-- // TEMPLATE TWO -->

	// <div class="row template-two-row template-container">
	// 	<% if (recipe[0]) { %>
	// 	<a href="<%= processed_url[0] %>">
	// 	<div class="col-lg-4 small-video-col" id="small-video-col">
	// 		<div class="small-video top" id="small-video-top">
	// 			<div class="videoDiv" id="sv-top-videoDiv">
	// 				<video autoplay class="foodGif" width="100%" loop="true"><source src="<%= recipe[0].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video>
	// 			</div>
	// 			<div class="videoOverlay" id="sv-top-videoOverlay">
	// 				<h2 class="sv"><%= recipe[0].name %></h2>
	// 			</div>
	// 		</div>
	// 	</a>
	// 	<% } %>
	// 	<% if (recipe[1]) { %>
	// 	<a href="<%= processed_url[1] %>">
	// 		<div class="small-video bottom" id="small-video-bot">
	// 			<div class="videoDiv" id="sv-bot-videoDiv">
	// 				<video autoplay class="foodGif" width="100%" loop="true"><source src="<%= recipe[1].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video>
	// 			</div>
	// 			<div class="videoOverlay" id="sv-bot-videoOverlay">
	// 				<h2 class="sv"><%= recipe[1].name %></h2>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	</a>
	// 	<% } else { %>
	// 	</div>
	// 	<% } %>
	// 	<% if (recipe[2]) { %>
	// 	<a href="<%= processed_url[2] %>">
	// 	<div class="col-lg-8 big-video-col" id="big-video-col">
	// 		<div class="videoDiv">
	// 			<video autoplay class="foodGif" width="100%" loop="true"><source src="<%= recipe[2].main_image_url %>" type="video/webm">Your browser does not support the video tag.</video>
	// 		</div>
	// 		<div class="videoOverlay" id="big-videoOverlay">
	// 				<h1 class="bv-title"><%= recipe[2].name %></h1>
	// 			<div id="videoOverlay-timer">
	// 				<h2 class="bv">Prep Time: <%= recipe[2].prep_time %></h2>
	// 				<h2 class="bv">Cook Time: <%= recipe[2].cook_time %></h2>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	</a>
	// 	<% } %>
	// </div>
