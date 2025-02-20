import React, { useEffect, useState } from 'react';
import AuthContext from './Context';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading, setLoading] = useState(true)
    const createUser = ( email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = ()=>{
        return signInWithPopup(auth,provider)
    }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log( 'user state', currentUser );
        })  
        return()=>{
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,loading,createUser,login, googleLogin,logout
    }
    return (
        <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
    );
};

export default AuthProvider;