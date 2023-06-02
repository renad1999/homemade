const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    instructions:{
        type: String,
        required: true
     }, 
     ingredients: {
        type: [String],
        required: true
      }, 
  date: {
    type: Date,
    required: true
  },
  
});

module.exports = mongoose.model('Recipe', recipeSchema);