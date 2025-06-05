import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ Yeh zaroori tha

const firebaseConfig = {
  apiKey: "AIzaSyCfIqOA7VXacXjmzP3lht9XXUrCFPc0vSI",
  authDomain: "netflixgt-85587.firebaseapp.com",
  projectId: "netflixgt-85587",
  storageBucket: "netflixgt-85587.firebasestorage.app",
  messagingSenderId: "778896859831",
  appId: "1:778896859831:web:81696acbded7b83d4ea332",
  measurementId: "G-MJCNH5TJ3Q"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Optional: Analytics (can skip if not used)
const analytics = getAnalytics(app);

// ✅ Export auth for use in Login.jsx
export const auth = getAuth(app);

export default app;
