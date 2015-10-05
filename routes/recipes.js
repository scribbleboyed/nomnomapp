var express = require('express');
var recipesController = express.Router();
var Recipe = require('../models/recipe.js');

recipesController.get('/', function(req, res) {
    Recipe.find({}).execAsync().then(function(recipes) {
        console.log("recipes: "+ recipes);
            res.render('recipes/index.ejs',{
                recipes: recipes,
            });
        })
        .catch(function (err) {
            console.log(err);
        });
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

recipesController.get('/create', function(req, res) {
    if(req.session && req.session.email) {
        User.findOne({email: req.session.email}).then(function(user){
            user.saveAsync().then(function () {
                Recipe.find({}).execAsync().then(function(recipes) {
                console.log("recipes: "+ recipes);
                    res.render('recipes/new.ejs',{
                        recipes: recipes,
                    });
                })
                .catch(function (err) {
                    console.log(err);
                });
            });
        });
    }
});

recipesController.post('/create', function(req, res) {
    if(req.session && req.session.email) {
        User.findOne({email: req.session.email}).then(function(user){
            user.saveAsync().then(function () {
            
                var recipe = new Recipe({
                    name: req.body.name,
                    user_name: user.name,
                    desciprtion: req.body.description,
                    video_url: req.body.video_url,
                    steps: [{
                        title: req.body.title,
                        instruction: req.body.instruction,
                        image_url: req.body.image_url
                    }],
                    categories: req.body.categories
                });

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
    }
});

module.exports = recipesController;