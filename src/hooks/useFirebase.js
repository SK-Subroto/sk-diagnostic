import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
    signOut, updateProfile, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        // signInWithPopup(auth, googleProvider)
        //     .then(result => {
        //         console.log(result.user)
        //         setUser(result.user)
        //     })
        //     .finally(() => {
        //         setIsLoading(false);
        //     });
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
    }

    const processLogin = (email, password) => {
        setIsLoading(true);
        // signInWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         const { displayName, email, photoURL } = result.user;
        //         const loggedInUser = {
        //             name: displayName,
        //             email: email,
        //             photo: photoURL
        //         };
        //         setUser(loggedInUser);
        //         setError('');
        //     })
        //     .catch(error => {
        //         setError(error.message);
        //     })
        return signInWithEmailAndPassword(auth, email, password);
    }

    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                logOut()
                setError('');
                verifyEmail();
                
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setUserName(name);
            })
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    
    return {
        user,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        processLogin,
        logOut,
        registerNewUser,
        error,
        setError
    };
};


export default useFirebase;