const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// COMMENTS SCHEMA - will be embedded within recipe
const commentsSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }, 
 },
  { 
  timestamps:  true 
});

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String
    },
    instructions: {
      type: String,
      required: true
    },
    ingredients: {
      type: [String]
    }, 
    comments: [commentsSchema] ,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  
  {
    timestamps: true }
);

recipeSchema.methods.deleteRecipe = async function (recipeId) {
    try {
      await this.model('Recipe').deleteOne({ _id: recipeId });
    } catch (error) {
      throw new Error('Failed to delete recipe');
    }
  };

module.exports = mongoose.model('Recipe', recipeSchema );
