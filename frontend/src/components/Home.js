import React from 'react';
import '../css/home.css'; // Add styling here


export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <h1>Welcome to RecipeGenie</h1>
                    <p>Your AI-powered companion to help you discover new recipes, improve your cooking skills, and make every meal an adventure.</p>
                    <a href='/generate'>Generate Recipe</a>
                </div>
                <div className="hero-image">
                    <img src={"/images/home-2image.jpg"} alt="Delicious food" />
                </div>
            </div>
        </div>
    );
}
