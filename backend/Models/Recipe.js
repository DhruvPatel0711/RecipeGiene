const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
    {
        recipe: {
            id: Number,
            type: String,
            description: String,
            step: String,
            tip: String,
            image: String
        },
    },
);

const RecipeModel = mongoose.model("Recipe", recipeSchema);
module.exports = RecipeModel;
