import React from 'react'
import { useHistory } from 'react-router-dom'

import firebase from '../../services/Firebase'
import SignUpCard from '../../organisms/SignupCard'
import Navbar from '../../organisms/SignupNavbar'

export default function SignUp() {
    const history = useHistory()
    
    function handleSignUpWithGoogle(event) {
        event.preventDefault()
        const provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // const user = result.user
            //TODO: Add user record to firebase realtime database
            

            history.replace('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function handleSignUpWithEmail(event, email, password, confPassword, acceptTos) {
        event.preventDefault()
        if (password === confPassword && acceptTos) {
            // TODO: Hash password with a salt from username
            // const password =
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user, 'signed in')
            })
            .error((error) => {
                console.log(error)
            })
        } else {
            console.log('No')
        }
    }

    return (
        <div className="h-screen flex flex-col">
            <Navbar/>
            <SignUpCard
                handleSignUpWithEmail={handleSignUpWithEmail}
                handleSignUpWithGoogle={handleSignUpWithGoogle}
            />
        </div>
    )
}