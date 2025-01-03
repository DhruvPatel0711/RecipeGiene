import React, { useEffect, useState } from "react";
import '../css/Recipe.css';
import axios from 'axios';

export default function Recipe() {
    const [Recipe, setRecipe] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/getUsers')
            .then(response => setRecipe(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="recipe">
            {Recipe.map((recipe) => (
                <div key={recipe.id} className="recipe-container">
                    {/* Recipe details on the left */}
                    <div className="recipe-details">
                        <h1>{recipe.name}</h1>
                        <h2>Recipe ID: {recipe.id}</h2>

                        <p>
                            <h3>Ingredients:</h3>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </p>

                        <p>
                            <h3>Steps:</h3>
                            {recipe.steps}
                        </p>

                        <p>
                            <h3>Tips:</h3>
                            {recipe.tips}
                        </p>
                    </div>
                    
                    {/* Image on the right */}
                    <div className="recipe-image">
                        <img src={process.env.PUBLIC_URL + recipe.img} alt={recipe.name} />
                    </div>
                </div>
            ))}
        </div>
    );
}
