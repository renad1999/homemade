const Recipe = require('../models/recipe');

function formatBody(body){
return {
  ...body,
 ingredients: body.ingredients.trim().split(/\s*,\s*/),
}
}


module.exports = {
    new: newRecipe,
    create,
    index,
    show,
    edit,
    update
}

async function index(req, res) {
  try {
    const recipes = await Recipe.find({});
    console.log(allRecipes)
    res.render('recipes/index', {
      title: 'All Recipes',
      recipes: allRecipes
    });
  } catch (err) {
    console.log('ERROR MESSAGE -->', err.message);
    next();
  }
}

async function show (req, res, next) {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    // console.log(Object.keys(recipe.toObject()));

for(const key in recipe.toObject()){
console.log(`${key[0].toUpperCase() + key.substring(1)}: ${recipe[key]}`)
}

    res.render('recipes/show', {
      title: recipe.title,  
      recipe: recipe.toObject()
    })
  } catch (err) {
    console.log('ERROR MESSAGE -->', err.message);
    next();
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

async function create (req, res, next) {
    try {
      const body = formatBody(req.body)
//submitting the document to the database 
      const createdRecipe = await Recipe.create(body);
      console.log(createdRecipe._id);

      //redirects to the newly created recipe on the show route
      res.redirect(`/recipes/${createdRecipe._id}`)
    } catch (err) {
     console.log('ERROR MESSAGE -->', err.message);
     res.render('recipes/new', { title: 'Add Recipe', errorMessage: err.message });
    }
  }


  //GET /recipes/:id/edit
  // renders edit form on client side, async because it needs to retrieve all data first
  async function edit(req, res, next) {
    try{
      const { id } = req.params;
      const recipe = await Recipe.findById(id);
      res.render('recipes/edit', { title: `Edit ${recipe.title}`, recipe, errorMessage: '' })
    } catch (err) {
      console.log(err);
    next();
    }
  }

  // PUT /recipes/:id
async function update(req, res, next) {
  try{
const { id } = req.params
const recipeDocument = await Recipe.findById(id)

// reformatting the body to include ingredients as an array
const body = formatBody(req.body)

// merge document with req.body taking req.body as a precedent
Object.assign(recipeDocument, body)

// once assigned to new values on the document, we save the doc
await recipeDocument.save();

// render show page for new updated form
res.render('recipes/show', { title: recipeDocument.title, recipe: recipeDocument.toObject() })

  } catch (err) {
    console.log('ERROR MESSAGE -->', err.message);
    res.render('recipes/edit', { title: 'Update Recipe', errorMessage: err.message })
  }
}
  