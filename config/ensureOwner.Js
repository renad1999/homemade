const Recipe = require('../models/recipe');

module.exports = async function (req, res, next) {
    try{
        const requestId = req.user._id
        const recipe = await Recipe.findById (req.params.id);
        const recipeOwnerId = recipe.user 

        if (requestId.equals(recipeOwnerId)) {
            return next();
        } else {
            res.send('You cannot delete recipe');
        }
    } catch (err) {
        console.log(err)
    }
}

