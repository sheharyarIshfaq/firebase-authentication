import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcigu89qcRspHZt3fQNtNCahRkXUJpMuQ",
  authDomain: "fir-authentication-e8b3e.firebaseapp.com",
  projectId: "fir-authentication-e8b3e",
  storageBucket: "fir-authentication-e8b3e.appspot.com",
  messagingSenderId: "703633332355",
  appId: "1:703633332355:web:7db3f144a0a3d827b4e3b6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
