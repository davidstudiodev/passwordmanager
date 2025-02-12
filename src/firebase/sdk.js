import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: "password-manager-87cea.firebaseapp.com",
    projectId: "password-manager-87cea",
    storageBucket: "password-manager-87cea.firebasestorage.app",
    messagingSenderId: "258992315617",
    appId: "1:258992315617:web:b16d94ff41314d4d402ba0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }