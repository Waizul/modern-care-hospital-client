import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

import firebaseAuthentication from "../firebase.config";
import { useNavigate } from "react-router-dom";

firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  // const navigate = useNavigate()

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  console.log(user);

  const register = (displayName, email, password, navigate, from) => {
    setLoading(true);

    console.log(email, password, displayName);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        console.log(newUser);
        setUser(newUser);
        saveUser(displayName, email, password, "post");
        updateProfile(auth.currentUser, {
          displayName: displayName,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        setAuthError("");
sendEmailVerification(auth.currentUser).then(()=>{})
        navigate(from);
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const signInUsingEmail = (email, password, navigate, from) => {
    // setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const signedUser = result.user;
        saveUser(signedUser.email, signedUser.displayName, "put");
        navigate(from);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signInUsingGoogle = (navigate, from) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const signedUser = result.user;
        setUser(signedUser);
        saveUser(signedUser.email, signedUser.displayName, "put");
        navigate(from);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        // navigate('/')
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //save user to mongodb
  const saveUser = (displayName, email, password, method) => {
    const user = { displayName, email, password };
    console.log(user);
    fetch("https://still-ocean-05548.herokuapp.com/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    register,
    signInUsingEmail,
    signInUsingGoogle,
    logOut,
    setLoading,
    loading,
    authError,
  };
};

export default useFirebase;
