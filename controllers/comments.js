const Recipe = require('../models/recipe');

async function create(req, res, next) {
    console.log(req.body)
    // Add the user-centric info to req.body (the new review)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

    const { id } = req.params
    try{
        const recipe = await Recipe.findById(id)
        console.log(recipe)
        // push req.body to recipes.comments
        recipe.comments.push(req.body)
      
// save parent document
await recipe.save()
    } catch (err) {
        console.log('ERR MESSAGE ->', err.message)  
    }
    // redirect to recipes home page
    res.redirect(`/recipes/${id}`)
}



module.exports = {
    create
}
