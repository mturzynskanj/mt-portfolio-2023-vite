import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebaseConfiguration";


const auth = getAuth();

export const signIn = ({ email, password }) => {
  debugger
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Successfully signed in to firebase - user", user);
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error
    });
};

export const createAccount = ({ auth, email, password }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('account created for user', user)
    })
    .catch((error) => {
      const errorCode = error.errorCode;
      const errorMessage = error.message;
    });
};
