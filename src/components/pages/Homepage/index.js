import React from 'react'
import { useHistory } from 'react-router-dom'

import firebase from '../../services/Firebase'

import HomeNavbar from '../../organisms/HomeNavbar'
import HomeHero from '../../organisms/HomeHero'

export default function HomePage() {
    const history = useHistory()

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                history.push('/dashboard')
            }
        })
    })

    return (
        <div className="h-screen flex flex-col">
            <HomeNavbar/>
            <HomeHero/>
        </div>
    )
}