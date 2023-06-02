const express = require('express');
const router = express.Router();

//controller module
const recipesCtrl = require('../controllers/recipes')

// GET route for recipes/new
router.get('/new', recipesCtrl.new);

//GET route for /recipes index 
router.get('/', recipesCtrl.index);

router.get('/:id', recipesCtrl.show);

//POST 
router.post('/', recipesCtrl.create);

// const recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn');




module.exports = router;