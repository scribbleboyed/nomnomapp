var express = require('express');
var recipesController = express.Router();
var User = require('../models/user.js');
var Recipe = require('../models/recipe.js');

recipesController.get('/', function(req, res) {
    if (req.session && req.session.email) {
        User.findOne({email: req.session.email}).then(function(user){
            Recipe.find({}).execAsync().then(function(recipes) {
                res.render('recipes/index.ejs',{
                    recipes: recipes,
                    curr_user: user.username
                });
            })
            .catch(function (err) {
                console.log(err);
            });
        });
    } else {
        Recipe.find({}).execAsync().then(function(recipes) {
            res.render('recipes/index.ejs',{
                recipes: recipes,
                curr_user: null
            });
        })
        .catch(function (err) {
            console.log(err);
        });
    }
});

recipesController.get('/create', function(req, res) {

    if (req.session && req.session.email) {
        User.findOne({email: req.session.email}).then(function(user){
            res.render('recipes/new.ejs', {
                    curr_user: user.username
            }).catch(function (err) {
                console.log(err);
            });
        });
    } else {
        console.log("User must be logged in.");
        res.redirect('/recipes');
    }
});

recipesController.get('/:id', function(req, res) {
    Recipe.find({}).execAsync().then(function(recipe) {
        console.log("recipe: "+ recipe);
            res.render('recipes/show.ejs',{
                recipe: recipe,
            });
        })
        .catch(function (err) {
            console.log(err);
        });
    });

recipesController.post('/create', function(req, res) {
    console.log(req);
    if(req.session && req.session.email) {
        User.findOne({email: req.session.email}).then(function(user){
            user.saveAsync().then(function () {
            
                var recipe = new Recipe({
                    name: req.body.name,
                    user_name: user.username,
                    description: req.body.description,
                    main_image_url: req.body.main_image_url,
                    video_url: req.body.video_url,
                    prep_time: req.body.prep_time,
                    cook_time: req.body.cook_time,
                    categories: req.body.categories,
                    // ingredients: req.body.ingredients,
                    // steps: req.body.steps
                });

                console.log(recipe);

                console.log('recipe save');
                recipe.saveAsync()
                .then(function() {
                    console.log("save successful");
                    res.redirect(303, '/');
                }).catch(function(err) {
                    console.log("error: " + err);
                    res.redirect(303, '/');
                });
            });
        });
    } else {
        res.render('/recipes');
    }
});

module.exports = recipesController;