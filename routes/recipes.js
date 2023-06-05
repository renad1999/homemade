const express = require('express');
const router = express.Router();

//controller module
const recipesCtrl = require('../controllers/recipes')

//Endpoint: GET /recipes
router.get('/', recipesCtrl.index);

//end point: SHOW
router.get('/:id', recipesCtrl.show);

// GET route for recipes/new
router.get('/new', recipesCtrl.new);

//POST 
router.post('/', recipesCtrl.create);

//GET, endpoint: /recipes/:id/edit
router.get('/:id/edit', recipesCtrl.edit);

//action: update form server crud side : PUT /recipes/:id
router.put('/:id', recipesCtrl.update);

// const recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn');




module.exports = router;