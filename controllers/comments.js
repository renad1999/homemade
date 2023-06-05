const Recipe = require('../models/recipe');


async function create(req, res, next) {
    console.log(req.body)
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


async function deleteComment(req, res, next) {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findOneAndUpdate(
            { 'comments._id': id },
            { $pull: { comments: { _id: id } } },
            { new: true }
        );

        if (!recipe) {
            return res.status(404).send('Recipe or Comment not found');
        }

        console.log('Comment deleted:', id);
        res.redirect('/comments');
    } catch (err) {
        console.log('ERR MESSAGE ->', err.message);
        res.status(500).send('Internal Server Error');
    }
}










module.exports = {
    create,
delete: deleteComment }
