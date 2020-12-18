import React from 'react'

// TODO: Make every pages for HOME, ADD_BILL, CONTACTS, HISTORY, SETTINGS

const Home = ({ user }) => {
    return (
        <main>
            <h1>Home</h1>
            <h2>{user.uid}</h2>
            <h2>{user.displayName} ({user.email})</h2>
        </main>
    )
}

const AddBill = () => {
    return (
        <main>
            <h1>Add Bill</h1>
        </main>
    )
}

const Contacts = () => {
    return (
        <main>
            <h1>Contacts</h1>
        </main>
    )
}

const History = () => {
    return (
        <main>
            <h1>History</h1>
        </main>
    )
}

const Settings = () => {
    return (
        <main>
            <h1>Settings</h1>
        </main>
    )
}

export default function Menu({ currentPage, user}) {
    switch (currentPage) {
        case "HOME":
            return <Home user={user}/>
        case "ADD_BILL":
            return <AddBill/>
        case "CONTACTS":
            return <Contacts/>
        case "HISTORY":
            return <History/>
        case "SETTINGS":
            return <Settings/>
        default:
            console.log('Switch Case Broke on DashboardMenu :(')
            break
    }
}