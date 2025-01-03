import React, { useState } from "react";
import '../css/signup.css'; // Ensure styles are linked
import { auth, googleProvider } from "./firebaseConfig"; // Firebase config import
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({ closeSignUp, onUserLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle email/password sign-up
  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      onUserLogin(userCredential.user); // Pass user data to parent component
      alert("User registered successfully!");
      closeSignUp(); // Close sign-up modal
    } catch (err) {
      setError(err.message || "Failed to register. Please try again.");
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      onUserLogin(user); // Pass user data to parent component
      alert(`Welcome, ${user.displayName}!`);
      closeSignUp(); // Close sign-up modal
    } catch (err) {
      setError(err.message || "Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="sign-up-modal">
      <div className="modal-content">
        <h2>Sign Up</h2>
        {/* Email/password registration form */}
        <form onSubmit={handleEmailSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>

        {/* Google Sign-In button */}
        <button onClick={handleGoogleSignIn} className="google-sign-in">
          Sign in with Google
        </button>

        {/* Display error message */}
        {error && <p className="error">{error}</p>}

        {/* Close button */}
        <button onClick={closeSignUp} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
}
