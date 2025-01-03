import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import '../css/header.css';
import SignUp from "./SignUp"; // Import the SignUp component

export default function Header() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState(null); // Track the current user

  const toggleSignUp = () => setShowSignUp(!showSignUp);

  useEffect(() => {
    // Initialize Firebase auth
    const auth = getAuth();

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the user if logged in
      } else {
        setUser(null); // Set user to null if logged out
      }
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth); // Sign out the user
      setUser(null); // Update the state
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <header>
        <div className="logo">
          <h1>RecipeGenie</h1>
        </div>
        <div className="navigation">
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/generate">Generate</Link></li>
            <li><Link to="/recipe">Top Recipes</Link></li>
          </ul>
        </div>
        <div className="Sign/Login">
          {user ? (
            // If user is signed in, show Profile (or Avatar) and Sign Out button
            <div className="profile">
              <img src={user.photoURL || "default-avatar.png"} alt="Avatar" className="avatar" />
              <button onClick={handleSignOut} className="login">Sign Out</button>
            </div>
          ) : (
            // If user is not signed in, show Sign Up button
            <button onClick={toggleSignUp} className="login">Sign Up</button>
          )}
        </div>
      </header>

      {/* Display the SignUp modal when the state is true */}
      {showSignUp && (
         <SignUp 
           closeSignUp={toggleSignUp} 
           onUserLogin={(loggedInUser) => setUser(loggedInUser)} 
          />
      )}
    </>
  );
}
