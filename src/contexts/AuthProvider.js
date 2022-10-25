import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { useEffect } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState(null);
  // log in by google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log in by facebook
  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // set current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user after auth change", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, googleSignIn, facebookSignIn };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
