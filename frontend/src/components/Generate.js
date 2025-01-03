import React from "react";
import '../css/generate.css';
import IngredientsList from "./IngredientsList";
import GieneRecipe from "./GieneRecipe";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        []
    );
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient").trim(); // Trim whitespace

        if (!newIngredient) {
            alert("Input field is empty");
            return;
        }

        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        event.target.reset(); // Clear the input field after submission
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    updateIngredients={setIngredients} // Pass state updater
                />
            )}

            {recipe && <GieneRecipe recipe={recipe} />}
        </main>
    );
}
