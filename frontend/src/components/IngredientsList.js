import '../css/ingredients.css'

export default function IngredientsList(props) {
    const handleDelete = (ingredientToDelete) => {
        const updatedIngredients = props.ingredients.filter(
            ingredient => ingredient !== ingredientToDelete
        );
        props.updateIngredients(updatedIngredients); // Function to update parent state
    };

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient} className="ingredient-item">
            {ingredient}
            <button 
                className="delete-btn" 
                onClick={() => handleDelete(ingredient)}
                aria-label={`Delete ${ingredient}`}
            >
                ✕
            </button>
        </li>
    ));

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            )}
        </section>
    );
}
