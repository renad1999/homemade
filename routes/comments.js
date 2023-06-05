const express = require('express');
const router = express.Router();




// Controllers
const commentsCtrl = require('../controllers/comments');



// staring endpoint: /


//POST route/recipes/:id/comments
router.post('/recipes/:id/comments', commentsCtrl.create);

module.exports = router;