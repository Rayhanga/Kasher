import userEvent from '@testing-library/user-event'
import React from 'react'

export default function Header({ displayName }) {
    return (
        <header>
            <h1>Welcome back, {displayName}</h1>
            <h2>Got a bill to split ? Take a photo of the receipt and we're gonna count it for you!</h2>
        </header>
    )
}