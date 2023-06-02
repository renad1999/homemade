var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Homemade'
  });
});


// router.get('/recipes/new', function(req, res, next) {
//   res.render('recipes/new', {
//     title: 'Add Recipe'
//   });
// });


// router.get('/recipes', function(req, res, next) {
//   res.render('recipes', {
//     title: 'All Recipes'
//   });
// });




router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    //check these
    successRedirect: '/recipes',
    failureRedirect: '/recipes'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/recipes');
  });
});




module.exports = router;
