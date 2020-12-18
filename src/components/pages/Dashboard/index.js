import React from 'react'
import { useHistory } from 'react-router-dom'

import firebase from '../../services/Firebase'
import Sidenav from '../../organisms/DashboardSidebar'
import Menu from '../../organisms/DashboardMenu'

export default function Dashboard() {
    const history = useHistory()
    const [user, setUser] = React.useState()
    const [currentPage, setCurrentPage] = React.useState('HOME')

    function handleLogout() {
        firebase.auth().signOut()
        .then(() => {
            history.replace('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                setUser(user)
            } else {
                history.replace('/signin')
            }
        })
    })

    if (user) {
        return (
            // TODO: Create a Dashboard Organism
            <div className="h-screen flex gap-1 md:gap-4">
                <Sidenav
                    handleLogout={handleLogout}
                    setCurrentPage={setCurrentPage}
                />
                <Menu
                    currentPage={currentPage}
                    user={user}
                />
            </div>
        )
    } else {
        return (
            // TODO: Create a Spinner Organism
            <h1>Loading...</h1>
        )
    }
}