// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbMkeSaqB9H2RA2c8HWsX4RaIEzZrYje4",
  authDomain: "food-shower3.firebaseapp.com",
  databaseURL: "https://food-shower3-default-rtdb.firebaseio.com",
  projectId: "food-shower3",
  storageBucket: "food-shower3.firebasestorage.app",
  messagingSenderId: "342565132157",
  appId: "1:342565132157:web:c70ba68e2ccc3bcba75e14",
  measurementId: "G-F50B35CE7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Realtime Database
export const db = getDatabase(app);
