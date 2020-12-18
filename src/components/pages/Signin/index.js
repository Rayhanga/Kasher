import React from 'react'
import { useHistory } from 'react-router-dom'

import firebase from '../../services/Firebase'
import SignInCard from '../../organisms/SigninCard'

export default function SignIn() {
    const history = useHistory()

    function handleSignInWithGoogle(event) {
        event.preventDefault()
        const provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // const user = result.user
            //TODO: Add user record to firebase realtime database
            

            history.replace('/')
        })
        .catch((error) => {
            console.error(error)
        })
    }
    function handleSignInWithEmail(event, email, password) {
        event.preventDefault()
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            //TODO: Add user record to firebase realtime database

        })
        .error((error) => {
            console.error(error)
        })
    }

    return (
        <div className="h-screen flex flex-col justify-center">
            <SignInCard
                handleSignInWithEmail={handleSignInWithEmail}
                handleSignInWithGoogle={handleSignInWithGoogle}
            />
        </div>
    )
}