import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../molecules/Logo'

export default function Navbar() {
    return (
        <nav className="flex flex-row p-4">
            <Logo/>
            <div className="flex-1"/>
            <div className="place-self-end flex gap-2 font-bold">
                <Link to="/signup" className="text-blue-800">
                    sign up
                </Link>
                |
                <Link to="/signin" className="text-blue-800">
                    sign in
                </Link>
            </div>
        </nav>
    )
}