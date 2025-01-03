import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7gj5tcuKxXew7NcQKkwMRGsb6uW3qMtc",
  authDomain: "recipegiene.firebaseapp.com",
  projectId: "recipegiene",
  storageBucket: "recipegiene.appspot.com",
  messagingSenderId: "554199743645",
  appId: "1:554199743645:web:0023c6a2c36bd00f146874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
