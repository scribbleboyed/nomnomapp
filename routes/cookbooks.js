var express = require('express');
var cookbooksController = express.Router();
var User = require('../models/user.js');
var Recipe = require('../models/recipe.js');
var Cookbook = require('../models/cookbook.js');
var ObjectID = require('mongodb').ObjectID;

cookbooksController.get('/', function(req, res) {
    if (req.session && req.session.email) {
        User.findOne({email: req.session.email}).then(function(user) {
            Cookbook.find({}).execAsync().then(function(cookbooks) {
                console.log(cookbooks);
                res.render('cookbooks/index.ejs',{
                    cookbooks: cookbooks,
                    curr_user: user.username
                });
            })
            .catch(function (err) {
                console.log(err);
            });
        });
    } else {
        Cookbook.find({}).execAsync().then(function(cookbooks) {
            console.log(cookbooks);
            res.render('cookbooks/index.ejs',{
                cookbooks: cookbooks,
                curr_user: null
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
});

cookbooksController.get('/:name', function(req, res) {
    var processed_name = req.params.name.replace(/_/g, " ");

    if (req.session && req.session.email) {

        User.findOne({email: req.session.email}).then(function(user) {
            Cookbook.findOne({name: processed_name}).then(function(cookbook){
                Recipe.findOne({_id: cookbook.recipe_ids[0]}).then(function(recipe) {
                    res.render('cookbooks/show.ejs', {
                        recipe: recipe,
                        cookbook: cookbook,
                        curr_user: user.username
                    });
                });
            });
        });

    } else {
        Cookbook.findOne({name: processed_name}).then(function(cookbook){
            resultCookbook = cookbook;
            var results = [];
            cookbook.recipe_ids.forEach(function(recipe_id) {
                //console.log("recipe_id: " + recipe_id);
                Recipe.findOne({_id: cookbook.recipe_ids[0]}).then(function(recipe) {
                    results.push(recipe);
                });
            });
            console.log(recipe);
        }).then(function(result) {
            console.log(result);

            res.render('cookbooks/show.ejs', {
                recipes: resultRecipes,
                cookbook: resultCookbook,
                curr_user: resultUser.username
            });

        });

    }
});

cookbooksController.post('/create', function(req, res) {
    if(req.session && req.session.email) {
        User.findOne({email: req.session.email}).then(function(user){

            var cookbook = new Cookbook({
                name: req.body.name,
                description: req.body.description,
                image_url: req.body.image_url,
                user_id: user.id,
                username: user.username
            });

            cookbook.saveAsync()
            .then(function() {
                console.log("Cookbook saved");
                res.redirect(303, '/');
            }).catch(function(err) {
                console.log("error: " + err);
                res.redirect(303, '/');
            });

        });
    } else {
        console.log("User must be logged in");
    }
});

cookbooksController.post('/:name/update', function(req, res) {
    var processed_name = req.params.name.replace(/_/g, " ");
    var redirectURL = "/cookbooks/" + req.params.name;
    if(req.session && req.session.email) {
        Cookbook.updateAsync({name: processed_name},
        {$set:
            {
                name: req.body.name,
                description: req.body.description,
                image_url: req.body.image_url
            }
        }, {multi: true}).then(function() {
            var processed_url = req.body.name.replace(/ /g, "_");
            var redirectURL = "/cookbooks/" + processed_url;
            console.log("Cookbook updated");
            res.redirect(303, redirectURL);
        }).catch(function(err) {
            console.log("error: " + err);
            res.redirect(303, redirectURL);
        });
    } else {
        console.log("User must be logged in");
        res.redirect(303, redirectURL);
    }
});

module.exports = cookbooksController;