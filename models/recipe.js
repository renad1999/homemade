const mongoose = require('mongoose');

// COMMENTS SCHEMA - will be embedded within recipe
const commentsSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const recipeSchema = new mongoose.Schema({
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
  date: {
    type: Date
  },
  comments: [commentsSchema] 
}, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);