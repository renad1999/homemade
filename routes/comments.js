const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Controllers
const commentsCtrl = require('../controllers/comments');

// staring endpoint: /

//POST route/recipes/:id/comments
router.post('/recipes/:id/comments', ensureLoggedIn, commentsCtrl.create);



module.exports = router;