import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] = useState(true)

    const provider = new GoogleAuthProvider()
    
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    //    signOut 
    const logOut = ()=>{
        return signOut(auth)
    }

    const updateUserProfile = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    // google login 
    const googleLogin = ()=>{
        return signInWithPopup(auth, provider)
    }
    // on auth state change 
   useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
     })
     return ()=>{
        unSubscribe()
     }
   },[])

  
    const userInfo = {
        createUser,
        loginUser,
        user,
        logOut,
        updateUserProfile,
        googleLogin,
        loading
        
    }

    return (
        <AuthContext.Provider  value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;