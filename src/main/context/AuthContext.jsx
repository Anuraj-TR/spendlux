import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [firebaseUser, setFirebaseUser] = useState();
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();


  // google signin
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true)
    signInWithPopup(auth, provider).then(result => {
      setLoading(false);
      return result;
    }).catch(err=> console.log(err))
  }

  // signout
  const logOut = () => {
    setLoading(true);
    signOut(auth).then(result => {
      setLoading(false)
      return result;
    }).catch(err=> console.log(err))
    setUser(null)
    setFirebaseUser(null)
    navigate('/signin')
  }

  // onAuthChange
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseUser(currentUser);
      setUser({
        userId: currentUser.uid,
        firstName: currentUser.displayName.split(" ")[0],
        secondName: currentUser.displayName.split(" ")[1],
        email: currentUser.email,
        imageUrl: currentUser.photoURL,
        phoneNumber: currentUser.phoneNumber,
      });
    });
    return () => {
      unSubscribe()
    };
  },[])


  return (
    <AuthContext.Provider value={{googleSignIn,user,firebaseUser,logOut,loading}}>
      {children}
    </AuthContext.Provider>
  )
}