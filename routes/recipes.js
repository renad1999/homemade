const express = require('express');
const router = express.Router();

// const recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//controller module
const recipesCtrl = require('../controllers/recipes')

//GET route for recipes/new
router.get('/new', recipesCtrl.new);


//GET 
module.exports = router;