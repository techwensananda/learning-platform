import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import {getAuth ,createUserWithEmailAndPassword ,    getRedirectResult, GithubAuthProvider , signInWithEmailAndPassword, onAuthStateChanged, signOut , signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const UserContext = ({ children }) => {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  

  const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
  }


  const updateProfileUser = (profile) => {
  return updateProfile(auth.currentUser,profile )
  }

 const loginWithGoogle = () => {
   return signInWithPopup(auth, googleProvider)
  }
 const loginWithGithub = () => {
  return signInWithPopup(auth, githubProvider)
  }


  const signOutUser = () => {
 return  signOut(auth)
}
  useEffect(() => {
    // setLoading(true)
   const unsubscribe = onAuthStateChanged(auth, currentUser => {
     setUser(currentUser)
    setLoading(false)
     
     
   })
    
    return () => {
      unsubscribe()
      console.log("first")
    }
  },[])
  
  const userInfo ={user ,updateProfileUser, createUser ,loginUser ,signOutUser ,loginWithGoogle ,loading ,loginWithGithub}
  return (
    <AuthContext.Provider  value={userInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default UserContext