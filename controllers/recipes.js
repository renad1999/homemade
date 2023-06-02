// const recipe = require('../models/recipe');


module.exports = {
    new: newRecipe

}

function newRecipe(req, res) {
    res.render('recipes/new', {errorrMsg: ''});
}