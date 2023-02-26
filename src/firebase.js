import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiwutFy0pd91lBXi6IjQI2OvNqadtthqQ",
  authDomain: "reactjs-auth-firebase-f8f3e.firebaseapp.com",
  projectId: "reactjs-auth-firebase-f8f3e",
  storageBucket: "reactjs-auth-firebase-f8f3e.appspot.com",
  messagingSenderId: "989087688449",
  appId: "1:989087688449:web:70650e3e09a663af23dd00"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;