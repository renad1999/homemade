const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn'); 

//controller module
const recipesCtrl = require('../controllers/recipes');
const ensureOwnerJs = require('../config/ensureOwner.Js');

//Endpoint: GET /recipes
router.get('/', recipesCtrl.index);

//end point: SHOW
router.get('/:id', recipesCtrl.show);

// GET route for recipes/new
router.get('/new', ensureLoggedIn, recipesCtrl.new);

//POST 
router.post('/', ensureLoggedIn, recipesCtrl.create);

//GET, endpoint: /recipes/:id/edit
router.get('/:id/edit', ensureLoggedIn, recipesCtrl.edit);

//action: update form server crud side : PUT /recipes/:id
router.put('/:id', ensureLoggedIn, recipesCtrl.update);

//delete:
router.delete('/:id', ensureLoggedIn, ensureOwnerJs, recipesCtrl.delete);



module.exports = router;