var express = require('express');
var recipesController = express.Router();
var User = require('../models/user.js');
var Recipe = require('../models/recipe.js');
var Cookbook = require('../models/cookbook.js');

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

recipesController.get('/:name', function(req, res) {

    var processed_name = req.params.name.replace(/_/g, " ");

    if (req.session && req.session.email) {
        User.findOne({email: req.session.email}).then(function(user){
            Recipe.findOne({name: processed_name}).execAsync().then(function(recipe) {
                Cookbook.find({username: user.username}).then(function(cookbooks) {
                    res.render('recipes/show.ejs',{
                        recipe: recipe,
                        cookbooks: cookbooks,
                        curr_user: user.username
                    });
                });
            }).catch(function (err) {
                console.log(err);
            });
        });
    } else {
        Recipe.findOne({name: processed_name}).execAsync().then(function(recipe) {
                res.render('recipes/show.ejs',{
                    recipe: recipe,
                    cookbooks: null,
                    curr_user: null
                });
        }).catch(function (err) {
            console.log(err);
        });
    }
});


recipesController.post('/:name/update', function(req, res) {
    var processed_name = req.params.name.replace(/_/g, " ");

    if(req.session && req.session.email) {
        Recipe.updateAsync({name: processed_name},
            {$set:
                {
                    name: req.body.name,
                    description: req.body.description,
                    prep_time: req.body.prep_time,
                    cook_time: req.body.cook_time,
                }
            },{multi:true})
            .then(function() {
                var processedURL = req.body.name.replace(/ /g, "_");
                var redirectURL = "/recipes/" + processedURL;
                res.redirect(303, redirectURL);
        }).catch(function(err) {
                res.redirect(303, '/');
            });
    }
});

recipesController.get('/:name/addTo/:cookbook_id', function(req, res) {
    var processed_name = req.params.name.replace(/ /g, "_");
    var redirectURL = "/recipes/" + processed_name;

    Cookbook.updateAsync({_id: req.params.cookbook_id}, {
        $push: { recipes: req.params.name }
    }).then(function() {
        res.redirect(303, redirectURL);
    }).catch(function(err) {
        console.log("error: " + err);
        res.redirect(303, redirectURL);
    });
});


recipesController.post('/:name/update-ingredient', function(req, res) {
    var processed_name = req.params.name.replace(/_/g, " ");

    if(req.session && req.session.email) {
        Recipe.updateAsync({name: processed_name},
            {$set:
                {
                    ingredients: [{
                        name: req.body.ingredient-name,
                        quantity: req.body.ingredient-quantity
                    }]
                }
            }, {multi:true})
            .then(function() {
                console.log("req.body.description: " + req.body.description);
                res.redirect(303, '/');
        }).catch(function(err) {
                console.log("error: " + err);
                res.redirect(303, '/');
            });
    }
});


recipesController.post('/:name/update-step', function(req, res) {
    var processed_name = req.params.name.replace(/_/g, " ");

    if(req.session && req.session.email) {
        Recipe.updateAsync({name: processed_name},
            {$set:
                {
                    steps: [{
                        instruction: req.body.step-instruction,
                        image_url: req.body.step-image_url
                    }]
                }
            },{multi:true})
            .then(function() {
                console.log("req.body.description: " + req.body.description);
                res.redirect(303, '/');
        }).catch(function(err) {
                console.log("error: " + err);
                res.redirect(303, '/');
            });
    }
});

recipesController.post('/create', function(req, res) {
    var new_recipe = req.body.name.replace(/ /g, "_");
    var new_recipe_url = "/recipes/" + new_recipe;

    if(req.session && req.session.email) {
        User.findOne({email: req.session.email}).then(function(user){
            user.saveAsync().then(function () {
            
                var recipe = new Recipe({
                    name: req.body.name,
                    user_name: user.username,
                });

                recipe.saveAsync()
                .then(function() {
                    console.log("save successful");
                    res.redirect(303, new_recipe_url);
                }).catch(function(err) {
                    console.log("error: " + err);
                    res.redirect(303, '/');
                });
            });
        });
    }
});

module.exports = recipesController;