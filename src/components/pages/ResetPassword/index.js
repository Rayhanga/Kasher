import React from 'react'
import { useHistory } from 'react-router-dom'

import firebase from '../../services/Firebase'
import ResetPasswordCard from '../../organisms/ResetPasswordCard'

export default function ResetPassword() {
    const history = useHistory()

    function handleResetPasswordEmail(event, email) {
        event.preventDefault()

        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            console.log('Password reset email sent')
            history.push('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="h-screen flex flex-col justify-center">
            <ResetPasswordCard
                handleResetPasswordEmail={handleResetPasswordEmail}
            />
        </div>
    )
}