import React from 'react'
import { 
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom'

import HomePage from './pages/Homepage'
import ResetPassword from './pages/ResetPassword'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Dashboard from './pages/Dashboard'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signin">
                    <SignIn/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/resetpassword">
                    <ResetPassword/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    )
}