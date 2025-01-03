import ReactMarkdown from "react-markdown";
import '../css/GieneRecipe.css';

export default function GieneRecipe({ recipe }) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>RecipeGenie Recommends:</h2>
            <div className="container">
                    <ReactMarkdown>{recipe}</ReactMarkdown>
            </div>
        </section>
    );
}
