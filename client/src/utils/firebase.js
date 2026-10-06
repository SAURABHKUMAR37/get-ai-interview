
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "interviewiq-b550d.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "interviewiq-b550d",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "interviewiq-b550d.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1097198877287",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1097198877287:web:d885fc372c068018c8b2c2"
};

// If VITE_FIREBASE_API_KEY isn't set yet, don't let the whole app crash on load.
// getAuth() throws synchronously on an invalid/empty API key, which would
// otherwise blank the entire page before React even renders.
let auth = null;
let provider = null;

if (firebaseConfig.apiKey) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
} else {
  console.warn(
    "VITE_FIREBASE_API_KEY is not set in client/.env — Google Sign-In is disabled until you add it. The rest of the app will still work."
  );
}

export { auth, provider };