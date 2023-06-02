const Recipe = require('../models/recipe');

module.exports = {
    new: newRecipe,
    create,
    index,
    show
}

async function index(req, res) {
    const recipes = await Recipe.find({});
    res.render('recipes/index', { title: 'All Recipes', recipes});
}

async function create (req, res, next) {
    try {
      const recipeYum = { ...req.body };
      //adding to the database
      const createdRecipe = await Recipe.create(recipeYum);
      console.log(createdRecipe);
      //redirects to the newly created technique on the show route
      res.redirect(`/recipes/${createdRecipe._id}`)
    } catch (err) {
     console.log('ERROR MESSAGE -->', err.message);
     res.render('recipes/new', { title: 'Add Recipe', errorMessage: err.message });
    }
  }


async function newRecipe(req, res, next) {
    try {
      res.render('recipes/new', {
        title: 'Create a New Recipe',
        errorMessage: ''
      })
    } catch (err) {
      console.log('ERROR MESSAGE -->', err.message);
    }
  }

  async function show (req, res, next) {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findById(id);
      console.log(recipe);
      res.render('recipes/show', {
        title: recipe.title ,  recipe
      })
    } catch (err) {
      console.log('ERROR MESSAGE -->', err.message);
      next();
    }
  }