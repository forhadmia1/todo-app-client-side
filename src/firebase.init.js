import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUqaDthcemu13Yv-ImTfrXROIXHfzEOFk",
    authDomain: "todo-app-44b3a.firebaseapp.com",
    projectId: "todo-app-44b3a",
    storageBucket: "todo-app-44b3a.appspot.com",
    messagingSenderId: "419850269340",
    appId: "1:419850269340:web:bc0489c53d6405daebf359"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;