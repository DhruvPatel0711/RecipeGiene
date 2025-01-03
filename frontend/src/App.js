import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Generate from "./components/Generate";
import SignUp from "./components/SignUp";
import Recipe from "./components/Recipe"

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="/recipe" element={<Recipe />} />
            </Routes>
        </Router>
    );
}

export default App;
